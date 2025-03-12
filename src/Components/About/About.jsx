import React from 'react'
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section id='about' className='bg-[#212428] py-20 '>

      <div className="relative ">
      <h2 className='text-6xl font-bold  text-white flex justify-center z-10'> ABOUT  <span className=' ml-3 text-yellow-600'> ME </span> </h2>
      <h2 className='text-[110px] font-bold text-center text-white absolute -bottom-[50px] opacity-10  left-[410px] '>RECUME</h2>
      </div>

      <div className=" text-white flex container mx-auto  gap-[5%] mt-28 ">
        <div className="  w-[65%] py-10">
          <h2 className='text-3xl font-bold '>PERSONAL INFOS</h2>

          <div className="flex gap-8 mt-8  bor">
            <div className="text-xl flex flex-col gap-3 ">
            <p>First Name :  <span className='font-bold'> Anas</span> </p>
            <p>Last Name :  <span className='font-bold'>Ahmed</span> </p>
            <p>Age :  <span className='font-bold'>21 Years</span> </p>
            <p>Nationality :  <span className='font-bold'>Bangladeshi</span> </p>
            <p>Freelance :  <span className='font-bold'>Avaliable</span> </p>

            </div>
            <div className="text-2xl flex flex-col gap-3 ">
              <p>Address : <span className='font-bold'>Dhaka </span> </p>
              <p>Phone : <span className='font-bold'>+8801580724723 </span> </p>
              <p>Email : <span className='font-bold'>anasahmed4402@gmail.com </span> </p>
              <p>Linkedin : <span className='font-bold'>Anas Ahmed </span> </p>
              <p>Language : <span className='font-bold'>English,Bangali </span> </p>
            </div>

          </div>
          <div className="flex gap-5 items-center relative group  mt-10 w-[38%] *:">
          <button className='border-2 border-yellow-600 font-bold   py-2 pl-7 pr-12 rounded-full group-hover:bg-yellow-600 hover:duration-300 '>DOWNLOAD RESUME  </button>
          <p className=' w-[42px] h-[42px] rounded-full absolute flex justify-center items-center left-[206px]  bg-yellow-600'><FaDownload  className=' text-2xl  ' /></p>
          </div>

        </div>

        <div className="flex flex-col gap-5  w-[30%] ">

          <div className="border-4 border-yellow-600 flex flex-col gap-5 w-full h-1/2 items-center rounded-2xl ">
            <h3 className='text-6xl font-bold text-yellow-600 mt-5'>01+</h3>
            <p>UEARS OF EXPERIENCE</p>
          </div>

          <div className="border-4 border-yellow-600 flex flex-col gap-5 w-full h-1/2 items-center rounded-2xl">
            <h3  className='text-6xl font-bold text-yellow-600 mt-5 '>15+</h3>
            <p>PROJECTS DONE</p>
          </div>          


        </div>
      </div>
    </section>
  )
}

export default About
