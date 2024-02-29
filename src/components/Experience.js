import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './exp.css';
    
const Experience = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='cont' data-aos="fade-up">
      <h1>Internship</h1>
      <div className='works'>
        <p>Designed a static web page which includes home page services page login page and so on.</p>
        <img className='exp-img' src='images/medictrl.jpg'></img>
        <h3>Medictrl</h3>
        <h4>Frontend-developer Intern</h4>
      </div>
    </div>
  )
}

export default Experience
