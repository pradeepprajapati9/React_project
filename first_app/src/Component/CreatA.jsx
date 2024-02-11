import React, {createContext  } from 'react'
import CreatD from './CreatD';

const Data = createContext();

function CreatA() {
    const Name = "Abhishek";
    return (
        <div>
            <Data.Provider value={Name}>
                <CreatD />
            </Data.Provider>

        </div>
    )
}

export default CreatA
export { Data }