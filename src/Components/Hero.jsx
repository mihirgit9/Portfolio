import React from 'react'
import {ReactTyped} from 'react-typed';
import heroimg from '../assets/hero-img.jpg';
import coverimg from '../assets/cover-photo.jpg';
import innoLogo from '../assets/inno_logo.png'

const Hero = () => {
  return (
    <div id='home' className='sm:w-[80%] w-[90%] flex flex-col-reverse lg:flex-row mx-auto justify-between lg:items-start items-center lg:py-[7rem] py-[2rem] relative overflow-visible '>
      {/* texts */}
      <div className='lg:w-[60%] w-[100%] flex flex-col justify-center items-center lg:items-start lg:mt-0 sm:mt-[7rem] mt-[6rem] '>
        <p className='text-[20px] sm:text-[27px] xl:text-[30px] text-slate-700'>Hi! Everyone,</p>
        <p className='text-[22px] sm:text-[32px] xl:text-[35px] lg:pt-4'>I, <span className='font-semibold'>Mihir Kr. Thakur, </span>am a</p>
        <div>
          <ReactTyped
            strings={['Full-Stack Developer', 'React Developer', 'Node Developer', 'Problem Solver' ]}
            typeSpeed={60}
            backSpeed={50}
            backDelay={1000}
            smartBackspace
            cursorChar='!'
            loop
            className='text-blue-900 text-[25px] sm:text-[35px] xl:text-[45px] font-semibold'
          ></ReactTyped>
        </div>
        <p className='my-[20px] w-[90%] lg:w-[80%] xl:w-[70%] text-[13px] sm:text-[15px] text-slate-700 font-intro text-justify'>Welcome to my Portfolio Website! <br/>I am currently working at Innovaccer as DataOps Engineer. I am a full-stack web developer specialzed in MERN stack development. This websites contains all the relevant informations about me. <span className='font-semibold'>Happy Explore!</span>   
        </p>
        <div className='flex flex-row gap-4 sm:gap-[2rem] text-[12px] sm:text-[1rem] mt-3 sm:mt-8 px-4 sm:px-6'>
          <a href='/about' className='border-2 border-blue-900 bg-transparent px-4 sm:px-6 py-2 rounded-xl about-btn transition-all relative'
          ><div className='absolute top-0 h-[100%] rounded-md bg-blue-900 about-bg z-[-1]'></div>About Me</a>
          <a href='mailto:mihirmoofy@gmail.com' target='_blank' rel='noreferrer' className='border-2 border-blue-900 px-4 sm:px-6 py-2 rounded-xl bg-blue-900 text-white animate-hire'
          >Hire Me</a>
        </div>
      </div>

      {/* photo */}
      <div className='xl:w-[40%] lg:w-[48%] md:w-[57%] sm:w-[70%] w-[77%] relative z-[-1] mb-[2rem]'>
        <img src={coverimg} alt='cover' className=' rounded-lg' loading='lazy'/>
        <div className='absolute top-[43%] left-[0] w-[100%] flex flex-col justify-center items-center'>
          <img src={heroimg} alt='hero-img' loading='lazy' className=' rounded-[50%] w-[45%]  border-[6px] border-white shadow-md shadow-black hero' />
          <div className='flex gap-1 items-center justify-center'>
            <img src={innoLogo} alt='innovaccer' className=' rounded-md w-[8%]'/>
            <p className=' md:text-[1.3rem]'>DataOps Engineer @<span className=' font-semibold'>Innovaccer</span></p>
          </div>
        </div>
      </div>

      {/* watermark */}
      <p className='absolute hidden lg:inline bottom-[-2rem] right-[-7rem] text-slate-300  font-semibold text-[5rem] select-none z-[-1]'>Mihir Thakur</p>

    </div>
  )
}

export default Hero