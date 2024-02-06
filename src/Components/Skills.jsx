import React from 'react'
import react from '../assets/React.png'
import javascript from '../assets/Javascript.svg'
import node from '../assets/NodeJs.svg'
import express from '../assets/Express.png'
import redux from '../assets/Redux.svg'
import html from '../assets/HTML.png'
import css from '../assets/CSS.png'
import tailwind from '../assets/Tailwind.png'
import git from '../assets/Git.svg'
import github from '../assets/Github.svg'
import mongodb from '../assets/MongoDB.svg'
import vercel from '../assets/Vercel.svg'
import mysql from '../assets/mysql.svg'
import docker from '../assets/Docker.svg'
import blob from '../assets/blob vector.png'
import {ReactTyped} from 'react-typed'

const Skills = () => {
  return (
    <div id='skills' className='bg-slate-300 relative z-[0] overflow-clip '>
      <div className='sm:w-[80%] w-[90%] mx-auto flex flex-col lg:flex-row justify-center items-center gap-[1rem] sm:gap-[2rem] py-[100px] md:py-[80px] z-[0] '>
        <div className='w-[90%] lg:w-[50%] mx-auto'>
          <h2 className='text-[2rem] md:text-[3rem] lg:text-[3.4rem] xl:text-[4rem] font-bold text-purple-900 leading-[2.1rem] md:leading-[3rem] lg:leading-[4rem]'><span className='text-[4rem] md:text-[5rem] lg:text-[5.4rem] xl:text-[6rem]'>M</span>y Skills <br/> 
          & Tech Stack <ReactTyped strings={['...']} loop cursorChar=' ' typeSpeed={500} /> </h2>
          <p className=' text-[14px] md:text-[1rem] my-6 px-6 md:w-[95%] lg:w-[85%] xl:w-[75%] text-slate-700 text-justify'>
            I have hands-on experience of the mentioned skills and have built numbers of <a href='#projects' className='text-blue-700'>projects. 
            </a> I have used <span className='font-semibold'>Redux toolkit </span> for store management and <span className=' font-semibold'>Context</span> for state management in React.
            <br/><br/>
            I have experience of building server-side application which consists of <span className=' font-semibold'>payment gateway</span> and 
            using <span className=' font-semibold'>Nodemailer</span> for sending emails to the users.
          </p>
        </div>
        {/* skill-icons */}
        <div className=' flex justify-center items-center flex-wrap gap-[2rem] lg:gap-[3rem] w-[90%] md:w-[75%]  lg:w-[50%] relative py-[1rem] sm:py-[2rem] md:pb-[3rem] lg:pb-[2rem]'>
          <img src={react} alt='React' className='skills-logo' title='React.js'/>
          <img src={node} alt='Node' className='skills-logo' title='Node.js'/>
          <img src={express} alt='Express' className='skills-logo' title='Express'/>
          <img src={redux} alt='Redux' className='skills-logo' title='Redux toolkit'/>
          <img src={javascript} alt='JavaScript' className='skills-logo' title='JavaScript'/>
          <img src={html} alt='HTML' className='skills-logo' title='HTML'/>
          <img src={css} alt='CSS' className='skills-logo' title='CSS'/>
          <img src={tailwind} alt='Tailwind' className='skills-logo' title='Tailwind'/>
          <img src={git} alt='git' className='skills-logo' title='Git'/>
          <img src={github} alt='github' className='skills-logo' title='Github'/>
          <img src={mysql} alt='mysql' className='skills-logo' title='MySQL'/>
          <img src={mongodb} alt='mongodb' className='skills-logo' title='MongoDB'/>
          <img src={vercel} alt='vercel' className='skills-logo' title='Vercel'/>
          <img src={docker} alt='docker' className='skills-logo' title='Docker'/>
          <img src={blob} alt='background' className='blob absolute z-[-1] w-[60%]'/>
        </div>
      </div>
      {/* watermark */}
      <p className='absolute hidden lg:inline bottom-[-2.5rem] left-[-8px] text-[7rem] text-blue-300 font-semibold select-none z-[-1]'>Skills</p>
    </div>
  )
}

export default Skills