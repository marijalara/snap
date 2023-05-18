import React from 'react';
import SearchBar from './SearchBar';
import Body from './Body';
import ImagesList from './ImagesList';
import useImages from './useImages';

export interface searchTermProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    onFormSubmit?: (searchTerm: string) => void
}

const Header: React.FC<searchTermProps> = ({searchTerm, setSearchTerm}) => {
    const [images]=useImages(searchTerm)

    const search=(searchTerm: string) => {
        setSearchTerm(searchTerm)
    }
    
    return (
        <div className='header'>
            <h1 style={{textAlign: 'center'}}>Snap Shot</h1>
            <SearchBar 
                onFormSubmit={search}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <br />
            <br />
            <Body onFormSubmit={search}/>
            <br />
            <br />
            {Array.isArray(images) && <ImagesList images={images}/>}
        </div>
    )
}

export default Header