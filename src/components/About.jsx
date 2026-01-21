
export const About= () =>{

    return (
        <section className="mt-[20%]">
            <header className="font-['serif'] font-thin text-3xl ml-[10%]">About Me</header>
            <article className="text-xs pr-[10%] pl-[18%] text-justify leading-5 mt-[7%]">
                I am a Advocate/Legal Counseller with 5+ years of experience
                in [field], helping [target audience] achieve 
                [main goal] through [core value] and [key quality]
                solutions.
            </article>
            <article className="mt-[12%] flex justify-around">

                <div className="flex flex-col justify-center items-center border-b-1 border-white w-max gap-2 pb-2">
                    <p>5 +</p>
                    <p className="text-xs font-thin">Years of Experience</p>
                </div>
                

                <div className="flex flex-col justify-center items-center border-b-1 border-white w-max gap-2 pb-2">
                    <p>10 +</p>
                    <p className="text-xs font-thin">Cases Won</p>
                </div>

                <div className="flex flex-col justify-center items-center border-b-1 border-white w-max gap-2 pb-2">
                    <p>40 +</p>
                    <p className="text-xs font-thin">Cases Drop</p>
                </div>

            </article>
        </section>
    )
}