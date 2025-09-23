import React, { useState } from 'react'
// import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";



const FoodGalleryImage = ({ allDish, showDish, setCurrentImageId }) => {

    const [isPara, setIsPara] = useState(false);
    // const [isMouseHover, setIsMouseHover] = useState(false);
    return (
        <div className='foodGalleryImage'>
            {
                allDish.length > 0 ?
                    allDish.map((item, index) => (
                        <div key={showDish === "all" ? item.idCategory : item.idMeal} className={`eachFood ${showDish !== "all" && "eachFoodOther"}`}>

                            <div className='foodImageContainer'>

                                <img loading='lazy' className={`foodImage ${showDish !== "all" && "foodImageOthers"}`} height={`${showDish !== "all" ? "400px" : "450px"}`} width="350px" alt='NoImage' src={showDish === "all" ? item.strCategoryThumb : item.strMealThumb} />

                                <MdZoomOutMap className="zoomIcon" onClick={() => { setCurrentImageId(index) }} />


                            </div>

                            <div className='eachFoodDetails'>
                                <h3>{showDish === "all" ? item.strCategory : item.strMeal}</h3>
                                {/* <p>{item.strCategoryDescription}</p> */}
                                <FaRegArrowAltCircleRight className='IoMdArrowDroprightCircle' />
                            </div>
                        </div>


                    ))
                    :
                    <p>Nothing</p>
            }
        </div>
    )
}

export default FoodGalleryImage