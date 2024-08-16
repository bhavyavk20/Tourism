import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Cards.css'


function Cards(props) {
    return (
      <Card style={{ width: '25rem', border:'none' }} className={props.class} >
        <Card.Img variant="top" src={props.img} />
        <Card.Body className='m-auto text-center'>
          <Card.Title className='title'>{props.title}</Card.Title>
          <Card.Text className='text'>{props.text}</Card.Text>
          <Button variant="primary" className='button-container'>Book now</Button>{' '}
        </Card.Body>
      </Card>
    );
  }
  
  export default Cards;