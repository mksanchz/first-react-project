import React from "react";
import {CompleteIcon} from '../components/CompleteIcon';
import {DeleteIcon} from '../components/DeleteIcon';
import '../css/TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>
            <DeleteIcon
                onDelete={props.onDelete}/>
        </li>
    );
}

export {TodoItem};