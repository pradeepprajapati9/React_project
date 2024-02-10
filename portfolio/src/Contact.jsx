import React from 'react'
import "./Contact.css";
function Contact() {

  return (
    <div>
      <div className='contact-container'>
        <div className='contact-row'>
          <div className='child'>
            <p><i class="fa-sharp fa-solid fa-share-nodes"></i> </p>
            <p> Social Profiles</p>
            <p className='icon'>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </p>
          </div>
      
          <div className='child'>
            <p><i class="fa-solid fa-envelope"></i></p>
            <p>Email Me</p>
            <p>pkj995318@gmail.com</p>
          </div>
          <div className='child'>
            <p><i class="fa-solid fa-phone"></i></p>
            <p>call me</p>
            <p>+919953183126</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
