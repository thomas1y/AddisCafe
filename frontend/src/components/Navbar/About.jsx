import React from 'react'
//import aboutImage from '../../../public/assets/images/about.jpg'
import './about.css';

const About = () => {
  return (
    <section id='about' className='about'>
        <div className='container' data-aos='fade-up'>
           <div className='row'>
              <div
              className='col-lg-6 order-1 order-lg-2'
              data-aos='zoom-in'
              data-aos-delay='100'>
                 <div className='about-img'>
                 <img src="/assets/images/about.jpg" alt="About" />
                </div>

              </div>
             <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content '>
                                  <h3>
                    Crafted with Passion, Served with Care
                  </h3>
                  <p className='fst-italic'>
                    Our commitment is simple — to deliver delicious food, made from fresh, high-quality ingredients, in a warm and welcoming atmosphere.
                  </p>
                  <ul>
                    <li>
                      <i className='bi bi-check-circle'></i> Locally sourced produce and ingredients for every dish.
                    </li>
                    <li>
                      <i className='bi bi-check-circle'></i> A perfect blend of traditional recipes and modern culinary techniques.
                    </li>
                     <li>
                      <i className='bi bi-check-circle'></i> From the moment you walk in, our dedicated team ensures your experience
                       is nothing short of exceptional — whether it’s recommending the perfect dish, accommodating special dietary needs, 
                       or simply creating a space where you can relax, connect, and enjoy a memorable meal.
                    </li>
                  </ul>
                  <p>
                    Whether you're stopping by for a casual meal or celebrating a special occasion, we aim to make every visit memorable. From the first bite to the last sip, we’re here to bring people together through food made with heart.
                  </p>

              </div> 
           </div>
        </div>
    </section>
  )
}

export default About