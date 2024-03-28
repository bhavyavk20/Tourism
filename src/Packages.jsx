import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Package.css'; // Custom CSS file for styling
import p1 from './boat.jpg'
import p2 from './temple.jpg'
import p3 from './waterfall.jpg'

export const Packages = () => {
  return (
    <>
      <h1>Packages</h1>
      <CardGroup className='flex-container'>
      <Card>
        <Card.Img variant="top" src={p1} className='img-container' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Iure ullam necessitatibus numquam ea, voluptates ratione 
             laborum magni repudiandae, quam cum doloribus. Laboriosam porro sequi laborum?
              Consectetur autem veniam facere asperiores.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
      <Card.Img variant="top" src={p2} className='img-container' />
        <Card.Body>
          <Card.Title>Brown Pagoda Near Body of Water</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Iure ullam necessitatibus numquam ea, voluptates ratione 
             laborum magni repudiandae, quam cum doloribus. Laboriosam porro sequi laborum?
              Consectetur autem veniam facere asperiores.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
      <Card.Img variant="top" src={p3} className='img-container' />
        <Card.Body>
          <Card.Title className='title'>Card title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Iure ullam necessitatibus numquam ea, voluptates ratione 
             laborum magni repudiandae, quam cum doloribus. Laboriosam porro sequi laborum?
              Consectetur autem veniam facere asperiores.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </>
  );
};
