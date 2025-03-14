import React from 'react'
import Hecto from './port-img/hecto.png'

const Portfolio = () => {
  return (
    <section className='bg-[#212428]  '>
      <div className="container mx-auto py-20 ">
        <div className="relative ">
          <h2 className='text-center font-bold text-5xl text-white '>MY <span className='text-yellow-600'>PORTFOLIO</span> </h2>
          <h2 className='font-bold absolute -bottom-[60px] left-[300px]  opacity-10 text-white text-[120px] '>WORKS</h2>
        </div>

        <div className="mt-32 flex justify-between  ">

          <div className="relative   ">
            <img className='w-[469px] h-[194px] rounded-2xl ' src={Hecto} alt="" />
            <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 border h-[194px] w-[469px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>E-commerce Project</h4>
          </div>

          <div className="relative  ">
            <img className='w-[469px] h-[194px] rounded-2xl' src={Hecto} alt="" />
            <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 border h-[194px] w-[469px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>E-commerce Project</h4>
          </div>


        </div>
        <div className="mt-10 flex justify-between  ">

          <div className="relative   ">
            <img className='w-[469px] h-[194px] rounded-2xl ' src={Hecto} alt="" />
            <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 border h-[194px] w-[469px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>E-commerce Project</h4>
          </div>

          <div className="relative  ">
            <img className='w-[469px] h-[194px] rounded-2xl' src={Hecto} alt="" />
            <h4 className='absolute -bottom-0 text-2xl font-bold -left-0 hover:bg-yellow-600 border h-[194px] w-[469px] flex justify-center items-center  opacity-5 hover:opacity-90 rounded-2xl '>E-commerce Project</h4>
          </div>


        </div>



      </div>
    </section>
  )
}

export default Portfolio
