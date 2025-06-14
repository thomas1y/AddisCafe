import React from 'react';
import { whyUsData } from '../data/data';
import WhyUsCard from './WhyUsCard';
import './whyUs.css';

const WhyUsSection = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row">
          <h2 className="small-heading-with-line">Why Us</h2>
          <p className="large-highlight">Why Choose Our Restaurant</p>
        </div>
        <div className="row card-row">
          {whyUsData.map((item) => (
            <WhyUsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

