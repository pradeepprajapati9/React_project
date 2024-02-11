import React, { useState } from 'react'
import Run1 from './Run/Run1';
import Run2 from './Run/Run2';
import Run3 from './Run/Run3';
const Run = () => {
    let [isVisible , setVisible] = useState(1);
    
    return (
        <div className='bg-gray-100'>
            <h1 className='font-bold text-4xl text-center pt-20 tracking-wider'>HERE IS ALL PROGRAM YOU CAN CHOOSE </h1>
            {/*<p className='italic text-gray-500 pt-2 text-center'>Lorem ipsum dolor sit amet consectetur.</p>*/}
            <section className="flex justify-center gap-x-4 pt-2">
            <button className="bg-orange-300 px-4 py-2 rounded-md text-white outline-none hover:bg-orange-500 transition delay-50 focus:bg-orange-500" onClick ={() => setVisible(isVisible = 1)}>Run 1</button>
            <button className="bg-orange-300 px-4 py-2 rounded-md text-white outline-none hover:bg-orange-500 transition delay-50 focus:bg-orange-500" onClick ={() => setVisible(isVisible = 2)}>Run 2</button>
            </section>
            {isVisible === 1 ? <Run1/> : isVisible === 2 ? <Run2/> : <Run3/>}
        </div>
    )
}

export default Run;