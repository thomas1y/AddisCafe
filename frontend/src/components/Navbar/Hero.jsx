import React, { useEffect } from 'react';
import Glightbox from 'glightbox';
import './hero.css';
import HeroBtn from './HeroBtn';

const Hero = () => {
  useEffect(() => {
    new Glightbox({
      selector: '.glightbox',
    });
  }, []);

  return (
    <section id='hero' className='d-flex align-items-center'>
      <div
        className='container position-relative text-center text-lg-start'
        data-aos='zoom-in'
        data-aos-delay='100'
      >
        <div className='row'>
          <div className='col-lg-8'>
            <h1>
              Welcome to Yammy <span>Restaurant</span>
            </h1>
            <h2>Delivering great food for more than 18 years!</h2>
            <div className='btns'>
              <HeroBtn name='our menu' target='menu' />
              
            </div>
          </div>
          <div
            className='col-lg-4 d-flex align-items-center justify-content-center position-relative'
            data-aos='zoom-in'
            data-aos-delay='200'
          >
            <a
              href='https://www.youtube.com/watch?v=F3zw1Gvn4Mk'
              className='glightbox play-btn'
            >
              {/* You can insert an icon or image here */}
              ▶
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
