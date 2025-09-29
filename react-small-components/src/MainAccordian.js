import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const MainAccordian = ({ accordian }) => {
    const [isPlusButton, setIsPlusButton] = useState(true);
    const [currentPlusIndex, setCurrentPlusIndex] = useState(-1);
    const [isMinusButton, setIsMinusButton] = useState(false);
    const [currentMinusIndex, setCurrentMinusIndex] = useState(-1);



    return (
        <div className='.'>
            {
                accordian.length > 0 &&
                accordian.map((acc, index) => (
                    <div className='sAcco'>
                        <div className='sAccoMain'>
                            <h2>{acc.name}</h2>

                            {buttonClicked === false && index !== -1 ?
                                <FaPlus style={{ cursor: "pointer" }} onClick={() => {
                                    setButtonClicked(true);
                                    setCurrentIndex(index);
                                }}

                                />
                                :

                                <FaMinus style={{ cursor: "pointer" }} onClick={() => {
                                    setButtonClicked(false);
                                    setCurrentIndex(-1);
                                }} />

                            }
                        </div>
                        <p className={`aAccoDesc ${(buttonClicked && index === currentIndex) && "aAccoDescClicked"}`}>{acc.description}</p>
                    </div>
                ))

            }
        </div>
    )
}

export default MainAccordian