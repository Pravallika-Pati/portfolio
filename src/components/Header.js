import React from 'react'
import "./Header.css";
function Header() {
  return (
    <header>
      <div className='container flex'>
        <div className='nav'>
          <a href=''>Home</a>
          <a href=''>Skills</a>
          <a href=''>Profiles</a>
          <a href=''>Projects</a>
          <a href=''>Internship</a>
          <a href=''>Certifications</a>
          <a href=''>Contact</a>
        </div>
      </div>
    </header>
  )
}

export default Header;
