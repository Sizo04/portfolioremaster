import React from 'react'
import logo from "../assets/logo.png"
import { navLinks } from '../consts/navLinks'
import { useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className='w-dvw top-0 block md:hidden darkbg'>
                <nav className='p-[1em]'>
                    <div className='flex justify-between'>
                        <img src={logo} alt="" />
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg fill='#e6a749' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path></svg>
                        </button>
                    </div>
                </nav>
                <div className={`menu flex align-center justify-center text-center ${isOpen ? "block" : "hidden"}`}>
                    <ul className="space-y-8">
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.Link} className="font-bold primaryclr">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar
