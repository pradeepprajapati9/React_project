const Footer = () => {
  return (
    <>
      <div className='footer px-8 py-4 flex justify-between items-center'>
        <span>Project©Club 2022</span>
        <section className='flex gap-x-4'>
          <a href="https://twitter.com/pradeepkum90486/" target="_blank" rel="noreferrer">
            <img src={require('../assets/image/icons/twitter.png')} width="40" alt='social-media-icon' className='cursor-pointer'/>
          </a>
          
          <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'>
            <img src={require('../assets/image/icons/facebook.png')} width="40" alt='social-media-icon' className='cursor-pointer'/>
          </a>
          
          <a href='http://www.linkedin.com/in/pradeep-prajapati-8b144122b/' target="_blank" rel='noreferrer'>
            <img src={require('../assets/image/icons/linkedin.png')} width="40" alt='social-media-icon' className='cursor-pointer'/>
          </a>
        </section>
        <section>
          <span className='mr-4'>Privacy Policy</span>
          <span>Terms Of Use</span>
        </section>
      </div>
      
    </>
    
  )
}

export default Footer;