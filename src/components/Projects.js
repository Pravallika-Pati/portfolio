import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './project.css';

const Projects = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='container'>
        <div className='content grid3'>
        <div className='box aos-init aos-animate' data-aos="flip-left">
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
