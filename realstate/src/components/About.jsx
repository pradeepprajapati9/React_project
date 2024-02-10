import { useState } from "react";

const About = () => {

    const[flip1 , setFlip1] = useState(false);
    const[flip2 , setFlip2] = useState(false);
    const[flip3 , setFlip3] = useState(false);
    const changeFlip1 = () => {
       setFlip1(!flip1);
    }
    const changeFlip2 = () => {
        setFlip2(!flip2);
    }
    const changeFlip3 = () => {
        setFlip3(!flip3);
    }
    return (
        <div id='about' className="about flex flex-col gap-y-2 justify-center items-center text-center p-8">
            <h1 className='animate__animated animate__backInLeft font-bold text-4xl pt-6 pb-4'>WEB PROGRAM?</h1>
            <blockquote className='w-4/5  text-2xl text-gray-500 italic'>
            Web development programs offer a multitude of compelling reasons to embark on this career path. Firstly, web developers are consistently in high demand, as businesses and organizations worldwide rely on websites and web applications to maintain an online presence and engage with customers. The versatility of web development careers is also a significant draw, allowing individuals to specialize in areas such as front-end, back-end, or full-stack development, tailoring their roles to their interests and strengths.
            </blockquote>
            <section className='about-pictures flex flex-row gap-x-4 p-6 text-center mt-8 w-full justify-center'>
            {/* confusion card */}
            <div className={`${flip1 ? "flipped" : ""} card-container flex flex-col gap-y-2 items-center w-1/4 border-4 rounded-md px-4 py-2 justify-center content`} onMouseEnter={changeFlip1} onMouseLeave={changeFlip1}>
                <div className="front">
                    <img src={require("../assets/image/icons/confused.png")} height="200" width="200" alt='pic' className='round mx-auto my-0 block'/>
                    <h1 className='font-bold text-2xl text-center'>Confusion Mern Career Options</h1>
                </div>
                    
                <div className="back">
                    <p className='text-gray-500 text-lg'>
                        Students these days have the freedom to choose from a good number of career choices,
                        which even though is a good thing, can turn into a challenge for these young minds who seek some answers
                        to questions in their mind to choose well tedious task and that is something we do and bring to the attention of these youngsters 
                        to maintain and edge over what's happening.
                    </p>
                </div>
            </div>
            {/* uncertain card */}
            <div className={`${flip2 ? "flipped" : ""} card-container flex flex-col gap-y-2 items-center w-1/4 border-4 rounded-md px-4 py-2 justify-center content`} onMouseEnter={changeFlip2} onMouseLeave={changeFlip2}>
                <div className="front">
                    <img src={require("../assets/image/icons/doubt.png")} height="200" width="200" alt='pic' className='round mx-auto my-0 block'/>
                    <h1 className='font-bold text-2xl text-center'>Uncertain over corporate World Functioning</h1>
                </div>
                <div className="back">
                    <p className='text-gray-500 text-lg'>
                    The bright young minds have little to no knowledge on what their career aspirations actually entail in terms of work.
                    Giving them that small insight can do wonders on how much they will actually end up liking their job
                    or other options that they can explore.
                    </p>
                </div>
                
            </div>
            {/* anxiety card */}
            <div className={`${flip3 ? "flipped" : ""} card-container flex flex-col gap-y-2 items-center w-1/4 border-4 rounded-md px-4 py-2 justify-center content`} onMouseEnter={changeFlip3} onMouseLeave={changeFlip3}>
                <div className="front">
                    <img src={require("../assets/image/icons/anxiety.png")} height="200" width="200" alt='pic' className='round mx-auto my-0 block'/>
                    <h1 className='font-bold text-2xl text-center'>No knowledge on the career options</h1>
                </div>
                <div className="back">
                    <p className='text-gray-500 text-lg'>
                    With students busy in studies and exams and their parents and Teachers busy with giving them good values and imparting knowledge, 
                    keeping track of an ever changing world becomes a
                    tedious task and that is something we do and bring to the attention of these youngsters to maintain and edge over what’s happening.
                    </p>
                </div>
            </div>
            </section>
        </div>
    )
}

export default About;