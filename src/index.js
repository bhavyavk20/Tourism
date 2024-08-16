import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Packages } from './Packages';
import { Services } from './Services';
import { About } from './About';
import { Login } from './Login';
import { Signup } from './Signup';
import { Home } from './Home';
import { Booking } from './Booking';
import { Profile } from './Profile';
import { Agency } from './Agency';
import { CreatePackages } from './CreatePackages';
import { Explore } from './Explore';
import { EditPackages } from './EditPackages';
import { EditProfile } from './EditProfile';
import { Userpackages } from './Userpackages';
import { Packagedetails } from './Packagedetails';
import { Profiles } from './Profiles';
import { AgencyProfile } from './AgencyProfile';
import { Viewbookings } from './Viewbookings';
import { Agencyhome } from './Agencyhome';
import { Admin } from './Admin';
import Agencyinterface from './Agencyinterface';
import { Payment } from './Payment';
import { Exploredetails } from './Exploredetails';
import Admininterface from './Admininterface';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/Admin' element={<Admin/>}>
      <Route path='Agencyinterface' element={<Agencyinterface/>}/>
      <Route path='Admininterface' element={<Admininterface/>}/>
      <Route path='Viewbooking' element={<Viewbookings/>}/>

    </Route>


    <Route path='/' element={<App/>}>
      <Route path='Packages' element={<Packages/>}/>
      <Route path='Services' element={<Services/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Signup' element={<Signup/>}/>
    </Route>


    <Route path='/user' element={<Home/>}>
     <Route index element={<Userpackages/>}/>
      <Route path='Booking' element={<Booking/>}/>
      <Route path='Profile' element={<Profile/>}/>
      <Route path='AgencyProfile' element={<AgencyProfile/>}/>
      <Route path='Userpackages' element={<Userpackages/>}/>
      <Route path='Packagedetails/:id' element={<Packagedetails/>}/>
    </Route>


    <Route path='/agency' element={<Agency/>}>
      <Route index element={<Agencyhome/>}/>
      <Route path='Agencyhome' element={<Agencyhome/>}/>
     <Route path='Profiles' element={<Profiles/>}/>
     <Route path='EditProfile' element={<EditProfile/>}/>
     <Route path='Createpackages' element={<CreatePackages/>}/> 
     <Route path='Explore' element={<Explore/>}/>
     <Route path='Exploredetails/:id' element={<Exploredetails/>}/>
     <Route path='Viewbooking' element={<Viewbookings/>}/>
     <Route path='EditPackages/:id' element={<EditPackages/>}/>
    </Route>


  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
