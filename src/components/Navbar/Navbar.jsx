import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className='container-fluid container-xl d-flex align-items-center justify-content-lg-between' >
        <h1 className='logo me-auto me-lg-0'>
          <a href='/'>AddisCafe</a>
        </h1>
      </div>
    </nav>
    
  )
}

export default Navbar