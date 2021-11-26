import React from "react";
import '../css/TodoList.css';

function TodoList(props) {
    // NOTE: here is the validation for the render prop or function
    const renderFunction = props.children || props.render;

    return (
        <section className='TodoList-container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmpty()}
            {(!!props.totalTodos && !props.searchedTodos?.length) && props.onEmptySearch()}
            <ul>
                {props.searchedTodos.map(renderFunction)}
            </ul>
        </section>
    );
}

export {TodoList};