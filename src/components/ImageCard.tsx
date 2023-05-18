import React, {useEffect, useRef, useState} from 'react';

export interface ImageProps {
    searchTerm: string;
    id: string;
    description: string;
    urls: {
        regular: string
    }
}

const ImageCard: React.FC<{image: ImageProps}> = ({image}) => {
    const [spans, setSpans]=useState<number>(0)

    const imageRef=useRef<HTMLImageElement>(null)

    useEffect(() => {
        const handleLoad=() => {
            if(imageRef.current ) {
                const height=imageRef.current.clientHeight
                const spans=Math.ceil(height/ 0) 
                setSpans(spans) 
                }
            }
            imageRef.current?.addEventListener('load', handleLoad)
            
            return () => {
                imageRef.current?.removeEventListener('load', handleLoad)
            }
    },[imageRef])

    const {description, urls}=image

    return (
        <div style={{gridRowEnd: `span ${spans}`}}>
            <img ref={imageRef} alt={description} src={urls.regular}/>
        </div>
    )
}

export default ImageCard