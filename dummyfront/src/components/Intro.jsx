import { Link } from "react-scroll";
import "../App.css";

// Intro Component
const Intro = () => {
 
    return (
        <div id='intro'>
            <section className='flex items-start justify-center flex-col gap-y-8 pl-20'>
            <h1 className='font-bold italic text-6xl text-purple-500'>Project Club's</h1>
            <h1 className='font-bold text-7xl text-left w-3/4 leading-tight corporate'>
              WEB DEVELOPMENT  PROGRAM
            </h1>
            <Link to="about" smooth={true} duration={50} offset={-50} spy={true} className='font-bold text-3xl text-white bg-orange-500 px-6 py-4 rounded-md cursor-pointer'>KNOW MORE</Link>
            </section>
        </div>
    )
}

export default Intro;