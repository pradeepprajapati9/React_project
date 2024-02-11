 

const Schools = () => {
  return (
    <div className="pb-20">
        <h1 className='font-bold text-4xl text-center pt-20 tracking-wider'>OUR STUDENT PLACEMENT IN THIS COMPANY</h1>
        
        <section className='schools pt-8'>
            <img src={require("../assets/image/logos/1.avif")} alt="fb-pic" width={200} className="block my-0 mx-auto"/>
            <img src={require("../assets/image/logos/2.avif")} alt="g-pic"  width={200} className="block my-0 mx-auto"/>
            <img src={require("../assets/image/logos/3.avif")} alt="ibm-pic"  width={200} className="block my-0 mx-auto"/>
            <img src={require("../assets/image/logos/4.avif")} alt="micro-pic"  width={200} className="block my-0 mx-auto"/>
        </section>
    </div>
  )
}

export default Schools;