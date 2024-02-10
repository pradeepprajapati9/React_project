import React from 'react'
import "./About.css";
function About() {
  return (
    <div>
      <div id='about' className='big-about-contianer'>
        <h1> ABOUT ME</h1>
        <div className='about-row-container'>
          <div className='child-1'></div>
          <div className='child-2'>
            <ul>
              <li><strong>Name:</strong> Pradeep</li>
              <li><strong>Website:</strong> Pradeep.port</li>
              <li><strong>Phone:</strong> 9953183126</li>
              <li><strong>City:</strong> Delhi India</li>
            </ul>

          </div>
          <div className='child-3'>
            <ul>
              <li><strong>Age:</strong>21</li>
              <li><strong>Degree:</strong>Undergraduate</li>
              <li><strong>PhEmailone:</strong>pkj995318@gmail.com</li>
              <li><strong>Freelance:</strong>Available</li>
            </ul>
          </div>
          <div className='child-4'>
            <h4><i  class="fa-solid fa-face-smile"></i></h4>
            <ul>
              <li><strong>technology :</strong></li>
              <li>html css js jquery bootstrap MERN php mysql </li>
            </ul>

          </div>
          <div className='child-5'>
            <h4><i class="fa-solid fa-clock"></i></h4>
            <ul>
            <li><strong>experience :</strong></li>

              <li>
                i have 1 years experience 
              </li>
            </ul>
          </div>
         
          
        </div>
      </div>
    </div>
  )
}

export default About
