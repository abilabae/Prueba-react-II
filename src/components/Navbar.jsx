import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  



  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info navbar-dark">
  <div className="container">
    <NavLink className="navbar-brand" to="/"><span>🍕</span>Pizzeria Mamma Mia!</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="cart"><span className='display-6'>🛒</span></NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
