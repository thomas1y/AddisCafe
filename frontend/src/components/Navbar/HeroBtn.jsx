import React from 'react'
import './heroBtn.css';



const HeroBtn = ({ name, target }) => {
  const handleScrollTo = (section) => {};
  return (
    
    <a 
    onClick={() => handleScrollTo(target)}
    className={`btn-hero animated fadeInUp scrollto ${
  name.includes('book') ? 'ms-4' : ''
}`}
>
      
     {name}
    </a>
   
  );
};
 

export default HeroBtn