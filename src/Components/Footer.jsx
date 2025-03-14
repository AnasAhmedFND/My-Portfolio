import React from 'react'
import { FiMessageCircle } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <section className='bg-[#212428] md:px-0 px-2 '>
      <div className="py-20  container mx-auto">
        <div className="relative mt-5">
        <h2 className='md:text-6xl text-4xl font-bold  text-white flex justify-center z-10'>GET IN TOUCH</h2>
        <h3 className='md:text-[110px] text-[80px] font-bold text-center text-white absolute md:-bottom-[50px] -bottom-[40px] opacity-10  md:left-[260px] left-[10px] '>CONTACT</h3>
        </div>

        <div className="text-white flex gap-[4%] mt-16 ">
          <div className="left w-[38%]   ">
            <h3 className='font-bold text-2xl'>DON'T BE SHY!</h3>
            <p className='mt-4'>Feel free to get in touch with me. I am always <br /> open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            
            <div className="flex mt-4 gap-4 items-center ">
              <p className='text-2xl w-[40px] h-[40px] flex justify-center items-center  bg-yellow-600 rounded-sm text-black'><FiMessageCircle /></p>
              <div className="">
                <h5 className='font-bold'>MAIL ME</h5>
                <p>anasahmed4402@gmail.com</p>
              </div>
            </div>

            <div className="flex  mt-4 gap-4 items-center">
              <p className='text-2xl w-[40px] h-[40px] flex justify-center items-center  bg-yellow-600 rounded-sm text-black '><IoCall /></p>
              <div className="">
                <h5 className='font-bold'>CALL ME</h5>
                <p>+880 1580724723</p>
              </div>
            </div>

            <div className="flex mt-5 gap-4 ml-12">
              <p className='w-[30px] h-[30px] rounded-full bg-black flex justify-center items-center text-xl '><IoLogoFacebook /></p>
              <p className='w-[30px] h-[30px] rounded-full bg-black flex justify-center items-center text-xl '><FaLinkedin  /></p>
              <p className='w-[30px] h-[30px] rounded-full bg-black flex justify-center items-center text-xl '><FaGithub /></p>
              <p className='w-[30px] h-[30px] rounded-full bg-black flex justify-center items-center text-xl '><FaTwitter /></p>

            </div>

          </div>

          <div className="right w-[58%]  ">
            <div className="flex gap-[5%] ">
            <input className='border py-2 px-2 rounded-lg bg-[#dcdae455] w-[40%] ' type="text" placeholder='Your name' />
            <input className='border py-2 px-2 rounded-lg bg-[#dcdae455] w-[40%] ' type="text" placeholder='Your email' />

            </div>
            <textarea className='border mt-10 rounded-l-xl rounded-t-xl w-full ' name="sms" id="messege" placeholder='Your message'></textarea>

            <div className="flex mt-8 relative">
            <button className='border-2 border-yellow-600 py-2 pl-8 pr-10 hover:bg-yellow-600 rounded-full '>SEND MESSAGE</button>
            <p className='absolute w-[40px] h-[40px]  rounded-full flex justify-center items-center text-xl left-[150px] bg-yellow-600 '><IoIosSend /></p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer
