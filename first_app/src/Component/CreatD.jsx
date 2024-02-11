import React from 'react'
import { Data } from './CreatA'
function CreatD() {
    return (
        <div>
            <Data.Consumer>
                {
                    (Name) => {
                        return (
                            <div className='container bg-secondary'>
                                <h1>Your Name is  {Name} Provide by A Component</h1>
                            </div>
                        )
                    }
                }
            </Data.Consumer>
        </div>
    )
}

export default CreatD
