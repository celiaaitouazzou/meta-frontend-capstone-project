import React from 'react'
import logo from './Logo.svg';

function Logo() {
  return (
    <div className='logo w-16 h-16'>
        <img src={logo} alt="Logo of the Little Lemon"></img>
    </div>
  )
}

export default Logo