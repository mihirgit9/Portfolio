import React, { useState } from 'react'
import { FaGithub} from "react-icons/fa";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

const ProjectCard = (props) => {
    const project=props.project;
    const [desc, setDesc]= useState(false);

    function handleDesc(){
        setDesc(desc=>!desc);
    }


  return (
    <div  className=' w-[70%] sm:w-[60%] md:w-[44%] lg:w-[29%] h-[30vh] md:h-[27vh] lg:h-[22vh] xl:h-[26vh] border-2 border-purple-900 rounded-md  relative flex flex-col justify-between z-[0] card-css overflow-visible'>
        <div className='relative'>
            <h3 className=' text-center xl:text-[1.3rem] text-white font-semibold'>{project.name}</h3>
            <div onClick={handleDesc} className=' w-fit mx-auto text-[30px] text-slate-200  cursor-pointer '>{desc ? <MdArrowDropUp className='absolute top-[65%] right-[47%]' /> : <MdArrowDropDown className='absolute top-[65%] right-[47%] descArrow'/>}</div>
        </div>
        <p className={`absolute bg-slate-900 text-white p-2 px-3 text-[13px] lg:text-[12px] xl:text-[13px] text-justify w-[90%] max-h-[65%] rounded-md top-[18%] md:top-[20%] lg:top-[22%] left-[5%]   ${desc ? ' opacity-100 z-[1]' : 'opacity-0' } overflow-auto`}>{project.description}</p>  
        <a href={project.githubLink} target='_blank' rel='noreferrer' 
            className='block w-fit mx-auto bg-blue-900 text-white rounded-md p-1 px-2 text-[0.7rem] font-semibold hover:bg-purple-900 transition-all z-[0]'>
            <span>View Code</span><FaGithub className='inline ml-1 text-[0.8rem]'/>
        </a>
        <div className={`flex gap-1 md:gap-2 flex-wrap justify-center rounded-t-md skills-css z-[2] py-1 ${desc ? 'opacity-100' : 'opacity-0'}`}>
            {
                project.skills.map((skill)=>{
                    return(
                        <img src={skill} alt='skill' className='w-[5%]'/>
                    )
                })
            }
        </div>

        {/* background image */}
        <div className={`absolute bottom-0 z-[-1] rounded-md ${desc ? 'opacity-10' : 'opacity-30'}`}><img src={project.backgroundImg} alt={project.imageAlt}/></div>
    </div>
  )
}

export default ProjectCard