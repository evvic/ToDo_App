import React from 'react';
import './ToDoList.css';
import AddItem from './AddItem';

function ToDoList() {
    
    return(
        <div className='ToDoListy'>
            {<AddItem/> }
        </div>
    );
}

export default ToDoList;