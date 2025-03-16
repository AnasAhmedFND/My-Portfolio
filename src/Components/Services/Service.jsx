import React from 'react'
import Ser1 from './Ser-img/ser-1.png'
import Ser2 from './Ser-img/ser-2.png'
import Ser3 from './Ser-img/ser-3.png'
import Ser4 from './Ser-img/ser-4.png'
import Ser5 from './Ser-img/ser-5.png'
import Ser6 from './Ser-img/ser-6.png'




const Service = () => {
  return (
    <section id='service' className='bg-[#212428] md:px-0 px-2 '>
      <div className="container mx-auto md:py-10  ">
        <div className="relative">
        <h2 className='text-center font-bold md:text-5xl text-3xl text-white'>WHAT I <span className='text-yellow-600'>PROVIDE</span> </h2>
        <h2 className='md:text-[110px] text-[80px] font-bold text-center text-white absolute md:-bottom-[50px] -bottom-[40px] opacity-10  md:left-[295px] left-[20px] '>SERVICE</h2>

        </div>
        <div className="flex flex-wrap gap-5  text-white md:mt-20 mt-14 ">

          <div className="md:w-[32%] w-[90%] md:ml-0 ml-[5%]  border-2 border-yellow-600 rounded-md shadow-amber-600 hover:shadow-2xl hover:scale-105 shadow-lg p-4">
            <img src={Ser1} alt="" />
            <h4 className='text-2xl font-bold  text-yellow-600 mt-2'>Figma to HTML</h4>
            <p className='mt-2'>Figma to HTML involves converting designs created in Figma, a web design tool, into HTML code for web development. This process ensures that designs are translated accurately into functional web pages and apps. </p>
          </div>

          <div className="md:w-[32%] w-[90%] md:ml-0 ml-[5%] border-2 border-yellow-600 rounded-md shadow-amber-600 hover:shadow-2xl hover:scale-105 shadow-lg  p-4">
            <img src={Ser2} alt="" />
            <h4 className='text-2xl font-bold  text-yellow-600 mt-2'>E-commerce Website</h4>
            <p className='mt-2'>An e-commerce website enables online buying and selling of goods or services. It typically includes features like product listings, shopping carts, secure payment gateways, and order management systems for seamless transactions. </p>
          </div>

          <div className="md:w-[32%] w-[90%] md:ml-0 ml-[5%]  border-2 border-yellow-600 rounded-md shadow-amber-600 hover:shadow-2xl hover:scale-105 shadow-lg  p-4">
            <img src={Ser3} alt="" />
            <h4 className='text-2xl font-bold  text-yellow-600 mt-2'>Responsive Web App</h4>
            <p className='mt-2'>Responsive web apps adapt layout and functionality to fit different devices and screen sizes, ensuring optimal performance and user experience across desktops, smartphones, and tablets through fluid layouts and media. </p>
          </div>

          <div className="md:w-[32%] w-[90%] md:ml-0 ml-[5%] border-2 border-yellow-600 rounded-md shadow-amber-600 hover:shadow-2xl hover:scale-105 shadow-lg p-4">
          <img src={Ser4} alt="" />  
          <h4 className='text-2xl font-bold  text-yellow-600 mt-2'>Web Customization</h4> 
          <p className='mt-2'>Web customization in front-end web development involves tailoring website appearance and functionality to meet specific client needs through HTML, CSS, JavaScript, ensuring unique and personalized user experiences. </p>         
          </div>

          <div className="md:w-[32%] w-[90%] md:ml-0 ml-[5%] border-2 border-yellow-600 rounded-md shadow-amber-600 hover:shadow-2xl hover:scale-105 shadow-lg p-4">
          <img src={Ser5} alt="" />  
          <h4 className='text-2xl font-bold  text-yellow-600 mt-2'>Fast Landing Page</h4>   
          <p className='mt-2'>A fast-loading website built with React utilizes efficient coding practices and optimization techniques to ensure quick page rendering and seamless user experiences, enhancing performance and engagement for visitors. </p>         
          </div>

          <div className="md:w-[32%] w-[90%] md:ml-0 ml-[5%]  border-2 border-yellow-600 rounded-md shadow-amber-600 hover:shadow-2xl hover:scale-105 shadow-lg p-4">
          <img src={Ser6} alt="" />  
          <h4 className='text-2xl font-bold  text-yellow-600 mt-2'>Email Signature</h4>
          <p className='mt-2'>A high-performing email signature built with React leverages optimized code and best practices to ensure fast rendering and smooth functionality, creating an engaging and efficient experience for all recipients. </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Service
