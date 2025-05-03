import React from 'react';

function ExperienceCard({ title, description, price, duration }) {
  return (
    <div className="experience-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Price:</strong> {price}</p>
      <p><strong>Duration:</strong> {duration}</p>
    </div>
  );
}

export default ExperienceCard;
