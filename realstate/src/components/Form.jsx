import "../App.css";
import "./Form.css"
const Form = () => {
  return (
    <div id="contact" className='form-container '>
        <form className='overlay-contact flex flex-col items-center gap-y-4 p-6 bg-gray-100' action='#'>
          <h1 className='font-bold text-4xl text-center tracking-wider text-black'>CONTACT US</h1>
          <h3 className='text-black text-center text-md italic'>For any queries contact us on below Email ID</h3>
          <div className='form-content flex flex-row justify-between p-4 w-4/5 gap-x-6'>
            <section className='input flex flex-col gap-y-10 items-center w-1/2'>
              <input type="text" placeholder='Name *' className='w-full p-5 placeholder:font-bold outline-none rounded-md'/>
              <input type="email" placeholder='Your Email *' className='w-full p-5 placeholder:font-bold outline-none rounded-md'/>
              <input type="text" placeholder='Your School *' className='w-full p-5 placeholder:font-bold outline-none rounded-md'/>
            </section>
            <section>
              <textarea rows="10" cols="70" placeholder='Your Message *' className='rounded-md p-4 outline-none placeholder:font-bold'></textarea>
            </section>
          </div>
           <input type="submit" value='SEND MESSAGE' className='text-2xl bg-yellow-400 px-6 py-2 rounded-md cursor-pointer text-white font-bold hover:bg-yellow-500 transition delay-50'/>
          <a className="text-2xl bg-orange-400 px-6 py-2 rounded-md cursor-pointer text-white font-bold hover:bg-orange-500 transition delay-50" href="mailto:prajapatipradeepkumar954@gmail.com">prajapatipradeepkumar954@gmail.com</a>
        </form>
        
      </div>
  )
}

export default Form;