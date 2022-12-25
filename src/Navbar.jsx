import React, { useState } from 'react'
import logo from './assets/logo.png'
import userAvtar from './assets/Netflix-avatar.png'
import './Navbar.css'
import { ArrowDropDown, NotificationsNone, Search } from '@mui/icons-material'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () =>(window.onscroll = null);
    };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <img src={logo} alt="Netflix" />
            <span>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>New & Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
           <Search className="icon"/>
           <span>Children</span>
           <NotificationsNone className="icon"/>
           <img src={userAvtar} alt="user" />
           <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
