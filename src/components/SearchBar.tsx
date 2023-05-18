import React from 'react';
import {searchTermProps} from './Header';

const SearchBar: React.FC<searchTermProps> = ({onFormSubmit, searchTerm, setSearchTerm}) => {
    const onSubmitHandler=(e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(onFormSubmit) {
            onFormSubmit(searchTerm)
        } 
    }
    
    return (
        <div className="segment">
            <form onSubmit={onSubmitHandler} className="ui form">
                <div style={{margin: 'auto', width: '50%', position: 'relative'}} className="ui large input focus">
                    <input 
                        type="text" 
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar