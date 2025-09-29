import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import MainAccordian from './MainAccordian';

const Accordian = () => {

    const [accordian, setAccordian] = useState([]);
    const [isAccForm, setIsAccForm] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const accFormHandleSubmit = (e) => {
        e.preventDefault();
        const newAcc = {
            id: accordian.length > 0 ? accordian[accordian.length - 1].id + 1 : 1,
            name: title,
            description: desc
        }
        setAccordian([...accordian, newAcc]);
        setTitle("");
        setDesc("");
        setIsAccForm(false)
    }

    return (
        <div className='accContainer'>
            <button className='addAcc' onClick={() => { setIsAccForm(true) }}> Add Acc.</button>
            <div hidden={!isAccForm} className='accordianFormContainer'>

                <form className='accordianForm' onSubmit={(e) => { accFormHandleSubmit(e) }}>
                    <IoMdClose className='accFormClose' onClick={() => { setIsAccForm(false) }} />
                    <h2 style={{ color: "black" }}>Add Acc..</h2>
                    <div className='nameDiv'>
                        <label htmlFor='name'>Title</label>
                        <input type='text' id='name' value={title} required placeholder='add your title'
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='descDiv'>
                        <label htmlFor='desc'>desc</label>
                        <textarea type='text' id='desc' value={desc} required placeholder='add your desc.' onChange={(e) => setDesc(e.target.value)} />
                    </div>
                    <button type="submit" className='accSubmit'>submit</button>
                </form>
            </div>
            <div className='accordian'>
                <MainAccordian accordian={accordian} />
            </div>

        </div>
    )
}

export default Accordian