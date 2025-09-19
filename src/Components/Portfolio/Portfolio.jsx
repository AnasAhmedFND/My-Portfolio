import React from 'react'
import Hecto from './port-img/hecto.png'
import Shane from './port-img/shane.png'
import Exclusive from './port-img/exclosive.png'
import Jenstore from './port-img/jinstore.png'
import Buildexo from './port-img/buildexo.png'
import Health from './port-img/health.png'
import Arrow from './port-img/arrow-4.png'
import { motion } from "motion/react"




const Portfolio = () => {
  return (
    <section id='portfolio' className='bg-[#212428] md:px-0 px-2 '>
      <div className="container mx-auto py-20 ">
        <div className="relative ">
          <h2 className='text-center font-bold md:text-5xl text-3xl text-white '>MY <span className='text-yellow-600'>PORTFOLIO</span> </h2>
          <div className="flex justify-center ">
            <h2 className='font-bold absolute md:-bottom-16 -bottom-[40px] opacity-10 text-white md:text-[120px] text-[80px] '>WORKS</h2>

          </div>
        </div>

        {/* portfolio items 1-2 */}
        <div className="flex justify-center">
          <div className="md:mt-32 mt-20 md:flex  justify-between md:w-[80%] ">
            <a href="https://hekto-ecommerce-project.vercel.app/" target='_blanck' rel='noopener noopener' >
              <div className="relative  ">
                <img className='md:w-[469px] md:h-[194px] rounded-2xl' src={Hecto} alt="" />
                <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 duration-700 border md:h-[194px] h-[148px] md:w-[469px] w-[344px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>E-commerce Project <br /> 'Hekto'</h4>
              </div>
            </a>

            <a href="https://exclusive-e-commerce-lsil.vercel.app/" target='_blanck' rel='noopener noopener' >
              <div className="relative md:mt-0 mt-5 ">
                <img className='md:w-[469px] md:h-[194px] h-[148px] rounded-2xl' src={Exclusive} alt="" />
                <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 duration-700 ease-in-out border md:h-[194px] h-[148px] md:w-[469px] w-[344px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>E-commerce Project <br /> 'Exclusive'</h4>
              </div>
            </a>



          </div>

        </div>

        {/* portfolio items 3-4 */}

        <div className="md:mt-10 mt-5 md:flex justify-between  ">

          <a href="https://shane-resturant.vercel.app/" target='_blanck' rel='noopener noopener'>
            <div className="relative   ">
              <img className='md:w-[469px] md:h-[194px] rounded-2xl' src={Shane} alt="" />
              <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 duration-700 border md:h-[194px] h-[148px] md:w-[469px] w-[344px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>Resturant Project <br /> 'Shane Resturant' </h4>
            </div>
          </a>

          {/* arrow img */}
          <div className="hidden md:block  ">
            <motion.img
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,       // ২ সেকেন্ডে একবার ঘুরবে
                ease: "linear",    // constant speed
                repeat: Infinity,  // অনন্তবার repeat হবে
              }}

              className='border rounded-[70px] ' src={Arrow} alt="arrow" />

          </div>

          <a href="https://pro-health-sooty.vercel.app/" target='_blanck' rel='noopener noopener' >
            <div className="relative md:mt-0 mt-5 ">
              <img className='md:w-[469px] md:h-[194px] rounded-2xl' src={Health} alt="" />
              <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 duration-700 ease-in-out border md:h-[194px] h-[148px] md:w-[469px] w-[344px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>Health Care Project </h4>
            </div>
          </a>


        </div>

        {/* portfolio items 5-6 */}

        <div className="flex justify-evenly">
          <div className="md:mt-10 mt-5 md:flex justify-between md:w-[80%] ">

            <a href="https://buildecxo-njs.vercel.app/" target='_blanck' rel='noopener noopener'>
              <div className="relative   ">
                <img className='md:w-[469px] md:h-[194px] rounded-2xl' src={Buildexo} alt="" />
                <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 duration-700 border md:h-[194px] h-[148px] md:w-[469px] w-[344px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>Resturant Project <br /> 'Buildecxo' </h4>
              </div>
            </a>

            <a href="https://jinstore-3f7k.vercel.app/" target='_blanck' rel='noopener noopener' >
              <div className="relative md:mt-0 mt-5 ">
                <img className='md:w-[469px] md:h-[194px]  rounded-2xl' src={Jenstore} alt="" />
                <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 duration-700 ease-in-out border md:h-[194px] h-[148px] md:w-[469px] w-[344px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>E-commerce Project</h4>
              </div>
            </a>


          </div>

        </div>




      </div>
    </section>
  )
}

export default Portfolio
