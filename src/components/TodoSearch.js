import React from "react";
import '../css/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
    const onSearchValue = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input
            className='TodoSearch'
            placeholder="Search"
            value={searchValue}
            onChange={onSearchValue}/>
    );
}

export {TodoSearch};