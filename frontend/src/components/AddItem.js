import React, {useState} from 'react';
import './ToDoList.css';   

const AddItem = props => {

    const [i, increment] = useState(0);
    
    const [task, setTask] = useState({
        text: "",
        date_created: null,
        date_completed: null,
    });
    const [added, setAdded] = useState(false);
    const [valid, setValid] = useState(false);
    const [typing, setTyping] = useState(false);

   
    const HandleInputChange = (event) => {
        setTask({...task,
            text: event.target.value,
            date_created: new Date() });
        setTyping(true);
        //console.log(task);
    } 

    // when button/enter is pressed, check it has text and set true
    const HandleSubmit = (event) => {
        event.preventDefault();
        if(task.text) setValid(true);
        setAdded(true);
        appendItem(task);
        ResetInput(task);
    }

    // array of tasks TO-DO
    var [itemsdo, setItems] = useState([]);

    const appendItem = (task) => {
        setItems([ ...itemsdo, {
            id: i,//itemsdo.length,
            text: task.text,
            date_created: task.date_created,
            date_completed: task.date_completed,
        }])

        increment(i + 1); //establishing next key/ID
        console.log("increment");
        console.log(i);
    }

    const ResetInput = (task) => {
        setTask({...task,
            text: "",
            date_created: null });
        setAdded(false);
        setTyping(false);
    }

    console.log("near AddItem return");
    return(
        <>
        <div className='Adding'>
            <form className='sumthin' onSubmit={HandleSubmit}>
                {(added || !typing) && valid ? <div className='success-message'>Task successfully added!</div> : null}
                
                <input
                    onChange={HandleInputChange}
                    required='required'
                    value={task.text}
                    placeholder='add new task'
                    className='adding-box'/>
                <button type='submit'>Add</button>
                <br/>
                {added && !task.text ? <span>must not be empty</span> : null}

            </form>
        </div>
      
        </>
    );
};

export default AddItem;