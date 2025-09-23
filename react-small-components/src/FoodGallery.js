import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import FoodGalleryImage from './FoodGalleryImage';
import App from './App';
import FoodZoomImage from './FoodZoomImage';

const FoodGallery = ({ allDish, setAllDish, showDish, setShowDish, currentImageId, setCurrentImageId }) => {


    const API_KEY = "https://www.themealdb.com/api/json/v1/1";

    // const [dropdown, setDropDown] = useState
    const [dropdownOption, setDropDownOption] = useState(false);
    const [allCategoryFood, setAllCategoryFood] = useState([]);


    useEffect(() => {
        const getAllCategory = async () => {
            if (showDish === "all") {
                const NEW_KEY = API_KEY + "/categories.php";
                const result = await fetch(NEW_KEY);
                const data = await result.json();
                setAllDish(data.categories);
                setAllCategoryFood(data.categories)
            }
            else {
                const NEW_KEY = API_KEY + `/filter.php?c=${showDish}`;
                const result = await fetch(NEW_KEY);
                const data = await result.json();
                setAllDish(data.meals);
                for (let i = 0; i < allDish.length; i++) {
                    console.log(showDish[i])
                }
            }

        }
        getAllCategory();

    }, [showDish])

    return (
        <div className={`foodGallery ${currentImageId !== -1 && "zoomFoodGallery"}`}>
            {allDish.length > 0 ?
                <>
                    <div className='dropdown'>
                        <p className='dropdownName'>{showDish === "all" ? "All" : showDish}</p>
                        <IoMdArrowDropdown style={{ fontSize: "1.2rem", cursor: "pointer" }} onClick={() => { setDropDownOption(!dropdownOption) }} />
                        <div className={`dropdownOption ${dropdownOption && "dropdownOptionDisplay"}`}>

                            {
                                allCategoryFood.map((item) => (
                                    (item.idCategory >= 1 && item.idCategory < 5) &&
                                    <div key={item.idCategory} onClick={(e) => {
                                        console.log(item.strCategory)
                                        setDropDownOption(!dropdownOption)
                                        setShowDish(item.strCategory)
                                    }}>{item.strCategory}</div>
                                ))
                            }
                            <div onClick={() => {
                                setDropDownOption(!dropdownOption);
                                setShowDish("all")
                            }}>All</div>
                        </div>
                    </div>
                    <div>
                        <FoodGalleryImage allDish={allDish} showDish={showDish} currentImageId={currentImageId} setCurrentImageId={setCurrentImageId} />
                        {/* <FoodZoomImage currentImageId={currentImageId} allDish={allDish} showDish={showDish} /> */}
                    </div>
                </>
                : <p> loading...</p>
            }
        </div>
    )
}

export default FoodGallery