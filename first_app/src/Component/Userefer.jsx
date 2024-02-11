import React, { useRef } from 'react';

function UserefUse() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <div className='container'>
                <input type="text" ref={inputRef} />
                <button  onClick={handleClick}>Click</button>
            </div>
        </div>
    );
}
export default UserefUse;
