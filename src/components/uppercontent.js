import React from 'react';
import './ContentCard.css';

function ContentCard({ title, description, image }) {
  return (
    <div className="upper-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ContentCard;
