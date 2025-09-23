import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";


const FoodZoomImage = ({ currentImageId, allDish, showDish, setCurrentImageId }) => {
    return (
        <div className="zoomImg">
            {
                currentImageId !== -1 &&
                <div className='zoomImgContainer'>
                    <IoIosCloseCircleOutline className='zoomImageCloseButton' onClick={() => { setCurrentImageId(-1) }} />
                    <img src={showDish === "all" ? allDish[currentImageId].strCategoryThumb : allDish[currentImageId].strMealThumb} className='zoomImage' />

                    <h3>{showDish === "all" ? allDish[currentImageId].strCategory : allDish[currentImageId].strMeal}</h3>


                </div>
            }
        </div>
    )
}

export default FoodZoomImage;