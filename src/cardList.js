import React from 'react';
import Card from './card';
import './cardList.css';

const CardList = () => {
  const cardData = [
    {
      image: 'https://www.mcgehringroup.com/wp-content/uploads/2021/03/Smiling_Woman_l5w4of-1024x683.jpg',
      name: 'Scott Ayres',
      description: 'Busting social media myths at the Social Media Lab,...',
      sharedConnections: 23,
      sharedConnectionsImage: 'https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-260nw-1433809418.jpg',
    },
    {
      image: 'https://th.bing.com/th/id/R.59c3b86eaf39c2986aed76bed6d65daf?rik=us1m6QIXBMkI5A&riu=http%3a%2f%2fwww.lightroompresets.com%2fcdn%2fshop%2farticles%2f7_Tips_for_Getting_Sharper_Images_at_Open_Apertures_600x.jpg%3fv%3d1672440430&ehk=MxCrjL6ncCXWSHtnwVs9DJulSuGfKf8zqinPuYD1NxU%3d&risl=&pid=ImgRaw&r=0',
        name: 'Scott Ayres',
      description: 'SaaS Customer Onboarding Manager / Producer and...',
      sharedConnections: 7,
      sharedConnectionsImage: 'https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-260nw-1433809418.jpg',
    },
    {
        image: 'https://th.bing.com/th/id/OIP.JJrGrkCRRQhZrnkBmEbueQHaE8?w=864&h=576&rs=1&pid=ImgDetMain',
        name: 'Scott Ayres',
        description: 'Busting social media myths at the Social Media Lab,...',
        sharedConnections: 23,
        sharedConnectionsImage: 'https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-260nw-1433809418.jpg',
      },
      {
        image: 'https://th.bing.com/th/id/OIP.jJZmS1WVgi63HMekzzaKGQHaFJ?w=612&h=426&rs=1&pid=ImgDetMain',
      name: 'Scott Ayres',
        description: 'SaaS Customer Onboarding Manager / Producer and...',
        sharedConnections: 7,
        sharedConnectionsImage: 'https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-260nw-1433809418.jpg',
      },
    // Add more card data here
  ];

  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          name={card.name}
          description={card.description}
          sharedConnections={card.sharedConnections}
          sharedConnectionsImage={card.sharedConnectionsImage}
        />
      ))}
    </div>
  );
};

export default CardList;