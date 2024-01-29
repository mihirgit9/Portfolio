import React from 'react'
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='w-100vw bg-blue-300 py-[10px] sm:py-[2rem] relative overflow-clip'>
      <div className='w-[80%] mx-auto flex sm:flex-row flex-col-reverse justify-between items-center sm:items-start  gap-4'>
        {/* social media */}
        <div className='flex flex-col justify-between items-center gap-2 md:gap-3'>
          {/* icons */}
          <div className='flex gap-4 md:gap-6 items-center text-[1.5rem] md:text-[2rem]'>
            <a href='https://www.linkedin.com/in/mihir-thakur7/' target='_blank' rel='noreferrer'>
              <FaLinkedin className='transition-all hover:text-purple-900' />
            </a>
            <a href='https://github.com/mihirgit9' target='_blank' rel='noreferrer'>
              <FaGithub className='transition-all hover:text-purple-900' />
            </a>
            <a href='mailto:mihirmoofy@gmail.com' className='text-[1.9rem] md:text-[2.4rem] transition-all hover:text-purple-900'><MdEmail /></a>
           
          </div>
          {/* telephone */}
          <div>
            <a href='tel:9934730210' className='flex gap-1 md:gap-2 items-center text-[13px] md:text-[1rem] transition-all hover:text-purple-900'><FaPhoneAlt /> <p>+91 9934730210</p></a>
          </div>
        </div>

        {/* navigation */}
        <div className='flex items-center justify-between gap-5 md:gap-6 text-[13px] sm:text-[1rem]'>
          <a href='#home' className='font-semibold transition-all hover:text-purple-900'>Home</a>
          <a href='/about' className=' font-semibold transition-all hover:text-purple-900'>About Me</a>
        </div>
      </div>
      {/* watermark */}
      <div className='absolute bottom-[-1rem] md:bottom-[-1.5rem] right-0 sm:text-[3rem] md:text-[4rem] text-[0] text-slate-200 font-semibold opacity-40 select-none'>Mihir Thakur</div>
    </div>
  )
}

export default Footer