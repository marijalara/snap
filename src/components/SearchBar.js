import React from "react";

const SearchBar=({onFormSubmit, searchTerm, setSearchTerm}) => {
    

    const onSubmitHandler=(e) => {
        e.preventDefault()
        
        onFormSubmit(searchTerm)
    }
   
    
    const onClickHandler=() => {
        setSearchTerm(searchTerm)
    }
    return(
        <div className="segment">
            <form onSubmit={onSubmitHandler} className="ui form">
                <div style={{margin: 'auto', width: '50%', position: 'relative'}} className="ui large action input">
                    <input 
                        type="text" 
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={onClickHandler} className="ui  blue icon button">
                        <i className="search icon"></i>
                    </button>
                    
                </div>
            </form>
        </div>
    )
}

export default SearchBar