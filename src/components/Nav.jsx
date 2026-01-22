import { useState, useContext } from "react";
import light from '../assets/light.png'
import dark from '../assets/dark.png'
import { ThemeContext } from "../Context/ThemeContext";

export const Nav = () => {
    const [show, setShow] = useState(true);
    const [toggle, setToggle] =useState(true);
    const {setTheme, theme} = useContext(ThemeContext)

    return (
    <nav className='pt-3 text-right pl-5 pr-2 text-3xl flex items-center justify-between'>
        <header className="text-xl font-['Cursive']">Deepesh Shrestha</header>

        <div className="flex gap-7">
            <button
            onClick={()=> {
                setToggle(()=> !toggle)
                setTheme(()=> !theme)
            }}
            >
                {
                    toggle ?
                    <img
                    className="h-8 w-8" 
                    src={light} />
                    :
                    <img className="h-8 w-8" src={dark}/>
                }
            </button>
       
            <button
            onClick={(e)=>setShow(()=> !show)}
            >
                {
                show ?
                <i class='bx  bx-menu'></i> 
                :
            <p className="absolute fixed top-3 right-2 z-10">╳</p> 
                }
            </button>

            <div 
            className={`absolute h-1/2 w-full fixed backdrop-blur-2xl left-0 top-0 z-8  ${show ? 'hidden' : 'block'} flex flex-col items-center`}
            >
            
            </div>
        </div>
    </nav>
)}