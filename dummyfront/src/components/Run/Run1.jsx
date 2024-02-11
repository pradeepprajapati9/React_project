import { useState } from "react";
import {Modal1,Modal2,Modal3,Modal4,Modal5,Modal6} from "../Modals/Modals"
const Run1 = () => {

  const [showMyModal , setShowMyModal] = useState(false);
  const [ showMyModal2 , setShowMyModal2] = useState(false);
  const [ showMyModal3 , setShowMyModal3] = useState(false);
  const [ showMyModal4 , setShowMyModal4] = useState(false);
  const [ showMyModal5 , setShowMyModal5] = useState(false);
  const [ showMyModal6 , setShowMyModal6] = useState(false);
  const handleOnClose = (e) => {
    setShowMyModal(false);
    setShowMyModal2(false);
    setShowMyModal3(false);
    setShowMyModal4(false);
    setShowMyModal5(false);
    setShowMyModal6(false);
  };

  return (
    <div id="run1" className='run1 bg-gray-100'>
        {/* Run1 component */}
        <div className='photo flex flex-row flex-wrap justify-center gap-6 p-6'>
          <section>
          < Modal1 visible={showMyModal} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/1.jpg")} alt="pic" width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal(true)}/>
            <p>python</p>
            <p className='text-gray-500'>python development career</p>
          </section>
          <section>
          < Modal2 visible={showMyModal2} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/2.avif")} alt="pic"  width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal2(true)}/>
            <p>Graphic</p>
            <p className='text-gray-500'>Graphic Design</p>
          </section>
          <section>
          < Modal3 visible={showMyModal3} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/3.avif")} alt="pic"  width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal3(true)}/>
            <p>cyber security</p>
            <p className='text-gray-500'>cyber</p>
          </section>

          <section>
          < Modal4 visible={showMyModal4} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/4.avif")} alt="pic" width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal4(true)}/>
            <p>Mern</p>
            <p className='text-gray-500'>Mern Stack</p>
          </section>
          <section>
          < Modal5 visible={showMyModal5} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/5.avif")} alt="pic" width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal5(true)}/>
            <p>SEO</p>
            <p className='text-gray-500'>SEO Development</p>
          </section>
          <section>
          < Modal6 visible={showMyModal6} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/6.avif")} alt="pic" width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal6(true)} />
            <p>Andriod</p>
            <p className='text-gray-500'>Andriod Development</p>
          </section>
        </div>
    </div>
  )
}

export default Run1;