import { About } from "../components/About"
import { Carousel } from "../components/carousel"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Nav } from "../components/nav"
import { Skill } from "../components/Skill"
import { WorkArea } from "../components/WorkArea"


export const Home = ()=>{
    

    return (
    <main className="h-full w-full">
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