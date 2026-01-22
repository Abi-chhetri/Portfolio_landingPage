import linkedin from '../assets/LIN.png'
import wa from '../assets/transparent-whatsapp.png'
import email from '../assets/email.png'
import whatsapp from '../assets/whatsapp.png'
import { useContext } from 'react'
import { ThemeContext } from "../Context/ThemeContext";

export const Contact = () =>{

    const {theme} = useContext(ThemeContext)

    return (
        <section className="mt-[15%] flex flex-col gap-4">
            <header className="font-['serif'] text-4xl ml-[10%]">
                Get In Touch
            </header>

            <span className="text-xs font-thin opacity-80 flex flex-col gap-2">
                <p className="ml-[10%]">Want to Chat? Feel Free To reach Out Via  &nbsp;
                    <a 
                    className='underline text-blue-500'
                    href="mailto:abcd321@gmail.com">
                        Email
                    </a>
                </p>

                
                <p className="ml-[10%]"> 
                    <a 
                    className='underline text-blue-500'
                    href="https://wa.me/9812345678">
                        Whatsapp
                    </a>
                
                    &nbsp; or  &nbsp;

                    <a 
                    className='underline text-blue-500'
                    href="https://www.linkedin.com/in/someone32/">
                        LinkedIn
                    </a>
                    &nbsp; And I'll Respond Whenever I Can.
                </p>
            </span>
            <div className='flex justify-end mr-[5%]'>
                <p
                className='border-none bg-gray-300 rounded-2xl px-2 text-black'
                >
                    <span className='text-xs font-thin'>🟢</span>
                    &nbsp; <span className='opacity-50'>Available</span>
                </p>
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="border-1 w-[70%] h-45 border-gray-300 rounded-[50%]">
                    <div className="flex items-center justify-between border-1 w-[80%] h-35 ml-[10%] mt-[7%] border-gray-300 rounded-[50%]">
                        <img className={`h-10 w-10 -ml-[7%] ${theme ? 'bg-none': 'bg-white'} rounded-[50%]`} src={linkedin} alt="" srcset="" />
                        <img className='h-10 w-10 bg-white rounded-[50%]' src={wa} alt="" srcset="" />
                        <img className='h-10 w-10 -mr-[7%] bg-white rounded-[50%]' src={email} alt="" srcset="" />
                    </div>
                </div>
                
            </div>

            <div className={`flex flex-col gap-5 ${theme ? 'bg-gray-100 text-black': 'bg-gray-900 text-white' }h-max w-full mt-[15%] rounded-tr-2xl rounded-tl-2xl pb-5`}>
                <h1 className="font-['serif'] text-4xl ml-[10%] mt-[10%]">Share Your Problems</h1>
                <p className='text-xs font-thin opacity-80 ml-[10%]'>A Safe Space To Explain Your Legal Concern</p>
                <div className='flex gap-2 mt-[5%]'>
                    <input 
                    type="text"
                    placeholder="your message"
                    className="border-white max-w-50 text-black ml-[10%] y-1 rounded-lg px-2 bg-white active:border-2 active:border-[rgba(175,100,40,0.69)]"
                    />
                    <button 
                    type='#' 
                    className='border-none px-2 py-2 rounded-2xl bg-[rgba(175,100,40,0.69)] opacity-80'
                    >
                        Send message
                    </button>
                </div>

                 <figure className='flex justify-end mt-[7%]'>
                    <img 
                    className='h-10 w-10 mr-[5%]'
                    src={whatsapp} 
                    alt="whatsapp png" />
                </figure>
            </div>
        </section>
    )
}