import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";

const NavBar = () => {
    const location = useLocation();

  return (
    <div className={`lg:px-[10%] px-[5%] mx-auto flex sm:flex-row gap-2 justify-between sm:items-center sticky top-0 bg-white py-[20px] z-10
    ${location.pathname!=='/' ? 'flex-row items-center' : 'flex-col'}`}>
        {/* logo */}

        <Link to='/' reloadDocument>
          <p className=' lg:text-[1.7rem] text-[1.5rem] font-[500] tracking-wider logo-font '>
            <span>Mihir </span><span className='text-blue-900'>Thakur</span>
          </p>
        </Link>

        {/* navbars */}

        <div>
          {/* nav-1 */}

          <nav className={`flex sm:justify-end justify-center gap-4 sm:gap-6 items-center text-[10px]  sm:text-[1rem] font-medium text-slate-800
          ${location.pathname!=='/' ? 'hidden': ''}`}>
            <a href='/#home' className={`transition-all border-2 border-blue-900 px-2 rounded-xl scroll-m-0
            ${location.pathname==='/' ? ' bg-blue-900 text-white' : ' hover:bg-slate-300'}`}
            >Home</a>
            <a href='#skills' className={`transition-all border-2 border-purple-900 px-2 rounded-xl
            ${location.hash==='#skills' ? ' bg-purple-900 text-white' : 'hover:bg-slate-300'}`}
            >Skills</a>
            <a href='#projects' className={`transition-all border-2 border-purple-900 px-2 rounded-xl
            ${location.hash==='#projects' ? ' bg-purple-900 text-white' : 'hover:bg-slate-300'}`}
            >Projects</a>
            <a href='#contact' className={`transition-all border-2 border-purple-900 px-2 rounded-xl
            ${location.hash==='#contact' ? ' bg-purple-900 text-white' : 'hover:bg-slate-300'}`}
            >Contact Me</a>
          </nav>

          {/* nav-2 */}

          <nav className={`flex justify-end gap-[10px] sm:gap-6 sm:items-center items-center text-[10px] sm:text-[1rem] font-medium text-slate-800
          ${location.pathname==='/' ? 'hidden': ''}`}>
            <Link to={'/'} className='text-[1.2rem] sm:text-[1.7rem] text-blue-900 hover:scale-[110%] transition-all'>
             <AiFillHome />
            </Link>

            <a href='mailto:mihirmoofy@gmail.com' target='_blank' rel='noreferrer'
            className='transition-all border-2 border-blue-900 px-2 rounded-xl hover:bg-blue-900 hover:text-white'
            >Hire Me</a>

          </nav>
        </div>
        
    </div>
  )
}

export default NavBar