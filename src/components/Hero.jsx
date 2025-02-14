import React from 'react'
import image from "../assets/Scan.jpg";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const clr = '#e6a749';

const Hero = () => {

    useGSAP(() => {
        gsap.fromTo(".animate", { y: -300, opacity: 0 }, { duration: 0.5, y: 0, opacity: 1, ease: "power2.inOut", stagger: 0.2 })
        gsap.fromTo(".text", { opacity: 0, stagger: 0.1 }, { duration: 3, opacity: 1 })
        gsap.fromTo("figure", { y: 300, opacity: 0.2 }, { duration: 1.5, y: 0, opacity: 1, ease: "power2.inOut" })
        gsap.fromTo(".widget", { x: 300, opacity: 0 }, { duration: 1.5, x: 0, opacity: 1, ease: "power2.inOut", stagger: 1 })


    })

    return (
        <>
            <div className="container flex justify-center text-white m-[1em]">
                <aside className=' max-w-md'>
                    <div className="headers mb-[2em]">
                        <h1 className='text text-4xl'>Hello, I'm Aleksandar.</h1>
                        <h1 className='text text-4xl primaryclr animate'>Frontend Developer</h1>
                    </div>
                    <p className='text'>
                        Passionate Front-End Developer With experience in HTML, CSS, and JavaScript, I am a highly motivated and skilled front-end developer.
                        I am also experienced in Figma design, SaaS, Git, and GitHub version control. I am also a strong problem solver and have a keen eye for detail. I am eager to learn new technologies and am always looking for ways to improve my skills. I am also a team player and am always willing to help others.
                        I am confident that I have the skills and experience necessary to be a successful front-end developer.
                    </p>
                    <div className=" animate learn my-[2.2em] text-black">
                        <a href="" className='px-[2.8em] py-[1em] primarybg rounded-3xl'>Learn More</a>
                    </div>
                    <ul className='text'>
                        <li>What i offer:</li>
                        <li> I can work on design.</li>
                        <li> I can work on development.</li>
                        <li>I have attention to detail.</li>
                        <li> I have great social skills.</li>
                        <li> I’m responsilbe and reliable.</li>
                    </ul>
                    <div className=" animate my-[1em] text-black ">
                        <a href="" className=' text px-[1.6em] py-[0.2em] primarybg'>Check my skills</a>
                    </div>

                    <div className="widgets flex">
                        <a href="" className='pointer'>
                            <svg className='primaryfill widget' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                            </svg>
                        </a>
                        <a href="">
                            <svg className='primaryfill widget' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                                <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M25,44h-5V26h5V44z M22.485,24h-0.028C20.965,24,20,22.888,20,21.499C20,20.08,20.995,19,22.514,19c1.521,0,2.458,1.08,2.486,2.499 C25,22.887,24.035,24,22.485,24z M44,44h-5v-9c0-3-1.446-4-3-4c-1.445,0-3,1-3,4v9h-5V26h5v3c0.343-0.981,1.984-3,5-3c4,0,6,3,6,8 V44z"></path>
                            </svg>
                        </a>
                    </div>
                </aside>
                <figure className='ml-[3em] hidden lg:block'>
                    <img src={image} alt="" className='max-w-[545px] max-h-[650px]' />
                </figure>
            </div>
        </>
    )
}

export default Hero
