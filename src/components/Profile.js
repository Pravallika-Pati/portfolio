import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './profile.css';
    
const Profile = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
      <h1>Profiles</h1>
      <div className='container'>
        <div className='profiles-container'>
            <div className='box aos-init aos-animate' data-aos="flip-left">
                <img className='profile-logo' src='images/cc.jpg'></img>
                <h3 style={{color: "cyan"}}>Codechef</h3>
                <p>Problems</p>
                <p>Ratings</p>
                <button className='profile-button'><a href="">View Profile</a></button>
            </div>
            <div className='box aos-init aos-animate' data-aos="flip-left">
                <img className='profile-logo' src='images/leetcode.png'></img>
                <h3 style={{color: "cyan"}}>Leetcode</h3>
                <p>Problems</p>
                <p>Ratings</p>
                <button className='profile-button'><a href="">View Profile</a></button>
            </div>
            <div className='box aos-init aos-animate' data-aos="flip-left">
                <img className='profile-logo' src='images/hck.jpg'></img>
                <h3 style={{color: "cyan"}}>Hackerearth</h3>
                <p>Problems</p>
                <p>Ratings</p>
                <button className='profile-button'><a href="">View Profile</a></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
