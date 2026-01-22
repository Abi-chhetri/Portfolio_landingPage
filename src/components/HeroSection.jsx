import lawyer from '../assets/lawyer.jpg'

export const HeroSection = () =>{

    return (
        <figure className='flex flex-col items-center justify-center gap-2 mt-4'>
            <img 
            src={lawyer} alt="Deepesh Shrestha Advocate image"
            className='rounded-3xl object-cover h-[400px] w-[70%]'
            />
            <section className='flex flex-col items-center justify-center mt-2 gap-6'>
                <header className='opacity-80 text-sm'>Advocate / Legal Counseller</header>
                <p className="text-center text-md opacity-90"> Helping individuals Resolve Legal 
                    <br/>
                    Matters with Confidence
                </p>
                <button 
                type='#' 
                className='border-none px-4 py-1 rounded-2xl bg-[rgba(175,100,40,0.69)] opacity-80'
                >
                    Let's Talk
                </button>
            </section>

        </figure>
    )
}