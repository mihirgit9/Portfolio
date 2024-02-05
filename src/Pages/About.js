import React from 'react'
import { FaBackward, FaDownload, FaAddressCard, FaBookOpen, FaMusic, FaMotorcycle } from "react-icons/fa";
import { MdSchool, MdInterests, MdSportsCricket, MdModeOfTravel, MdLocationOn } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import {educations} from '../data'
import EducationCard from '../Components/EducationCard';
import aboutme from '../assets/AboutMe.png'

const About = () => {
  const navigate = useNavigate();
  return (
    <div className=' bg-slate-200 pb-[2rem]'>
      <div className='w-[90%] md:w-[80%] mx-auto'>

        <div className='flex justify-between items-center py-4'>
          <FaBackward onClick={()=>navigate(-1)} className='text-[1.5rem] mx-2 cursor-pointer hover:scale-110 transition-all' />
          <img src={aboutme} alt='aboutme' className='w-[30%]' />
          <div className=' bg-black text-white text-[0.8rem] md:text-[1rem] rounded-md p-2 px-3'><a href='https://drive.google.com/file/d/1bWhl34_ySiMGUekQeG3A_j_WKdY8ibI4/view?usp=sharing' target='_blank' rel='noreferrer'> <FaDownload className='inline mr-1' />Resume</a></div>
        </div>
      
        <div className='lg:my-[3rem] lg:w-[75%] w-[100%] mx-auto text-[0.8rem] lg:text-[1rem] bg-white py-4 px-6 rounded-md shadow-md shadow-black text-justify'>
          <span className='font-semibold'>Hi there!</span> I, Mihir Kr Thakur, am from Patna, Bihar. I have recently completed my <span className='font-semibold'>B.tech in 2023</span> from Bihar Engineering University
          in Electrical and Electronics Engineering with <span className='font-semibold'>8.3 CGPA.</span> I am a Full-Stack Developer and passionate problem-solver. I have strong command over 
          JavaScript, C++ and Python. I am a Certified <span className='font-semibold'>MERN Stack Developer</span> and have built many projects using React.js and Node.js. <br/>
          <br/>
          I am a quick learner and  ready to adapt new technological changes. I am confident enough that my knowledge and skills will make
          me a valuable asset for the team.
          <br/> <br/>
          <span className='font-semibold'>Thanks and Regards</span>
        </div>

        <div className=''>
          <h2 className='w-fit mx-auto my-[2rem] sm:text-[2rem] text-[1.3rem] font-semibold text-blue-900 bg-purple-400 px-6 rounded-md'>Education <MdSchool className='inline ml-1' /></h2>

          {/* Education Card */}
          <div className='my-[2rem] flex flex-wrap justify-center items-center gap-4'>
            {
              educations.map((education)=>{
                return(
                  <EducationCard id={education.id} education={education}/>
                )
              })
            }
          </div>
          <hr className='h-[3px] bg-amber-900 my-[2rem] md:mt-[3rem]'/>

          <div className='flex justify-center gap-[2rem] md:my-[3rem]'>
            <div className='bg-white w-fit p-4 rounded-md'>
              <h2 className='w-fit mx-auto mb-[1rem] sm:text-[1.7rem] text-[1.1rem] font-semibold text-blue-900 bg-purple-400 px-6 rounded-md'>Hobbies <MdInterests className='inline ml-1' /></h2>
              <div className='font-semibold text-amber-900 text-[1.1rem]'>
                <p>Cricket <MdSportsCricket className='inline ml-1' /></p>
                <p>Reading Books <FaBookOpen className='inline ml-1'/></p>
                <p>Classical Music <FaMusic className='inline ml-1'/></p>
                <p>Riding Bikes <FaMotorcycle className='inline ml-1'/></p>
                <p>Travelling <MdModeOfTravel className='inline ml-1'/></p>
              </div>
            </div>

            <div className='bg-white w-fit px-4 rounded-md'>
              <h2 className='w-fit mx-auto my-[1rem] sm:text-[1.7rem] text-[1.1rem] font-semibold text-blue-900 bg-purple-400 px-6 rounded-md'>Address <FaAddressCard className='inline ml-1' /></h2>
              <p className='mt-[2rem] font-semibold text-amber-900 text-[1.1rem]'><MdLocationOn className='inline mr-2' />
                Patna, Bihar, India <br/>
              </p>
              <p></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About