// components/MainContent.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import ContentCard from './ContentCard';
import Uppercard from "./uppercontent"
import './MainContent.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MainContent() {
  const [itemsToShow, setItemsToShow] = useState(3);

  // Mock Data
  const contentData = [
    {
      id: 1,
      title: 'Data Visualization 1',
      description: 'Description for Data Visualization 1',
      image: 'https://via.placeholder.com/600x400/FF5733/FFFFFF/?text=Data%20Visualization%201',
    },
    {
      id: 2,
      title: 'Data Visualization 2',
      description: 'Description for Data Visualization 2',
      image: 'https://via.placeholder.com/600x400/FFC300/FFFFFF/?text=Data%20Visualization%202',
    },
    {
      id: 3,
      title: 'Data Visualization 3',
      description: 'Description for Data Visualization 3',
      image: 'https://via.placeholder.com/600x400/DAF7A6/000000/?text=Data%20Visualization%203',
    },
    {
      id: 4,
      title: 'Data Visualization 4',
      description: 'Description for Data Visualization 4',
      image: 'https://via.placeholder.com/600x400/6DD5FA/000000/?text=Data%20Visualization%204',
    },
    {
      id: 5,
      title: 'Data Visualization 5',
      description: 'Description for Data Visualization 5',
      image: 'https://via.placeholder.com/600x400/FF5733/FFFFFF/?text=Data%20Visualization%205',
    },
    {
      id: 6,
      title: 'Data Visualization 6',
      description: 'Description for Data Visualization 6',
      image: 'https://via.placeholder.com/600x400/FFC300/FFFFFF/?text=Data%20Visualization%206',
    },
    {
      id: 7,
      title: 'Data Visualization 7',
      description: 'Description for Data Visualization 7',
      image: 'https://via.placeholder.com/600x400/DAF7A6/000000/?text=Data%20Visualization%207',
    },
    {
      id: 8,
      title: 'Data Visualization 8',
      description: 'Description for Data Visualization 8',
      image: 'https://via.placeholder.com/600x400/6DD5FA/000000/?text=Data%20Visualization%208',
    },
  ];
  const contentUpper = [
    {
      id: 1,
      title: 'Data Visualization 1',
      description: 'Description for Data Visualization 1',
      image: 'https://via.placeholder.com/600x400/FF5733/FFFFFF/?text=Data%20Visualization%201',
    },
    {
      id: 2,
      title: 'Data Visualization 2',
      description: 'Description for Data Visualization 2',
      image: 'https://via.placeholder.com/600x400/FFC300/FFFFFF/?text=Data%20Visualization%202',
    },
    {
      id: 3,
      title: 'Data Visualization 3',
      description: 'Description for Data Visualization 3',
      image: 'https://via.placeholder.com/600x400/DAF7A6/000000/?text=Data%20Visualization%203',
    },
    {
      id: 4,
      title: 'Data Visualization 4',
      description: 'Description for Data Visualization 4',
      image: 'https://via.placeholder.com/600x400/6DD5FA/000000/?text=Data%20Visualization%204',
    }]

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 3);
  };

  const groupedCards = contentData.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3)


    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])
  

  return (
    
    <div className="main-content">
      <div className="header">
        <div>
        <h1>Main Content Area</h1>
        </div>
        <div>
        <FontAwesomeIcon icon={faCalendarAlt} className="header-icon" />
         <span className='span-e'>22 - 04 -2024
        </span>
        
          <FontAwesomeIcon icon={faClock} className="header-icon" /><span className='span-e'>6:30 PM</span>
        
        </div>
      </div>
        <div className='upper-container'>
          {contentUpper.map(item => (
            <Uppercard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            />
          ))}
        </div>

        


      <Slider {...settings} className="carousel">
        {groupedCards.map((group, index) => (
          <div key={index}>
            <div className="card-container">
              {group.map((item) => (
                <ContentCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        ))}
      </Slider>
      {itemsToShow < contentData.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
      {itemsToShow >= contentData.length && (
        <p className="no-more-items">No more items to load</p>
      )}
    </div>
  );
}

export default MainContent;

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow arrow-prev" onClick={onClick}>
      &#10094;
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow arrow-next" onClick={onClick}>
      &#10095;
    </div>
  );
}
