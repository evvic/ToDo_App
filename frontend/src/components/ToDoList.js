import React from 'react';
import './ToDoList.css';
import AddItem from './AddItem';

//api calls will happen here

function ToDoList() {
    
    return(
        <div className='ToDoListy'>
            {<AddItem/> }
        </div>
    );
}

export default ToDoList;