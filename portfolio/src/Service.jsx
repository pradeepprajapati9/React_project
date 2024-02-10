import React from 'react'
import "./Service.css";
function Service() {
  return (
    <div>

      <div className='card-service'>
        <h1>MY SERVICES</h1>
        <p>I am  allways Searching new keywords and  try to doing  Professional work</p>
        <div className='card-service-row'>
          <div className='card'>
            <img src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGUlMjB0ZW1wbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60' alt='' />
            <h5>websites template</h5>
            <p><strong>HTML/CSS Templates:</strong> These templates consist of static HTML and CSS code, making them relatively simple and easy to modify.<br/> 
            <strong>E-commerce Templates:</strong> These templates are designed specifically for online stores and often come with built-in shopping cart functionality and product showcase layouts.<br/>
            <strong>Responsive Templates:</strong> Modern templates are often designed to be responsive, meaning they adapt to different screen sizes and devices ( desktops, tablets, smartphones) for a better user experience.
            </p>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Service
