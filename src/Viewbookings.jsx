import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { DateRange } from 'react-date-range';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Viewbookings.css';

export const Viewbookings = () => {
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    const day = formattedDate.getDate().toString().padStart(2, '0');
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = formattedDate.getFullYear();
    return `${day}-${month}-${year}`;
  };



  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); 
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 
  const [refresh, setRefresh] = useState(false);

  const [filterCriteria, setFilterCriteria] = useState({
    dateRange: { startDate: null, endDate: null },
    destination: '',
    accommodationType: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4003/viewbooking`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setData(response.data);
        setFilteredData(response.data); 
      } catch (error) {
        if (error.response) {
          setError(error.response.data.message || 'Error fetching data');
        } else if (error.request) {
          setError('Network error. Please try again.');
        } else {
          setError('Error fetching data');
        }
      }
    };
    fetchData();
  }, [id, token, refresh]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleFilter = () => {
    let filtered = data.filter((item) => {
      const startDate = filterCriteria.dateRange.startDate;
      const endDate = filterCriteria.dateRange.endDate;
      if (startDate && endDate) {
        const fDate = new Date(item.fdate);
        return fDate >= startDate && fDate <= endDate;
      }
      return true;
    });

    if (filterCriteria.destination) {
      filtered = filtered.filter((item) =>
        item.destination.toLowerCase().includes(filterCriteria.destination.toLowerCase())
      );
    }

    if (filterCriteria.accommodationType) {
      filtered = filtered.filter((item) =>
        item.accommodationtype.toLowerCase().includes(filterCriteria.accommodationType.toLowerCase())
      );
    }

    setFilteredData(filtered);
    setCurrentPage(1); 
  };

  const handleSort = (criteria) => {
    let sorted = [...filteredData];
    switch (criteria) {
      case 'arrivalDate':
        sorted.sort((a, b) => new Date(a.fdate) - new Date(b.fdate));
        break;
      case 'leavingDate':
        sorted.sort((a, b) => new Date(a.tdate) - new Date(b.tdate));
        break;
      case 'guests':
        sorted.sort((a, b) => a.guest - b.guest);
        break;
      default:
        break;
    }
    setFilteredData(sorted);
  };

  const noDataMessage = <tr><td colSpan="7">No data found</td></tr>;

  return (
    <>
      <h1>Customer Bookings </h1>
      {data && (
        <div className="flex-container">
          <div className="filter-controls">
            < DateRange
              ranges={[{
                startDate: filterCriteria.dateRange.startDate,
                endDate: filterCriteria.dateRange.endDate,
                key: 'selection'
              }]}
              onChange={(ranges) => setFilterCriteria({ ...filterCriteria, dateRange: ranges.selection })}
            />
            <input
              type="text"
              value={filterCriteria.destination}
              onChange={(e) => setFilterCriteria({ ...filterCriteria, destination: e.target.value })}
              placeholder="Destination"
            />
            <select
              value={filterCriteria.accommodationType}
              onChange={(e) => setFilterCriteria({ ...filterCriteria, accommodationType: e.target.value })}
            >
              <option value="">Select Accommodation Type</option>
              <option value="hotel">Hotel</option>
              <option value="hostel">Hostel</option>
              <option value="vacationRental">Vacation Rental</option>
              <option value="others">Others</option>
            </select>
            <button onClick={handleFilter}>Apply Filter</button>
          </div>

          <div className="sort-controls">
            <button onClick={() => handleSort('arrivalDate')}>Sort by Arrival Date</button>
            <button onClick={() => handleSort('leavingDate')}>Sort by Leaving Date</button>
            <button onClick={() => handleSort('guests')}>Sort by Number of Guests</button>
          </div>

          <Table id='table'>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Destination</th>
                <th scope="col">ArrivalDate</th>
                <th scope="col">LeavingDate</th>
                <th scope="col">HowMany</th>
                <th scope="col">Accommodation Type</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.destination}</td>
                    <td>{formatDate(item.fdate)}</td> {/* Format arrival date */}
                  <td>{formatDate(item.tdate)}</td> {/* Format leaving date */}
                    <td>{item.guest}</td>
                    <td>{item.accommodationtype}</td>
                  </tr>
                ))
              ) : (
                // Render "No data found" message if no items to display
                noDataMessage
              )}
            </tbody>
          </Table>

          {/* Pagination */}
           {currentItems.length > 0 && (
            <ul className="pagination">
              <FaArrowLeft onClick={() => setCurrentPage(currentPage - 1)} style={{ marginRight: '10px' }} />
              <FaArrowRight onClick={() => setCurrentPage(currentPage + 1)} style={{ marginLeft: '10px' }} />
            </ul>
          )}
        </div>
      )}
    </>
  );
};
