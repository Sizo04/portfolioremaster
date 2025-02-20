import React from "react";
import "../styles/App.css"
import { navLinks } from "../consts/navLinks";

const Sidebar = () => {


    return (
        <div className="w-36 h-screen darkbg text-white fixed top-0 left-0 flex flex-col items-center justify-center hidden md:flex">
            <ul className="sidemenu space-y-8">
                {navLinks.map((item, index) => (
                    <li key={index}>
                        <a href={item.Link} className="font-bold hover:text-[#e6a749]">{item.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;