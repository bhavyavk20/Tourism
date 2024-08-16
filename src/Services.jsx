import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faCodeFork, faEarthAmericas, faHotel, faPersonWalkingLuggage, faPlane, faSpoon, faUtensils } from '@fortawesome/free-solid-svg-icons'
import './Services.css'

export const Services = () => {
  return (
   <>
   <h1>Services</h1>
   <CardGroup className='d-container'>
      <Card>
        <FontAwesomeIcon icon={faHotel} className='icons'/>
        <Card.Body>
          <Card.Title className='titles'>Affordable Hotel</Card.Title>
        </Card.Body>
      </Card>
      <Card>
      <FontAwesomeIcon icon={faUtensils} className='icons'/>
        <Card.Body>
          <Card.Title className='titles'>Food&Drinks</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <FontAwesomeIcon icon={faBullhorn} className='icons'/>
        <Card.Body>
          <Card.Title className='titles'>Safty Guide</Card.Title>
        </Card.Body>
      </Card>
       <Card>
        <FontAwesomeIcon icon={faEarthAmericas} className='icons'/>
        <Card.Body>
          <Card.Title className='titles'>Around the World</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <FontAwesomeIcon icon={faPersonWalkingLuggage} className='icons'/>
        <Card.Body>
          <Card.Title className='titles'>Adventures</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <FontAwesomeIcon icon={faPlane} className='icons' />
        <Card.Body>
          <Card.Title className='titles'>Fastest Travel</Card.Title>
        </Card.Body>
      </Card> 
      
    </CardGroup>
   </>
  )
}
