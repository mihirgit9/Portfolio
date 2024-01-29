import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import { toast } from 'react-toastify';

const Contact = () => {
  // Form Data
  const [formData, setFormData] = useState({
    fName:'', subject:"", email:'', phone:'', message:''
  });
  const [loading, setLoading] = useState(false);
  // Input field change handler
  function changeHnadler(event){
    const {name, value} = event.target;
   setFormData({...formData, [name]:value});
  }

  function timeOutFunc(state){
    toast.update(state,{render:'Message Sent Successfully', type:'success', isLoading:false, autoClose:1000} )
    setFormData({fName:'', subject:"", email:'', phone:'', message:''});
    setLoading(false);
  }
  
  // Submit Handler
  function submitHandler(event){
    event.preventDefault();
    setLoading(true);
    const state = toast.loading('please wait', {
      position:"bottom-center",
      theme:'dark',
    });
    setTimeout(()=>timeOutFunc(state), 3000)
  }

  return (
    <div id='contact' className=' bg-slate-300 '>
      <div className=' sm:w-[80%] w-[90%] mx-auto py-[100px] md:py-[80px]'>
        <h2 className=' w-fit mx-auto text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[3rem] text-blue-900 font-semibold underline underline-offset-2'>Contact Me</h2>
        <h3 className='w-fit mx-auto text-[13px] sm:text-[1rem] md:text-[1.3rem] lg:text-[2rem] text-purple-900 font-semibold my-2'>Message, Thoughts, Or Just Want to Say Hello?</h3>
        <form onSubmit={submitHandler} className={`flex flex-col gap-[10px] my-4 max-w-[400px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] mx-auto justify-center overflow-clip
        ${loading ? 'opacity-30': 'opacity-100'}`}>
          <input type='text' placeholder={`Enter your Name *`} required name='fName' value={formData.fName}
            onChange={changeHnadler}
            className='rounded-md px-4 py-[5px] md:py-[8px] xl:py-[10px] border-2 border-purple-400 outline-none shadow-sm shadow-black focus:border-purple-900 '
          />
          <input type='text' placeholder='Subject *' required name='subject' value={formData.subject}
            onChange={changeHnadler}
            className='rounded-md px-4 py-[5px] md:py-[8px] xl:py-[10px] border-2 border-purple-400 outline-none shadow-sm shadow-black focus:border-purple-900 '
          />
          <input type='email' placeholder='Enter your Email Id *' required name='email' value={formData.email}
            onChange={changeHnadler}
            className='rounded-md px-4 py-[5px] md:py-[8px] xl:py-[10px] border-2 border-purple-400 outline-none shadow-sm shadow-black focus:border-purple-900 '
          />
          <input type='tel' placeholder='Enter Your Phone *' required name='phone' value={formData.phone}
            onChange={changeHnadler}
            className='rounded-md px-4 py-[5px] md:py-[8px] xl:py-[10px] border-2 border-purple-400 outline-none shadow-sm shadow-black focus:border-purple-900 '
          />
          <textarea placeholder='Enter your message *' required name='message' value={formData.message}
            onChange={changeHnadler}
            className='rounded-md h-[7rem] px-4 py-[5px] md:py-[8px] xl:py-[10px] border-2 border-purple-400 outline-none shadow-sm shadow-black focus:border-purple-900 '
          />
          <button className='flex gap-4 items-center w-fit mx-auto bg-purple-700 text-white py-2 px-4 rounded-md my-4 hover:bg-purple-900 transition-all shadow-sm shadow-black'>
           <p className=' text-[1.1rem]' title='click to send'>Send Message</p>
           <IoMdSend className=' text-[1.5rem]'/>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact