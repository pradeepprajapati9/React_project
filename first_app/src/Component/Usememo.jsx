import React, { useMemo, useState } from 'react'
function Usememo() {
    const [add, Setadd] = useState(0);
    const [sub, Setminus] = useState(100);

    const multi=useMemo(function multiply(){
        console.log("multiply")
        return add * 10
    },[add])

    return (
        <div>
            <div className='container'>
                <h1>Here is Usememo Function Using</h1>
                <h1>Here is multi{multi}</h1>
                <h1>{add}</h1>
                <button onClick={() => { Setadd(add + 1) }}>add</button>
                <h1>{sub}</h1>
                <button onClick={() => { Setminus(sub - 1) }}>subtract</button>
            </div>
        </div>
    )
}

export default Usememo
