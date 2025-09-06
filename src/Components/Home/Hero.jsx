import React, { useState } from 'react'
import Whon from './h-img/portfolio.jpg'
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { TypeAnimation } from 'react-type-animation';
import { useRef } from 'react';
import { Link } from 'react-scroll';


const Hero = () => {

  // menubar show ...........................................
  let [menu, setMenu] = useState(false)

  const hendelMenuBar = () => {
    setMenu(!menu)
  }
  console.log(menu);

  let homeRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }

  }




  return (
    <section id='hero' ref={homeRef} className=' bg-[#212428] text-white md:py-10 py-4  px-2'>

      <div className="flex md:flex-row flex-col-reverse  gap-[2%]  ">

        <div className="flex md:flex-row flex-col-reverse gap-[4%] w-[92%]  container mx-auto">
          <div className="flex md:justify-end md:w-[36%] ml-[4%] md:mt-0 mt-5  ">
            <div className=" border bg-[#D1CDCE] rounded-2xl flex flex-col justify-end  ">
              <img className=' rounded-2xl hidden md:block ' src={Whon} alt="" />

            </div>

          </div>

          <div className="md:w-[60%]  ">

            <div className="md:mt-20 mt-5 text-yellow-600  flex gap-1 items-center relative">
              <p className='md:w-[40px]  bg-yellow-600 h-[4px] rounded-md'></p>
              <h1 className='  font-bold md:text-6xl text-3xl md:ml-0 ml-3 '> <span className='md:opacity-0 absolute left-0 '>-</span> I'M ANAS AHMED.</h1>

            </div>

            <div className="font-bold md:mt-4 mt-2 md:text-[49px] text-[28px] md:ml-[45px] ml-[15px] ">
              <TypeAnimation className='  '
                sequence={[
                  ' Front-End Developer', 1000,
                  'React Developer', 1000,
                  'Next JS Developer', 1000]}

                repeat={Infinity}
              />


            </div>

            <p className='md:mt-5 mt-3 '>I'm a professional <span className='font-bold'>Front-End Developer</span> and focused on crafting clean & user-friendly experiences. With expertise in Bootstrap, Tailwind CSS, React JS and Next JS. I bring <br /> innovative web solutions to life. Let's build something great together!</p>

            <Link to='about' smooth={true} duration={500} >
              <div className="flex gap-3 md:w-[50%] items-center mt-6 cursor-pointer relative ">
                <button className='cursor-pointer  border border-yellow-600  rounded-full pl-10 pr-14 py-4 text-[16px] hover:bg-yellow-600 after:duration-500 after:right-[250px] after:ease-in-out hover:duration-700 '>MORE ABOUT ME</button>

                <p className=' w-[57px] h-[57px] bg-yellow-600 rounded-full flex justify-center items-center absolute left-[171px] text-[26px] '><FaArrowRight /></p>
              </div>
            </Link>
          </div>

        </div>


        <ul className={` md:w-[5%] flex flex-col gap-6 text-2xl md:static   px-2 ${menu ? 'absolute top-18 left-0  bg-yellow-500 w-full duration-1000 ease-in-out ' : 'absolute top-19 -left-72 duration-700 ease-in-out '}`} >

          <li> <a className='md:fixed top-[5%]   mt-12 md:w-[50px] md:h-[50px] md:rounded-full md:flex md:justify-center md:items-center md:hover:bg-yellow-600 md:p-2 flex gap-4 items-center md:border-none border-b pb-4 cursor-pointer md:border md:border-[#f5f5] md:bg-[#ff55ff15] group' href="#home" onClick={() => scrollToSection(homeRef)} > <span className='md:absolute md:bg-yellow-600  md:rounded-full md:px-4 md:py-1 md:mr-[146px] hidden md:group-hover:block '>Home</span>  <FaHome className='w-[50px] ' /> <span className='font-bold md:hidden '>Home</span>

          </a> </li>


          <li className='md:fixed top-[25%] ' > <Link to='about' smooth={true} duration={500} > <a className=' md:flex-row-reverse  md:w-[50px] md:h-[50px] md:rounded-full md:flex md:justify-center md:items-center md:hover:bg-yellow-600 md:p-2 flex gap-4 items-center md:border md:border-[#ff55ff15] md:bg-[#ff55ff15] border-b pb-4 cursor-pointer group' href="#about"  > <span className='md:absolute md:bg-yellow-600  md:rounded-full md:px-4 md:py-1 md:mr-[147px] hidden md:group-hover:block '>About</span> <IoIosContact className='w-[50px] text-3xl ' /><span className='font-bold md:hidden '>About</span>
          </a> </Link> </li>


          <li className='md:fixed top-[37%] '> <Link to='portfolio' smooth={true} duration={500} > <a className=' md:w-[50px] md:h-[50px] md:rounded-full md:flex md:justify-center md:items-center md:hover:bg-yellow-600 md:p-2 flex gap-4 items-center md:border-none border-b pb-4 cursor-pointer md:border md:border-[#f5f5] md:bg-[#ff55ff15] group' href="#portfolio">  <span className='md:absolute md:bg-yellow-600  md:rounded-full md:px-4 md:py-1 md:mr-[150px] hidden md:group-hover:block -right-[100px] '>Portfolio</span> <MdOutlineBusinessCenter className='w-[50px] text-3xl ' /><span className='font-bold md:hidden'>Portfolio</span>
          </a> </Link> </li>

          <li className='md:fixed top-[49%] '> <Link to='service' smooth={true} duration={500} > <a className=' md:w-[50px] md:h-[50px] md:rounded-full md:flex md:justify-center md:items-center md:hover:bg-yellow-600 md:p-2 flex gap-4 items-center md:border-none border-b pb-4 cursor-pointer md:border md:border-[#f5f5] md:bg-[#ff55ff15] group' href="#service">  <span className='md:absolute md:bg-yellow-600  md:rounded-full md:px-4 md:py-1 md:mr-[150px] hidden md:group-hover:block -right-[100px] '>Servics</span> <FaDiagramProject className='w-[50px] ' /><span className='font-bold md:hidden'>Servics</span>
          </a> </Link> </li>

          <li className='md:fixed top-[61%] '> <Link to='contact' smooth={true} duration={500} > <a className=' md:w-[50px] md:h-[50px] md:rounded-full md:flex md:justify-center md:items-center md:hover:bg-yellow-600 md:p-2 flex gap-4 items-center md:border-none border-b pb-4 cursor-pointer md:border md:border-[#f5f5] md:bg-[#ff55ff15] group' href="#contact"> <span className='md:absolute md:bg-yellow-600  md:rounded-full md:px-4 md:py-1 md:mr-[150px] hidden md:group-hover:block -right-[100px] '>Contact</span> <HiOutlineMailOpen className='w-[50px] text-3xl ' /><span className='font-bold md:hidden'>Contact</span>
          </a> </Link> </li>


        </ul>

        <div className="  ">
          <p onClick={hendelMenuBar} className='md:hidden text-2xl  '>{menu === true ? <ImCross className=' ml-[300px] w-[30px] h-[30px] flex justify-center items-center rounded-sm text-[#ddb2dd] z-20 ' /> : <TiThMenu className='border border-[#f5f5] ml-[300px] w-[30px] h-[30px] flex justify-center items-center rounded-sm  ' />} </p>
        </div>

      </div>



    </section>
  )
}

export default Hero
