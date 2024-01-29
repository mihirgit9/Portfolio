import React from 'react'
import {projects} from '../data';
import ProjectCard from './ProjectCard';
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div id='projects' className=' project-bg py-[100px] md:py-[80px] z-[0] relative'>
      <div className='sm:w-[80%] w-[90%] mx-auto'>
        {/* Heading */}
        <div>
          <h2 className=' w-fit mx-auto text-[2rem] md:text-[4rem] font-semibold text-blue-900 underline underline-offset-2'>Projects</h2>
          <p className=' w-fit mx-auto text-purple-900 font-semibold'>Top Projects are listed below. </p>
        </div>

        {/* Cards */}
        <div className=' flex flex-wrap gap-[2rem] lg:gap-[3rem] justify-center md:justify-between items-start my-[3rem] md:my-[5rem]'>
          {
            projects.map((project)=>{
              return(<ProjectCard id={project.id} project={project}/>)
            })
          }
        </div>

        {/* button */}
        <a href='https://github.com/mihirgit9' target='_blank' rel='noreferrer' className=' bg-purple-900 text-white rounded-md block w-fit mx-auto py-2 px-4 hover:bg-blue-900 transition-all'>Show All <FaExternalLinkAlt className='inline text-[0.8rem] ml-2 mb-1' /></a>
      </div>
      {/* watermark */}
      <p className='absolute hidden lg:inline bottom-[-2.1rem] right-0 text-[6rem] font-semibold z-[-1] select-none text-slate-300'>Projects</p>
    </div>
  )
}

export default Projects