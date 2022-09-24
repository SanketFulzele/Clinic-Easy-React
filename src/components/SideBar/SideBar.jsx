import React from 'react'
import "./sidebar.css";
import ProfilePic from "../../assets/Profile.jpg"
import SidebarIcon from "../../assets/male.png"

const SideBar = () => {
  return (
    <div className='sidebar-container'>
      <h3 className='sidebar-heading'>Chaudhary Hospital</h3>

      <div className="user-info-component">
        <div className="user-img-container">
            <img src={ProfilePic} alt="profile-pic" className='user-profile-pic' />
        </div>
        <div className="user-name-number">
            <span className='user-text'>Dr. Sanjiv Chaudhary</span>
            <br/>
            <span className='user-text'>7273883798</span>
            <br/>
            <a href="/" className='user-text-anchor'>View and Edit Profile</a>
        </div>
      </div>


    <ul className='sidebar-container'>
    <li className='sidebar-options'>
        <img className='sidebar-logo' src={SidebarIcon} alt="home-logo"/>
        <span className='sidebar-option-name'>Home</span>
    </li>
    <li className='sidebar-options'>
        <img className='sidebar-logo' src={SidebarIcon} alt="home-logo"/>
        <span className='sidebar-option-name'>Book Appointment</span>
    </li>
    <li className='sidebar-options'>
        <img className='sidebar-logo' src={SidebarIcon} alt="home-logo"/>
        <span className='sidebar-option-name'>Mark Attendance</span>
    </li>

    </ul>




    </div>
  )
}

export default SideBar
