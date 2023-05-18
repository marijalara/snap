import './imageList.css';
import React from 'react';
import ImageCard from './ImageCard';
import {ImageProps} from './ImageCard';

interface ImagesListProps {
    images: ImageProps[] 
}

const ImagesList: React.FC<ImagesListProps> = ({images}) => {
    const list=images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    })
    
    return (
        <div className="image-list zoom">
            {list}
        </div>
    )
}

export default ImagesList