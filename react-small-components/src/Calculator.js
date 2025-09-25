import React, { useState } from 'react'
import { FaCreativeCommonsNcJp } from 'react-icons/fa';



const Calculator = () => {
    let [answer, setAnswer] = useState("");

    const calculate = (val) => {
        try {
            if (val === "c") {
                setAnswer("");
                return;
            }

            if (answer.length === 0 && (val === "/" || val === "*" || val === "-" || val === "+" || val === "%")) {
                setAnswer("");
                return;
            }


            if (val === "/" || val === "*" || val === "-" || val === "+" || val === "%") {
                if (answer[answer.length - 1] === "/" || answer[answer.length - 1] === "*" || answer[answer.length - 1] === "-" || answer[answer.length - 1] === "+" || answer[answer.length - 1] === "%") {
                    return;
                }
            }

            setAnswer(answer + val)
        }
        catch {
            return;
        }
    }

    function calculating() {
        try {
            setAnswer(eval(answer));
        }
        catch {
            return;
        }
    }

    return (
        <div className='calculator'>
            <div className='answer'>
                {answer}
            </div>

            <div className='allButtons'>
                <div className='allbtn clearRow'>
                    <div className='btn clear' onClick={() => { calculate("c") }}>c</div>
                    <div className='btn' onClick={() => { calculate("/") }}>/</div>
                    <div className='btn' onClick={() => { calculate("*") }}>*</div>
                </div >
                <div className='allbtn'>
                    <div className='btn' onClick={() => { calculate("7") }}>7</div>
                    <div className='btn' onClick={() => { calculate("8") }}>8</div>
                    <div className='btn' onClick={() => { calculate("9") }}>9</div>
                    <div className='btn' onClick={() => { calculate("-") }}>-</div>

                </div>
                <div className='allbtn'>
                    <div className='btn' onClick={() => { calculate("4") }}>4</div>
                    <div className='btn' onClick={() => { calculate("5") }}>5</div>
                    <div className='btn' onClick={() => { calculate("6") }}>6</div>
                    <div className='btn' onClick={() => { calculate("+") }}>+</div>

                </div>
                <div className='allbtn'>
                    <div className='btn' onClick={() => { calculate("1") }}>1</div>
                    <div className='btn' onClick={() => { calculate("2") }}>2</div>
                    <div className='btn' onClick={() => { calculate("3") }}>3</div>
                    <div className='btn' onClick={() => { calculate("%") }}>%</div>
                </div>
                <div className='allbtn'>
                    <div className='btn' onClick={() => { calculate("0") }}>0</div>
                    <div className='btn' onClick={() => { calculate("00") }}>00</div>
                    <div className='btn' onClick={() => { calculate(".") }}>.</div>
                    <div className='btn' onClick={() => { calculating() }}>=</div>
                </div>

            </div >

        </div >
    )
}

export default Calculator