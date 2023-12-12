import React from 'react'
import {Link} from 'react-router-dom'
import "./navbar.css"


const Navbar = () => {
  return (
   <nav className='navbar'>
    
<h3 className='logo'>Logo</h3>
<ul className='nav-links'>
    <Link to='/'><li> Inicio</li></Link>
    <Link to='/patines'><li> Patines</li></Link>
    <Link to='/login'><li> Login</li></Link>
  
</ul>
   </nav>
  )
}

export default Navbar
