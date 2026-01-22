import { useContext } from "react"
import { About } from "../components/About"
import { Carousel } from "../components/Carousel"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Nav } from "../components/Nav"
import { Skill } from "../components/Skill"
import { WorkArea } from "../components/WorkArea"
import { ThemeContext } from "../Context/ThemeContext"


export const Home = ()=>{
    const {theme} =useContext(ThemeContext);
    

    return (
    <main className={`h-full w-full   ${theme ? 'bg-white text-black': 'bg-black text-white' } `}>
        <Nav />
        <HeroSection />
        <About />
        <Skill />
        <Carousel />
        <WorkArea />
        <Contact />
        <Footer />
    </main>
)}
