const Timeline = () => {
  return (
    <div id="schedule">
        <h1 className="text-center font-bold text-4xl pt-10 mb-4">PROGRAM TIMELINE</h1>
 
        {/* circle-1 */}
        <div className="flex justify-center gap-x-4 ">
            <section className="flex flex-col w-1/2 items-end">
                <section className="flex flex-col items-center ">
                <img src={require("../assets/image/about/1.jpg")} className="timeline-pic" alt="timeline-pic"/>
                <hr/>
                </section>
            </section>
            <section className="content w-1/2 ">
            <h1 className="font-bold text-2xl">1st Week</h1>
            <h2 className="font-bold text-2xl">
                    Introduction
            </h2>
            <h3 className="text-gray-500 text-xl">
                    Basic Training and Career Options Introduction
            </h3>
            </section>
        </div>
        {/* circle-2 */}
        <div className="flex justify-center gap-x-4">
            <section className="flex flex-col w-1/2 items-end">
                <section className="flex flex-col items-center">
                    <img src={require("../assets/image/about/3.jpg")} className="timeline-pic" alt="timeline-pic"/>
                    <hr/>
                </section>
            </section>
            <section className="content w-1/2 ">
            <h1 className="font-bold text-2xl">2nd Week</h1>
            <h2 className="font-bold text-2xl">
                Experiential learning 
            </h2>
            <h3 className="text-gray-500 text-xl">
            Career Option Selection and Specialised Training <br/>in the selected career stream
            </h3>
            </section>
        </div>
        {/* circle-3 */}
        <div className="flex justify-center gap-x-4 ">
            <section className="flex flex-col w-1/2 items-end">
                <section className="flex flex-col items-center ">
                <img src={require("../assets/image/about/4.jpg")} className="timeline-pic" alt="timeline-pic"/>
                <hr/>
                </section>
            </section>
            <section className="content w-1/2 ">
            <h1 className="font-bold text-2xl">3rd Week</h1>
            <h2 className="font-bold text-2xl">
                    Comprehension
            </h2>
            <h3 className="text-gray-500 text-xl">
            Company working exposure and acclamitisation <br/> with the respective department
            </h3>
            </section>
        </div>
        {/* circle-4 */}
        <div className="flex justify-center gap-x-4">
            <section className="flex flex-col w-1/2 items-end">
                <section className="flex flex-col items-center">
                    <img src={require("../assets/image/about/2.jpg")} className="timeline-pic" alt="timeline-pic"/>
                    <hr/>
                </section>
            </section>
            <section className="content w-1/2 ">
            <h1 className="font-bold text-2xl">4th Week</h1>
            <h2 className="font-bold text-2xl">
                    Collaboration
            </h2>
            <h3 className="text-gray-500 text-xl">
            Collaborative work with company employees <br />on different existing projects
            </h3>
            </section>
        </div>
        {/* end-circle */}
        <div className="flex justify-center gap-x-4">
            <section className="flex flex-col w-1/2 items-end">
                <div className="text-center text-white font-bold flex items-center justify-center flex-col final">Be a Part of Our Story!</div>
            </section>
            <section className="content  w-1/2">
            <h1 className="font-bold text-2xl">Finally,</h1>
            <h2 className="font-bold text-2xl">
                    Program Completion
            </h2>
            <h3 className="text-gray-500 text-xl">
                Successful completion the program
            </h3>
            </section>
        </div>
        
        
    </div>
  )
}

export default Timeline;