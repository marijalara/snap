import "./imageList.css";
import React from "react";
import ImageCard from "./imageCard";


const ImagesList=({images}) => {
    const list=images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    })
    return(
        <div className="image-list">{list}</div>
    )
}

export default ImagesList