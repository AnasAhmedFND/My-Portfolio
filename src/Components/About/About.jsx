import React from 'react'
import { FaDownload } from "react-icons/fa";
import Whon from './A-img/portfolio.jpg'
import { IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';


const About = () => {

  const hendeleResume = () => {
    toast.success('Download Resume')

  }

  return (
    <section id='about' className='bg-[#212428] md:py-20 py-10 px-2 md:px-0'>

      <div className="relative ">
        <h2 className='md:text-6xl text-4xl font-bold  text-white flex justify-center z-10'> ABOUT  <span className=' ml-3 text-yellow-600'> ME </span> </h2>
        <div className="flex justify-center  ">
        <h2 className='md:text-[110px] text-[80px]  font-bold  text-white opacity-10 absolute md:-bottom-12 -bottom-[40px] '>RECUME</h2>
          
        </div>
      </div>

      <img className='md:hidden block w-[200px] h-[210px] mx-auto mt-14 border-8 border-yellow-600 rounded-full ' src={Whon} alt="" />

      <p > <Link to='hero' smooth={true} duration={500} > <a className='md:fixed  hidden md:block relative md:left-[93.5%] top-[500px] w-[50px] h-[50px] bg-yellow-600 rounded-full  items-center text-white text-4xl ' href="#hero"> <IoIosArrowUp className='md:absolute ml-[7px] top-1 '/>
       </a> </Link> 
       </p>

      <div className=" text-white md:flex container mx-auto  gap-[5%] md:mt-28 mt-10 ">
        <div className="  md:w-[65%] md:py-10">
          <h2 className='text-3xl font-bold '>PERSONAL INFOS</h2>

          <div className="flex justify-between md:gap-0 gap-5 mt-8  bor">
            <div className="md:text-xl flex flex-col gap-3 md:w-1/2 ">
              <p>First Name :  <span className='font-bold'> Anas</span> </p>
              <p>Last Name :  <span className='font-bold'>Ahmed</span> </p>
              <p>Age :  <span className='font-bold'>21 Years</span> </p>
              <p>Nationality :  <span className='font-bold'>Bangladeshi</span> </p>
              <p>Freelance :  <span className='font-bold'>Avaliable</span> </p>

            </div>
            <div className="md:text-xl flex flex-col gap-3 md:w-1/2 ">
              <p>Address : <span className='font-bold'>Dhaka </span> </p>
              <p>Phone : <span className='font-bold'>+8801580724723 </span> </p>
              <p>Email : <span className='font-bold'>anasahmed4402@gmail.com </span> </p>
              <p>Linkedin : <span className='font-bold'>Anas Ahmed </span> </p>
              <p>Language : <span className='font-bold'>English,Bangali </span> </p>
            </div>

          </div>
          <div className="flex  items-center relative group  mt-10 md:w-[38%] ">            
            
            <a onClick={hendeleResume} className='border-2 border-yellow-600 font-bold   py-2 pl-7 pr-12 rounded-full group-hover:bg-yellow-600 hover:duration-300 md:ml-0 ml-5' href="/ANAS'S.pdf " download >DOWNLOAD RESUME</a>
             <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
               
              />        

            <p className=' w-[42px] h-[42px] rounded-full absolute flex justify-center items-center md:left-[203px] left-[218px]  bg-yellow-600 cursor-pointer '><FaDownload className=' text-2xl  ' /></p>
          </div>

        </div>

        <div className="flex md:flex-col gap-5  md:w-[30%] md:mt-0 mt-8 ">

          <div className="border-4 border-yellow-600 flex flex-col gap-5 w-full md:h-1/2 items-center rounded-2xl ">
            <h3 className='text-6xl font-bold text-yellow-600 mt-5'>02+</h3>
            <p className='text-center'>YEARS OF EXPERIENCE</p>
          </div>

          <div className="border-4 border-yellow-600 flex flex-col gap-5 w-full md:h-1/2 items-center rounded-2xl">
            <h3 className='text-6xl font-bold text-yellow-600 mt-5 '>15+</h3>
            <p>PROJECTS DONE</p>
          </div>


        </div>
      </div>
    </section>
  )
}

export default About
