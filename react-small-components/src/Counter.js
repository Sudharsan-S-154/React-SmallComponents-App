import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='counter-container'>

            <div className='counter'>
                <div className='counter-score'>
                    {count}
                </div>
                <div className='counter-buttons'>
                    <button className='btn' onClick={()=>setCount(count+1)}><FaPlus /></button>
                    <button className='btn' onClick={()=>setCount(count-1)}><FaMinus /></button>
                </div>
            </div>
        </div>
    )
}

export default Counter