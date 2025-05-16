import React from 'react'
import Hecto from './port-img/hecto.png'
import Rutar from './port-img/rutar.png'
import Exclusive from './port-img/exclosive.png'


const Portfolio = () => {
  return (
    <section id='portfolio' className='bg-[#212428] md:px-0 px-2 '>
      <div className="container mx-auto py-20 ">
        <div className="relative ">
          <h2 className='text-center font-bold md:text-5xl text-3xl text-white '>MY <span className='text-yellow-600'>PORTFOLIO</span> </h2>
          <h2 className='font-bold absolute md:-bottom-[60px] -bottom-[40px] md:left-[300px] left-[25px]  opacity-10 text-white md:text-[120px] text-[80px] '>WORKS</h2>
        </div>

        <div className="md:mt-32 mt-20 md:flex  justify-between  ">
          <a href="https://hekto-ecommerce-project.vercel.app/" target='_blanck' rel='noopener noopener' >
          <div className="relative  ">
          <img className='md:w-[469px] md:h-[194px] rounded-2xl' src={Hecto} alt="" />
          <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 duration-700 border md:h-[194px] h-[148px] md:w-[469px] w-[344px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>E-commerce Project</h4>
          </div>
          </a>

          <a href="https://exclusive-e-commerce-lsil.vercel.app/" target='_blanck' rel='noopener noopener' >
          <div className="relative md:mt-0 mt-5 ">
            <img className='md:w-[469px] md:h-[194px] h-[148px] rounded-2xl' src={Exclusive} alt="" />
            <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 duration-700 ease-in-out border md:h-[194px] h-[148px] md:w-[469px] w-[344px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>E-commerce Project</h4>
          </div>
          </a>
          


        </div>
        <div className="md:mt-10 mt-5 md:flex justify-between  ">

        <a href="https://hekto-ecommerce-project.vercel.app/shop" target='_blanck' rel='noopener noopener'>
          <div className="relative   ">
          <img className='md:w-[469px] md:h-[194px] rounded-2xl' src={Hecto} alt="" />
          <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 duration-700 border md:h-[194px] h-[148px] md:w-[469px] w-[344px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>E-commerce Project</h4>
          </div>
          </a>

          <a href="https://exclusive-e-commerce-lsil.vercel.app/" target='_blanck' rel='noopener noopener' >
          <div className="relative md:mt-0 mt-5 ">
            <img className='md:w-[469px] md:h-[194px] h-[148px] rounded-2xl' src={Exclusive} alt="" />
            <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 duration-700 ease-in-out border md:h-[194px] h-[148px] md:w-[469px] w-[344px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>E-commerce Project</h4>
          </div>
          </a>


        </div>



      </div>
    </section>
  )
}

export default Portfolio
