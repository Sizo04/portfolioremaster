import React from 'react'
import image from "../assets/Scan.jpg";

const clr = '#e6a749';

const Hero = () => {
    return (
        <>
            <div className="container flex justify-center text-white m-[1em]">
                <aside className='max-w-md'>
                    <div className="headers mb-[2em]">
                        <h1 className='text-4xl'>Hello, I'm Aleksandar.</h1>
                        <h1 className='text-4xl primaryclr'>Frontend Developer</h1>
                    </div>
                    <p>
                        Passionate Front-End Developer With experience in HTML, CSS, and JavaScript, I am a highly motivated and skilled front-end developer.
                        I am also experienced in Figma design, SaaS, Git, and GitHub version control. I am also a strong problem solver and have a keen eye for detail. I am eager to learn new technologies and am always looking for ways to improve my skills. I am also a team player and am always willing to help others.
                        I am confident that I have the skills and experience necessary to be a successful front-end developer.
                    </p>
                    <div className="learn my-[3em] text-black">
                        <a href="" className='px-[2.8em] py-[1em] primarybg rounded-3xl'>Learn More</a>
                    </div>
                    <ul>
                        <li>What i offer:</li>
                        <li> I can work on design.</li>
                        <li> I can work on development.</li>
                        <li>I have attention to detail.</li>
                        <li> I have great social skills.</li>
                        <li> I’m responsilbe and reliable.</li>
                    </ul>
                    <div className="div my-[2em] text-black ">
                        <a href="" className='px-[1.6em] py-[0.2em] primarybg'>Check my skills</a>
                    </div>

                    <div className="widgets">

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
