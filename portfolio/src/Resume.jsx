import React from 'react'
import "./Resume.css";
function Resume() {
  return (
    <div>
      <div className='Resume-container'>
        <h1>MY RESUME</h1>
        <div className='Resume-container-row'>
          <div className='child-1'>
            <h1>Sumary</h1>
            <ul>
              <li>
                currently i am full Stack developer looking for a job which is reputed company grow my knowledge.
              </li>
              <li>Address: Naraina New Delhi Near Pvr Cinema Payal.</li>
              <li>+919953183126</li>
              <li>pkj995318@gmail.com</li>
            </ul>
          </div>
          <div className='child-2'>
            <h1>Professional Experience</h1>
            <ul>
              <li>I am a Full Stack web developer and tech
                enthusiast having a good understanding of
                JavaScript and Es6.
              </li>
              <li>I am proficient in building frontend web-apps
                using React, JavaScript/Es6, Sass</li>
              <li>And also can build REST API's and server-side
                rendered.</li>
              <li> I have honed my skill in both
                Frontend and back-end development making
                Me adept at handling the Entire web
                Development process…</li>
            </ul>
          </div>
          <div className='child-3'>
            <h1>Education</h1>
            <ul>
              <li>Higher Secondary Education
                GBSSS Naraina New
                Delhi=110028 in 2020
              </li>
              <li>
                Bachelor of Computer Application
                Ignou University Delhi, 110028
              </li>

            </ul>
          </div>
          <div className='child-4'>
            <h1>Professional Experience in This Fields</h1>

            <ul>
              <li>1)Oxford Softwere
                Institute Delhi,
                3 Month as Trainee web devlopment
                Oxford Software Institute.</li>
              <li>2)3 Month as Intership php developer
                onlydigitalway.pvt ltd.</li>
              <li>3)Pursuing as a trainee
                Onetick technology
                Pvt ltd Faridabad Hariyana.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Resume
