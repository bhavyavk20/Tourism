import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Package.css'; // Custom CSS file for styling
import p1 from './boat.jpg'
import p2 from './temple.jpg'
import p3 from './waterfall.jpg'
import p4 from './forest.jpg'
import p5 from './river.jpg'
import p6 from './palace.jpg'
import Cards from './Cards';

export const Packages = () => {

  let value = [
    {
      title: 'House boat',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      class: 'bg-light',
      img: p1
    },
    {
      title: 'Kariyathum para',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      img: p5
    },
    {
      title: 'Royal palace',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      img: p6
    },
    {
      title: 'Janaki forest',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      img: p4
    },
    {
      title: 'Arthanareeshwara Temple',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      img: p2
    },
    {
      title: 'Athirapally waterfall',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      img: p3
    }

  ]



  return (
    <>
      <h1>Packages</h1>
      <div className='flex-container'>
        {value.map((li) => (
          <Cards title={li.title} text={li.text} class={li.class}
            img={li.img} />
        ))}
      </div>
    </>
  );
};
