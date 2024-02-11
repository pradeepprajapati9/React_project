import React, { createContext } from 'react'
import CreatC  from "./CreatC";

const Data1 = createContext();

function CreatB() {
  const Course = "react";
  return (
    <div>
      <Data1.Provider value={Course}>
        <CreatC />
      </Data1.Provider>
    </div>
  )
}

export default CreatB
export{Data1}
