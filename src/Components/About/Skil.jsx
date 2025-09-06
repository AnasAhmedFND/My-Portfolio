import React from 'react'
import Html from './A-img/s2.png'
import Css from './A-img/s1.png'
import Js from './A-img/s3.png'
import Boots from './A-img/s4.png'
import Talwind from './A-img/s5.png'
import Reactjs from './A-img/s6.png'
import Next from './A-img/s7.png'
import Git from './A-img/s8.png'

const Skil = () => {
    return (
        <section className='bg-[#212428] md:py-14 py-5  md:px-0 px-2  '>
            <div className="container mx-auto text-white ">
                <h2 className='text-center md:text-5xl text-3xl font-bold '>MY SKILLS</h2>

                <div className=" flex md:justify-between flex-wrap gap-[50px] justify-center md:mt-16 mt-10 ">
                    <div className="text-center  ">
                        <img className='md:w-[150px] w-[110px]  ' src={Html} alt="" />
                        <h4 className='mt-5 font-bold '>HTML5</h4>
                    </div>

                    <div className="text-center ">
                        <img className='md:w-[150px] w-[110px] ' src={Css} alt="" />
                        <h4 className='mt-5 font-bold'>CSS3</h4>
                    </div>

                    <div className="text-center ">
                        <img className='md:w-[150px] w-[110px]' src={Js} alt="" />
                        <h4 className='mt-5 font-bold'>JAVASCRIPT</h4>
                    </div>

                    <div className="text-center ">
                        <img className='md:w-[150px] w-[110px]' src={Boots} alt="" />
                        <h4 className='mt-5 font-bold'>BOOTSTRAP</h4>
                    </div>
                </div>

                <div className="flex md:justify-between flex-wrap gap-[50px] justify-center  mt-10 ">                

                <div className="text-center ">
                    <img className='md:w-[150px] w-[110px] ' src={Talwind} alt="" />
                    <h4 className='mt-5 font-bold'>TALWIND CSS</h4>
                </div>

                <div className="text-center ">
                    <img className='md:w-[150px] w-[110px] ' src={Reactjs} alt="" />
                    <h4 className='mt-5 font-bold'>REACT</h4>
                </div>

                <div className="text-center ">
                    <img className='md:w-[150px] w-[110px] ' src={Next} alt="" />
                    <h4 className='mt-5 font-bold'>NEXT JS</h4>
                </div>

                <div className="text-center ">
                    <img className='md:w-[150px] w-[110px] ' src={Git} alt="" />
                    <h4 className='mt-5 font-bold'>GITHUB</h4>
                </div>
                </div>

            </div>
        </section>
    )
}

export default Skil
