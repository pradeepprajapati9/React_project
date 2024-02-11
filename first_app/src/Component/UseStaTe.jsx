import React from 'react'
import { useState } from 'react'
function UseStaTe() {
    const [count ,setcounter]=useState(0)
    const update=()=>{
        setcounter(count+1)
      
    }
    return (
        <div>
            <div className='container'>
              <h1>UseStaTe counter is {count}</h1>
              <button onClick={update}>Click to count</button>
            </div>
        </div>
    )
}

export default UseStaTe
