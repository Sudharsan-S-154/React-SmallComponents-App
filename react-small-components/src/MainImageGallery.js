import React, { useState } from 'react'
import FoodGallery from './FoodGallery'
import FoodZoomImage from './FoodZoomImage'


const MainImageGallery = () => {
    const [allDish, setAllDish] = useState([]);
    const [showDish, setShowDish] = useState("all");
    const [currentImageId, setCurrentImageId] = useState(-1);



    return (
        <div className='mainImageGallery'>
            <FoodGallery allDish={allDish} setAllDish={setAllDish} showDish={showDish} setShowDish={setShowDish} currentImageId={currentImageId} setCurrentImageId={setCurrentImageId} />
            {  currentImageId!==-1 &&
                <FoodZoomImage allDish={allDish} setAllDish={setAllDish} showDish={showDish} setShowDish={setShowDish} currentImageId={currentImageId} setCurrentImageId={setCurrentImageId} />
            }
        </div>
    )
}

export default MainImageGallery