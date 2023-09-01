import React from 'react';

const Card = ({ data, contador }) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-image">
          <img src={data.image} alt={data.title} />
        </div>
        
        <div className="card-content">
          <h2 className="card-title">{data.title}</h2>
        </div>
       
        <div className="card-contar">
          <p className="card-cont">Cont #: {contador}</p>
        </div>

        <div className="card-actions">
         <p className="card-body">{data.body}</p>
          <button className="card-button">Ver más</button>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
