import React, { useEffect, useRef, useState } from "react";

const ImageCard=({image}) => {
    const [spans, setSpans]=useState(0)

    const imageRef=useRef()

    useEffect(() => {
        imageRef.current.addEventListener('load', setSpans(() => {
            const height=imageRef.current.clientHeight
            const spans=Math.ceil(height/ 10) 
            setSpans(spans) 
        }))
    },[spans])
  
    const {description, urls}=image
    return(
        <div style={{gridRowEnd: `span ${spans}`}}>
            <img ref={imageRef} alt={description} src={urls.regular}/>
        </div>
    )
}

export default ImageCard