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
    <section className=' bg-black text-white py-10'>

      <div className="flex -2 gap-[4%] ">

        <div className="  flex justify-end w-[30%]  ">
          <div className="w-[80%]   border bg-[#D1CDCE] rounded-2xl flex flex-col justify-end">
            <img className='w-[100%] h-[90%]  ' src={Whon} alt="" />

          </div>

        </div>

        <div className=" w-[55%] ">

          <div className="mt-20 text-yellow-600  flex gap-1 items-center">
            <p className='w-[40px] bg-yellow-600 h-[4px] rounded-md'></p>
            <h1 className='  font-bold text-4xl '> I'M ANAS AHMED.</h1>

          </div>
          <h4 className='mt-5 font-bold text-3xl ml-[45px] '>Front End Developer</h4>
          <p className='mt-5 '>I'm a professional <span className='font-bold'>Front-End Developer</span> and focused on crafting clean & user-friendly experiences. With expertise in Bootstrap, Tailwind CSS, React JS and Next JS. I bring <br /> innovative web solutions to life. Let's build something great together!</p>
          
          <div className="flex gap-3 w-[50%] items-center mt-6  relative ">            
          <button className='  border border-yellow-600  rounded-full px-8 py-2 text-[12px] '>MORE ABOUT ME</button>
          <p className='border w-[39px] h-[39px] bg-yellow-600 rounded-full flex justify-center items-center absolute left-[137px] '><FaArrowRight /></p>
          </div>
        </div>

        <div className="w-[8%]  flex flex-col gap-8 text-2xl">
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
