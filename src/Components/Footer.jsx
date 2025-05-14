import React, { useRef } from 'react'
import { FiMessageCircle } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import emailjs, { send } from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const Footer = () => {
  const form = useRef()



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cxl7pyi', 'template_koy4m26', form.current, 'gJcAuW6kxQVQYiiPi'
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const hendeleSuccess = () => {
    toast.success('Success')
  }

  return (
    <section id='contact' className='bg-[#212428] md:px-0 px-2 '>
      <div className="py-20  container mx-auto">
        <div className="relative mt-5">
          <h2 className='md:text-6xl text-4xl font-bold  text-white flex justify-center z-10'>GET IN TOUCH</h2>
          <h3 className='md:text-[110px] text-[70px] font-bold text-center text-white absolute md:-bottom-[50px] -bottom-[30px] opacity-10  md:left-[260px] left-[10px] '>CONTACT</h3>
        </div>

        <div className="text-white md:flex gap-[4%] mt-16 ">
          <div className="left md:w-[38%]   ">
            <h3 className='font-bold text-2xl'>DON'T BE SHY!</h3>
            <p className='mt-4'>Feel free to get in touch with me. I am always <br /> open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

            <div className="flex mt-4 gap-4 items-center ">
              <p className='text-2xl w-[40px] h-[40px] flex justify-center items-center  bg-yellow-600 rounded-sm text-black'><FiMessageCircle /></p>
              <div className="">
                <h5 className='font-bold'>MAIL ME</h5>
                <p>anasahmed4402@gmail.com</p>
              </div>
            </div>

            <div className="flex  mt-4 gap-4 items-center">
              <p className='text-2xl w-[40px] h-[40px] flex justify-center items-center  bg-yellow-600 rounded-sm text-black '><IoCall /></p>
              <div className="">
                <h5 className='font-bold'>CALL ME</h5>
                <p>+880 1580724723</p>
              </div>
            </div>

            <div className="flex mt-5 gap-4 ml-12">

              <a className='md:w-[40px] md:h-[40px] w-[30px] h-[30px] rounded-full bg-black flex justify-center items-center text-xl ' href="https://www.facebook.com/anas.ahmed.424120" target='_blank' rel='noopener noreferrer' ><IoLogoFacebook /></a>

              <a className='md:w-[40px] md:h-[40px] w-[30px] h-[30px] rounded-full bg-black flex justify-center items-center text-xl ' href="https://www.linkedin.com/in/anas-ahmed-802ba1328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='noopener noreferrer'  ><FaLinkedin /></a>

              <a className='md:w-[40px] md:h-[40px] w-[30px] h-[30px] rounded-full bg-black flex justify-center items-center text-xl ' href="https://github.com/AnasAhmedFND" target='_blank' rel='noopener noreferrer'  ><FaGithub /></a>




              <p className='md:w-[40px] md:h-[40px] w-[30px] h-[30px] rounded-full bg-black flex justify-center items-center text-xl '><FaTwitter /></p>

            </div>

          </div>

          <form ref={form} onSubmit={sendEmail} className="right md:w-[58%] md:mt-0 mt-5  " action="">
            <div className="md:flex gap-[5%] ">
              <input className='border py-2 px-2 rounded-lg bg-[#dcdae455] md:w-[40%] w-full'
                type="text"
                name='from_name'
                placeholder='Your name'


              />

              <input className='border py-2 px-2 rounded-lg bg-[#dcdae455] md:w-[40%] w-full md:mt-0 mt-5 '
                type="email"
                name='from_email'
                placeholder='Your email'

              />

            </div>

            <textarea className='border md:mt-10 mt-5 rounded-l-xl rounded-t-xl w-full bg-[#dcdae455] p-2 '
              name="message"
              placeholder="Your message"
            ></textarea>

            <div className="flex mt-8 relative ">
              <button onClick={hendeleSuccess}
                type='submit'
                value={send}
                className='border-2 border-yellow-600 py-2 pl-8 pr-10 hover:bg-yellow-600 rounded-full md:ml-0 ml-[76px] after:duration-700  '>SEND MESSAGE</button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
               
              />

              <p className='absolute w-[40px] h-[40px]  rounded-full flex justify-center items-center text-xl md:left-[150px] left-[228px] top-[2px] bg-yellow-600 '><IoIosSend /></p>
            </div>

          </form>


        </div>

      </div>
    </section>
  )
}

export default Footer
