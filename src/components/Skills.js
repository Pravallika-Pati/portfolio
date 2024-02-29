import React,{useEffect} from "react";
import "./skills.css";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className="w-full h-screen aos-init aos-animate" data-aos="fade-left">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
            <p className="text-4xl font-bold inline border-b-4 border-\[\#FF4900\]">Skills</p>
            <p className="py-4">//These are the technologies I've worked with</p>
        </div>
        <div className="neon-button w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md" data-aos="fade-up">
            <img className="w-20 mx-auto" src="images/html.png"></img>
            <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500" data-aos="fade-up">
            <img className="w-20 mx-auto" src="images/css.png"></img>
            <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500" data-aos="fade-up">
            <img className="w-20 mx-auto" src="images/js.png"></img>
            <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500" data-aos="fade-up">
            <img className="w-20 mx-auto" src="images/react.png"></img>
            <p className="my-4">REACT</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500" data-aos="fade-up">
            <img className="w-20 mx-auto" src="images/nodejs.png"></img>
            <p className="my-4">NODE JS</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500" data-aos="fade-up">
            <img className="w-20 mx-auto" src="images/mongodb.png"></img>
            <p className="my-4">MONGO DB</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
