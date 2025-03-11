import React from 'react'
import Whon from './h-img/portfolio.jpg'
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className=' bg-[#212428] text-white py-10  px-2'>

      <div className="flex md:flex-row flex-col-reverse  gap-[2%]  ">

        <div className="flex md:flex-row flex-col-reverse gap-[4%] w-[92%]  ">
          <div className="flex md:justify-end md:w-[32%] ml-[4%] md:mt-0 mt-5">
            <div className=" border bg-[#D1CDCE] rounded-2xl flex flex-col justify-end ">
              <img className=' rounded-2xl  ' src={Whon} alt="" />

            </div>

          </div>

          <div className="md:w-[60%]  ">

            <div className="md:mt-20 mt-10 text-yellow-600  flex gap-1 items-center relative">
              <p className='md:w-[40px]  bg-yellow-600 h-[4px] rounded-md'></p>
              <h1 className='  font-bold md:text-6xl text-3xl md:ml-0 ml-3 '> <span className='md:opacity-0 absolute left-0 '>-</span> I'M ANAS AHMED.</h1>

            </div>
            <h4 className='md:mt-5 mt-3 font-bold md:text-5xl text-3xl md:ml-[45px] ml-[15px] '>Front End Developer</h4>
            <p className='mt-5 '>I'm a professional <span className='font-bold'>Front-End Developer</span> and focused on crafting clean & user-friendly experiences. With expertise in Bootstrap, Tailwind CSS, React JS and Next JS. I bring <br /> innovative web solutions to life. Let's build something great together!</p>

            <div className="flex gap-3 md:w-[50%] items-center mt-6  relative ">
              <button className='  border border-yellow-600  rounded-full px-12 py-4 text-[16px]  '>MORE ABOUT ME</button>
              <p className='border w-[55px] h-[55px] bg-yellow-600 rounded-full flex justify-center items-center absolute left-[180px] text-[26px] '><FaArrowRight /></p>
            </div>
          </div>

        </div>


        <div className="md:w-[5%] flex flex-col gap-8 text-2xl  ">
          <p className='mt-12  w-[40px] h-[40px] rounded-full flex justify-center items-center hover:bg-yellow-600'><FaHome className='w-[50px] ' /></p>
          <p className=' w-[40px] h-[40px]  rounded-full flex  justify-center items-center hover:bg-yellow-600 '><IoIosContact className='w-[50px] ' /></p>
          <p className=' w-[40px] h-[40px]  rounded-full flex  justify-center items-center hover:bg-yellow-600 '><MdOutlineBusinessCenter className='w-[50px] ' /></p>
          <p className=' w-[40px] h-[40px]  rounded-full flex  justify-center items-center hover:bg-yellow-600 '><FaDiagramProject className='w-[50px] ' /></p>
          <p className=' w-[40px] h-[40px]  rounded-full flex  justify-center items-center hover:bg-yellow-600 '><HiOutlineMailOpen className='w-[50px] ' /></p>
        </div>

      </div>



    </section>
  )
}

export default Hero
