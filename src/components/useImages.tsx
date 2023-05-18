import {useState, useEffect} from 'react';
import unsplash from '../api/unsplash';
import {ImageProps} from './ImageCard';

const useImages= (query: string)=> {
    const [images, setImage]=useState<ImageProps[]>([])
    
    useEffect(() => {
        const fetchImages=async () => {
            try{
                const response=await unsplash.get("/search/photos", {
                    params: {query},
                })
                setImage(response.data.results)
            } catch (error) {
                console.error(error)
            }
        }
            if(query) {
                fetchImages()
            }
        },[query])
        return [images]
    }
    
export default useImages