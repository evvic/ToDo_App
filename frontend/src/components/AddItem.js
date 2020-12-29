import React, {useState, useReducer} from 'react';
import './ToDoList.css';   
//import ListItem from './ListItem.js'

const AddItem = props => {

    

    function ListItem(props) {

        const [trashed, setTrashed] = useState(false);

        const HandleTrash = () => {
            setTrashed(true);
            console.log("in HandleTrash");
            console.log(props.item.id);

            if(itemsdo.length > 0) {
                //decrement preceding IDs
                /*
                for(var j = props.item.id; j < itemsdo.length; j++) {
                    console.log("in for loop");
                    console.log( itemsdo[j].id);
                    itemsdo[j].id = itemsdo[j].id - 1;
                }
                */
                
                itemsdo[props.item.id].date_completed = new Date();

                itemsdone.unshift(itemsdo[props.item.id]); //add to done array 1st

                /*
                setDoneItems([ ...itemsdone, {
                    id: itemsdo[props.item.id].id,
                    text: itemsdo[props.item.id].text,
                    date_created: itemsdo[props.item.id].date_created,
                    date_completed: itemsdo[props.item.id].date_completed,
                }])
                */

                //itemsdo.splice(props.item.id, 1);
            }
            else {
                console.log("itemsdo is empty");
            }
            console.log("leaving handle");
        }

        
        //if(props.item.date_completed != null) setTrashed(true);
        console.log("near ListItem return");
        return(

            (trashed || props.item.date_completed != null) ? 
            <> 
                {/*should display nothing*/}       
            </>
            :
            <>
                <button>{props.item.id}</button>
                <button>{props.item.text}</button>
                <button onClick={HandleTrash}>Delete</button>
            </>
            //() => TrashMe(this.props.item.id)
        )
        
    }

    const [i, increment] = useState(0);
    
    const [task, setTask] = useState({
        text: "",
        date_created: null,
        date_completed: null,
    });
    const [added, setAdded] = useState(false);
    const [valid, setValid] = useState(false);
    const [typing, setTyping] = useState(false);
    const [showDone, toggleShow] = useState(false); //shows 'deleted' tasks

   
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

    //mapping array of items to do
    const listitemstodo = itemsdo.map(item => (
        <li key={item.id}>
            <ListItem key={item.id} item={item}></ListItem>
        </li>
    ))

    // array of tasks DONE
    var [itemsdone, setDoneItems] = useState([]);

    //mapping array of items to do
    const listitemsdone = itemsdone.map(item => (
        <li key={item.id}>
            <ListItem key={item.id} item={item}></ListItem>
        </li>
    ))

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
        <ul>
            {listitemstodo}
        </ul>

        <br/>
        <button onClick={() => toggleShow(!showDone)}>{(showDone) ? "Don't show" : "Show completed tasks"}</button>
        {console.log(showDone)}
        {(showDone) && //inline 'IF' statement for showing list of deleted tasks
            <ul>
                {listitemsdone}
            </ul>
        }
        </>
    );
};

export default AddItem;
