import { useContext } from 'react'
import lin from '../assets/LIN.png'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import '../styles/foot.css'
import {ThemeContext} from '../Context/ThemeContext'

export const Footer = () =>{
    const {theme} = useContext(ThemeContext)

    return (
        <footer className={`h-max w-full overflow-hidden py-4 ${theme ? 'bg-white text-black':'bg-neutral-800'}`} id='foot1'>
            <h1 className="ml-[10%] font-['serif'] text-2xl">Deepesh Shrestha</h1>
            <hr className="mt-[5%] ml-[10%] mr-[10%]" />

            <div className="ml-[40%] font-['serif'] gap-4 flex flex-col justify-around">
                <p className="text-2xl mt-[10%]"><span className="text-xs">01</span> Home</p>
                <p className="text-2xl"><span className="text-xs">02</span> About</p>
                <p className="text-2xl"><span className="text-xs"> 03</span> Expertise</p>
                <p className="text-2xl"><span className="text-xs">04</span> Experience</p>
                <p className="text-2xl"><span className="text-xs">05</span> Contact</p>
            </div>


            <hr className="mt-[5%] ml-[10%] mr-[10%]" />
            <div className="ml-[10%] flex gap-[5%] mt-[10%]">
                <h1 className="text-xl">Connect</h1>
                <h1>Phone:</h1>
            </div>
            <div className="ml-[40%] font-['serif'] gap-4 flex flex-col justify-around">
                <p className="mt-[10%]"> +977 9841567789</p>
                <p>Email:</p>
                <p>name@gmail.com</p>
                <p>Socials:</p>
                <figure className='flex gap-3 text-white'> 
                    <a href="https://www.linkedin.com/in/someone32/">
                        <img 
                        className='h-6 w-6 bg-white'
                        src={lin} alt="linkedin png"/>
                    </a>

                    <a href="https://www.instagram.com/someone32/">
                        <img
                        className='bg-white'
                        src={insta} alt="instagram png" />
                    </a>

                    <a href="https://www.facebook.com/someone32/">
                        <img 
                        className='bg-black'
                        src={fb} alt="fb png" />
                    </a>

                </figure>
            </div>
            <div id='f1'>
                &copy; {new Date().getFullYear()} Deepesh Shrestha, Attorney at Law. All Rights Reserved.
            </div>
        </footer>
)}