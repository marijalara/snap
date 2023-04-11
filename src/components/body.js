import React, { useState } from "react";
import { Link } from "react-router-dom";

const Body=({onFormSubmit}) => {
    const [showImages, setShowImages]=useState('')

    const onClickHandler=() => {
        setShowImages(showImages)
        onFormSubmit('mountain')
    }
    const onClickHandle=() => {
        setShowImages(showImages)
        onFormSubmit('beaches')
    }
    const onHandlerClick=() => {
        setShowImages(showImages)
        onFormSubmit('birds')
    }
    const onHandleClick=() => {
        setShowImages(showImages)
        onFormSubmit('food')
    }
 
    return(
        <div className="compact-menu">
        <Link to="/mountain" className="item">
            <button onClick={onClickHandler} className="ui blue button">
                Mountain
            </button>  
        </Link>
        <Link to="/beaches" className="item">
            <button onClick={onClickHandle} className="ui blue button">
                Beaches
            </button>
        </Link>
        <Link to="/birds" className="item">
            <button onClick={onHandlerClick} className="ui blue button">
                Birds
            </button>
        </Link>
        <Link to="/food" className="item">
            <button onClick={onHandleClick} className="ui blue button">
                Food
            </button>
        </Link>
        </div>
    )
}

export default Body