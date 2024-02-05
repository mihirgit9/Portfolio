import React from 'react'


const EducationCard = (props) => {
  const education = props.education;
  return (
    <div className='w-[300px] md:w-[350px] mx-auto border-2 border-blue-900 rounded-lg py-2 px-3 bg-blue-100 shadow-sm shadow-black hover:drop-shadow-xl transition-all hover:rounded-none '>
      <h3 className='text-[1.1rem] md:text-[1.3rem] font-semibold text-green-800'>{education.course}</h3>
      <p className='font-semibold text-[0.8rem] mt-[-4px] px-1 text-slate-500'>{education.session}</p>
      <p className=' text-[1rem] md:text-[1.2rem] font-semibold my-3'>{education.institute}</p>
      <p className=' text-slate-500 text-[0.8rem] font-semibold'>Grade: {education.grade}</p>
    </div>
  )
}

export default EducationCard