import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='h-wapper'>
      <div className='h-container'>
        <div className='h-logo'>QuickLift</div>
        <div className='h-nav'>
           <span>Home</span>
           <span>About</span>
           <span>Contact</span>
           <span>Download App</span>
           </div>
      </div>
    </div>
  )
}

export default Header