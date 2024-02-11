import React, { useContext } from 'react'
import Data1 from './CreatB';

function CreatC() {
  const Course1 = useContext(Data1);
  return (
    <div>
      <div className='container'>
        <h1 >your Course is {Course1} </h1>
      </div>
    </div>
  )
}

export default CreatC
