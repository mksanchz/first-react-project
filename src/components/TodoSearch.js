import React from "react";
import '../css/TodoSearch.css';
import {TodoContext} from "../context";

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

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