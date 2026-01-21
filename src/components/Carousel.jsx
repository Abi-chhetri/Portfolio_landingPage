import { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import WheelGestures from 'embla-carousel-wheel-gestures'
import { eventsData } from '../Data/CarouselData'
import whatsapp from '../assets/whatsapp.png'

const SCALE_FACTOR = 1

export const Carousel = () =>{


    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
        },
        [WheelGestures({ forceWheelAxis: 'x' })]
    )

    const onScroll = useCallback(() => {
        if (!emblaApi) return

        const scrollProgress = emblaApi.scrollProgress()

        emblaApi.slideNodes().forEach((slide, index) => {
        const diffToTarget =
            emblaApi.scrollSnapList()[index] - scrollProgress

        const scale = Math.max(
            1 - Math.abs(diffToTarget * SCALE_FACTOR),
            0.8
        )

        slide.style.transform = `scale(${scale})`
        })
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onScroll()
        emblaApi.on('scroll', onScroll)
        emblaApi.on('reInit', onScroll)
    }, [emblaApi, onScroll])

    return (
        <section className="mt-[15%]">
            <header className="ml-[10%] flex flex-col gap-2">
                <h1 className="font-['Times'] text-4xl ">Events</h1>
                <h1 className="font-['Times'] text-4xl ml-[20%]">Photos</h1>
            </header>

            <div className="overflow-hidden mt-[25%] py-3" ref={emblaRef}>
                <div className="flex touch-pan-y">
                    {eventsData.map((eData) => (
                    <div
                        key={Date.now()}
                        className="flex-[0_0_70%] px-2"
                    >
                        <div className="h-84 bg-black shadow-md border-white border-1 shadow-white rounded-xl flex flex-col transition-transform duration-300 p-2 gap-5">
                            <img 
                            className='h-[60%] rounded-xl object-cover w-full'
                            src={eData.image}/>
                            <div className='flex flex-col gap-2 items-center'>
                                <p className='text-sm'>{eData.title}</p>
                                <p className='line-clamp-2 text-justify text-xs opacity-70'>{eData.disc}</p>

                                <button 
                                type='' 
                                className='border-none w-max px-5 py-1 rounded-2xl bg-[rgba(175,100,40,0.69)] opacity-80'
                                >
                                    view
                                </button>

                            </div>
                            <h1 className='text-right opacity-70'>{eData.date}</h1>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <figure className='flex items-center justify-end'>
                <img 
                src={whatsapp} 
                className='h-10 w-10 mt-[30%] mr-[5%]'
                alt="whatsapp png" />
            </figure>
        </section>
    )
}