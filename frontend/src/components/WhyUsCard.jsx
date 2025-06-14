import React from 'react';

const WhyUsCard = ({ item }) => {
  return (
    <div className="col-lg-4 card-column">
      <div className="box" data-aos="zoom-in" data-aos-delay="200">
        <span>0{item.id}</span>
        <h4>{item.title}</h4>
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;

