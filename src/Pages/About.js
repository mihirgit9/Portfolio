import React from 'react'
import { FaBackward } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className=' bg-slate-200'>
      <div className='w-[90%] md:w-[80%] mx-auto'>
        <div className='flex justify-between items-center py-4'>
          <FaBackward onClick={()=>navigate(-1)} className='text-[1.5rem] mx-2 cursor-pointer hover:scale-110 transition-all' />
          <div className=' bg-black text-white rounded-md p-2 px-3'><a href='https://drive.google.com/file/d/1bWhl34_ySiMGUekQeG3A_j_WKdY8ibI4/view?usp=sharing' target='_blank' rel='noreferrer'>Download Resume</a></div>
        </div>
        <div className='my-[4rem] md:w-[75%] w-[85%] mx-auto'>
          Hi there!

        </div>
        <div>Education</div>

      </div>
    </div>
  )
}

export default About