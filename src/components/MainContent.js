// components/MainContent.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import ContentCard from './ContentCard';
import './MainContent.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MainContent() {
  const [itemsToShow, setItemsToShow] = useState(3);

  // Mock Data
  const contentData = [
    {
      id: 1,
      title: 'Content 1',
      description: 'Description for Content 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Content 2',
      description: 'Description for Content 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Content 3',
      description: 'Description for Content 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Content 4',
      description: 'Description for Content 4',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      title: 'Content 5',
      description: 'Description for Content 5',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      title: 'Content 6',
      description: 'Description for Content 6',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      title: 'Content 7',
      description: 'Description for Content 7',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      title: 'Content 8',
      description: 'Description for Content 8',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 3);
  };

  return (
    <div className="main-content">
      <h1>Main Content Area</h1>
      <Slider {...settings} className="carousel">
        {contentData.map((item) => (
          <ContentCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </Slider>
      {itemsToShow < contentData.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </button>
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
