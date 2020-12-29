import React, {useState} from 'react';
import './ToDoList.css';
import './ToDoList.js';
import { Button } from './Button';

export default class ListItem extends React.Component {
    render()
    {
        return(
            <>
                <Button>{this.props.item.id}</Button>
                <Button>{this.props.item.text}</Button>
                <Button>Delete</Button>
            </>
        )
    }
}

