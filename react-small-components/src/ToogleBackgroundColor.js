import React, { useState } from 'react'

const ToogleBackgroundColor = () => {
    const [dark, setDark] = useState(true);

    return (
        <div className={`toogleBackgroundColor ${!dark && "toogleBackgroundColorLight"}`}>
            <div className={`toogleButton ${!dark && "lightColor"}`} onClick={()=>{setDark(!dark)}}>{dark ? "Dark Theme" : "Light Theme"}</div>
            <div className={`toogleText ${!dark && "toogleTextLight"}`}>Brain loading... please wait..</div>
        </div >
    )
}

export default ToogleBackgroundColor