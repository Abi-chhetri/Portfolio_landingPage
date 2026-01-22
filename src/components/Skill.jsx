import file from '../assets/file-search.svg'
import whatsapp from '../assets/whatsapp.png'

export const Skill =() =>{

    return (
        <section className="mt-[15%]">
            <figure className='flex items-center justify-center gap-2'>
                <img 
                src={file}
                alt="file-search svg" />
                <header className="text-4xl">Skills</header>
            </figure>
            <div className='mt-[7%] flex flex-col items-center gap-1'>
                <p className='bg-green-300 text-gray-600 py-0.5 px-4 border-none rounded-2xl ml-[12%]'>Precision</p>
                <p className='bg-blue-300 text-gray-600 py-0.5 px-5 border-none rounded-2xl mr-[15%]'>Strategy</p>
                <br />
                <p className='bg-indigo-300 text-gray-600 py-0.5 px-5 border-none rounded-2xl ml-[15%] -mt-[4%]'>Counsel</p>
                <p className='bg-blue-200 text-gray-600 py-0.5 px-4 border-none rounded-2xl mr-[15%] -rotate-3'>Advocacy</p>
                <p className='bg-green-300 text-gray-600 py-0.5 px-3 border-none rounded-2xl ml-[17%]'>Negotiation</p>
            </div>
            <figur className='flex justify justify-end'>
                <img 
                className='h-[32px] w-[32px] mt-[7%] mr-[8%] fixed top-[87%]'
                src={whatsapp} 
                alt="whatsapp png from" 
                />
            </figur>
        </section>
    )
}
