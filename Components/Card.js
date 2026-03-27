import React from 'react';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card-container">
            <img src={imageUrl} alt={title} style={{ width: '100px' }}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Card;