import linkedin from '../assets/LIN.png'
import wa from '../assets/transparent-whatsapp.png'
import email from '../assets/email.png'

export const Contact = () =>{

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
                        <img className='h-10 w-10 -ml-[7%] bg-white rounded-[50%]' src={linkedin} alt="" srcset="" />
                        <img className='h-10 w-10 bg-white rounded-[50%]' src={wa} alt="" srcset="" />
                        <img className='h-10 w-10 -mr-[7%] bg-white rounded-[50%]' src={email} alt="" srcset="" />
                    </div>
                </div>
                
            </div>

            <div className='bg-gray-900 h-max w-full mt-[15%] rounded-tr-2xl rounded-tl-2xl '>
                <h1 className="font-['serif'] text-4xl text-center mt-[10%]">Share Your Problems</h1>
                <p>A Safe Space To Explain Your Legal Concern</p>
            </div>
        </section>
    )
}