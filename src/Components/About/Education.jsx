import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
    return (
        <section className='bg-[#212428] md:pt-20 pt-10 pb-10 md:px-0 px-2 '>
            <h2 className='text-center font-bold text-3xl text-white'>EXPERIENCE & EDUCATION</h2>
            <div className="container mx-auto text-white  md:flex md:mt-16 mt-10 gap-[4%] ">
                <div className="flex flex-col gap-10  md:w-[48%] md:ml-0 ml-5 ">
                    <div className="border-l-2 pl-8 ">
                        <div className="flex relative">
                            <p className='border w-[40px] h-[40px] flex justify-center items-center text-2xl rounded-full bg-yellow-600 absolute -left-[54px] bottom-[5px] '><FaGraduationCap /></p>
                            <p className=' py-1 px-5 font-bold rounded-full bg-[#d2a6d23c] '>2021-2022</p>
                        </div>
                        <h4 className='font-bold text-2xl mt-5 '>HIGHER SECONDARY <span className='text-xl'>-Shahid Smriti College</span>  </h4>
                        <p className='mt-5'>I completed my higher secondary education in Humanities, demonstrating my strong academic performance and commitment to learning while developing critical thinking and analytical skills.</p>
                    </div>

                    <div className="border-l-2 pl-8">
                        <div className="flex relative">
                            <p className='border w-[40px] h-[40px] flex justify-center items-center text-2xl rounded-full bg-yellow-600 absolute -left-[54px] bottom-[5px]'><FaGraduationCap /></p>
                            <p className=' py-1 px-5 font-bold rounded-full bg-[#d2a6d23c] '>2019-2020</p>
                        </div>
                        <h2 className='font-bold text-2xl mt-5 '>SECONDARY <span className='text-xl'>-Shyampur Union High School</span> </h2>
                        <p className='mt-5'>I completed my secondary to academics showcasing my dedication to academics and helping to develop my foundational knowledge and skills in various subjects.</p>

                    </div>

                </div>

                <div className=" md:w-[48%] h-[30%] border-l-2 pl-8 md:ml-0 ml-5 md:mt-0 mt-10 ">
                    <div className="flex relative">
                        <p  className='border w-[40px] h-[40px] flex justify-center items-center text-2xl rounded-full bg-yellow-600 absolute -left-[54px] bottom-[5px]'><HiOutlineMailOpen /></p>
                        <p className=' py-1 px-5 font-bold rounded-full bg-[#d2a6d23c] '>JUN,2024-PRESENT</p>
                    </div>
                    <h3  className='font-bold text-2xl mt-5 '>FRONTEND DEVELOPER</h3>
                    <p  className='mt-5'>1 year of experience as a frontend developer, skilled in building responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks like React.js.</p>
                </div>
                


            </div>
        </section>
    )
}

export default Education
