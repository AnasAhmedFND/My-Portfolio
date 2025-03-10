import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="flex  ">
                <h3>ANAS</h3>

                <ul className='flex justify-around text-red-500 border w-full '>
                    <Link to={'/'} >
                    <li>Home</li>
                    </Link>
                    <Link to={'about'} >
                    <li>About</li>
                    </Link>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Let's Talk</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
