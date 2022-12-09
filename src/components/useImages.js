import { useEffect, useState } from "react";
import unsplash from "../api/unsplash";

const useImages=(defaultSearchTerm) => {
    const [images, setImage]=useState([])
    
    useEffect(() => {
        search(defaultSearchTerm)
    },[defaultSearchTerm])

    const search=async searchTerm => {
        const response=await unsplash.get("/search/photos", {
            params: { query: searchTerm}
        })
        setImage(response.data.results)
    }
    return[images, search]
}

export default useImages