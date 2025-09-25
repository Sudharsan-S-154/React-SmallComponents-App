import React, { useReducer, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";


const Counter = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
            default:
                return 0;
        }
    }
    const initialState = 0;
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='counter-container'>

            <div className='counter'>
                <div className='counter-score'>
                    {count}
                </div>
                <div className='counter-buttons'>
                    <button className='btn' onClick={() => dispatch({ type: "increment" })}><FaPlus /></button>
                    <button className='btn' onClick={() => dispatch({ type: "decrement" })}><FaMinus /></button>
                    <GrPowerReset className="reset" onClick={() => dispatch({ type: "reset" })} />

                </div>
            </div>
        </div>
    )
}

export default Counter