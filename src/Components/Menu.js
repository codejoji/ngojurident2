import React from 'react'
import MenuHeader from './ReusableComponents/MenuHeader'
import './Menu.css'
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate=useNavigate();
  return (
    <div style={{backgroundColor:"rgb(42, 40, 40)"}}>
        <MenuHeader/>
        <div className='menudiv'>
            <p className='menubuttons'>Careers</p>
            <p className='menubuttons'>Contact Us</p>
            <p className='menubuttons'>Privacy Policy</p>
            <p className='menubuttons'>Terms & Conditions</p>
            <p className='menubuttons'>Volunteer</p>
        </div>
    </div>
  )
}

export default Menu