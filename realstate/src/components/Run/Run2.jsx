import React from 'react';
import { useState } from "react";
import {Modal7,Modal8,Modal9,Modal10,Modal11,Modal12} from "../Modals/Modals"


const Run2 = () => {
  const [showMyModal7 , setShowMyModal7] = useState(false);
  const [ showMyModal8 , setShowMyModal8] = useState(false);
  const [ showMyModal9 , setShowMyModal9] = useState(false);
  const [ showMyModal10 , setShowMyModal10] = useState(false);
  const [ showMyModal11 , setShowMyModal11] = useState(false);
  const [ showMyModal12 , setShowMyModal12] = useState(false);
  const handleOnClose = (e) => {
    setShowMyModal7(false);
    setShowMyModal8(false);
    setShowMyModal9(false);
    setShowMyModal10(false);
    setShowMyModal11(false);
    setShowMyModal12(false);
  };
  return (
    <div id="run1" className='run1 bg-gray-100'>
        {/* Run2 component */}
        <div className='photo flex flex-row flex-wrap justify-center gap-6 p-6'>
          <section>
          < Modal7 visible={showMyModal7} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/7.avif")} alt="pic" width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal7(true)}/>
            <p>Java </p>
            <p className='text-gray-500'>java Development</p>
          </section>
          <section>
          < Modal8 visible={showMyModal8} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/8.jpg")} alt="pic"  width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal8(true)}/>
            <p>Kotlin</p>
            <p className='text-gray-500'>Kotlin Development</p>
          </section>
          <section>
          < Modal9 visible={showMyModal9} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/9.avif")} alt="pic"  width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal9(true)}/>
            <p>Video</p>
            <p className='text-gray-500'>Video Development</p>
          </section>
          <section>
          < Modal10 visible={showMyModal10} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/10.avif")} alt="pic" width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal10(true)}/>
            <p>Software</p>
            <p className='text-gray-500'>Software Development</p>
          </section>
          <section>
          < Modal11 visible={showMyModal11} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/11.avif")} alt="pic" width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal11(true)}/>
            <p>Ethical </p>
            <p className='text-gray-500'>Ethical hacking</p>
          </section>
          <section>
          < Modal12 visible={showMyModal12} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/12.avif")} alt="pic" width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal12(true)} />
            <p>Deskop</p>
            <p className='text-gray-500'>Deskop Development</p>
          </section>
        </div>
    </div>
  )
}

export default Run2;