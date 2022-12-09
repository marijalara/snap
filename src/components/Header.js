import React from "react";
import SearchBar from "./SearchBar";
import useImages from "./useImages";
import ImagesList from "./imagesList";
import Body from "./body";

const Header=({searchTerm,setSearchTerm}) => {
    const [images, search]=useImages([])

    return(
        <div className="header">
            <h1 style={{textAlign: 'center'}}>Snap Shot</h1>
            <SearchBar 
                onFormSubmit={search} 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <br/>
            <br />
            <Body onFormSubmit={search} />
            <br />
            <br />
            <ImagesList images={images}/>
        </div>
    )
}

export default Header