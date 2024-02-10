import picture0 from "../../assets/image/portfolio/1.jpg";
import picture1 from "../../assets/image/portfolio/2.avif";
import picture2 from "../../assets/image/portfolio/3.avif";
import picture3 from "../../assets/image/portfolio/4.avif";
import picture4 from "../../assets/image/portfolio/5.avif";
import picture5 from "../../assets/image/portfolio/6.avif";
import picture6 from "../../assets/image/portfolio/7.avif";
import picture7 from "../../assets/image/portfolio/8.jpg";
import picture8 from "../../assets/image/portfolio/9.avif";
import picture9 from "../../assets/image/portfolio/10.avif";
import picture10 from "../../assets/image/portfolio/11.avif";
import picture11 from "../../assets/image/portfolio/12.avif";
export const Modal1 = ({ visible, onClose }) => {
    
    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }
    
    if (!visible) {
        return null;
    }
    else {
        // const st={zIndex:100}
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Courses 1</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture0} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>:python</h4>
                    <h4><span className="font-bold">Category</span>: python development career</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Courses</button>
                </div>
            </div>

        )
    }
}

export const Modal2 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Courses 2</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture1} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Graphic</h4>
                    <h4><span className="font-bold">Category</span>: Graphic Design</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Courses</button>
                </div>
            </div>

        )
    }
}
export const Modal3 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Courses  3</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture2} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>:cyber  </h4>
                    <h4><span className="font-bold">Category</span>: cyber security</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Courses</button>
                </div>
            </div>

        )
    }
}
export const Modal4 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Courses 4</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture3} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>:Mern</h4>
                    <h4><span className="font-bold">Category</span>: Mern Stack</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Courses</button>
                </div>
            </div>

        )
    }
}
export const Modal5 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Courses 5</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture4} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: SEO</h4>
                    <h4><span className="font-bold">Category</span>:SEO Development</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Courses</button>
                </div>
            </div>

        )
    }
}
export const Modal6 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Courses 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture5} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Andriod</h4>
                    <h4><span className="font-bold">Category</span>: Andriod Development</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Courses</button>
                </div>
            </div>

        )
    }
}
export const Modal7 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Courses 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture6} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: java</h4>
                    <h4><span className="font-bold">Category</span>: java Development</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Courses</button>
                </div>
            </div>

        )
    }
}
export const Modal8 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Courses 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture7} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Kotlin</h4>
                    <h4><span className="font-bold">Category</span>: Kotlin Development</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Courses</button>
                </div>
            </div>

        )
    }
}
export const Modal9 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Courses 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture8} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Video</h4>
                    <h4><span className="font-bold">Category</span>: Video Development

</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Courses</button>
                </div>
            </div>

        )
    }
}
export const Modal10 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Courses 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture9} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Software </h4>
                    <h4><span className="font-bold">Category</span>:Software Development</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Courses</button>
                </div>
            </div>

        )
    }
}
export const Modal11 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Courses 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture10} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Ethical

</h4>
                    <h4><span className="font-bold">Category</span>: Ethical hacking</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Courses</button>
                </div>
            </div>

        )
    }
}
export const Modal12 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Courses 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture11} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Deskop</h4>
                    <h4><span className="font-bold">Category</span>: Deskop Development</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Courses</button>
                </div>
            </div>

        )
    }
}