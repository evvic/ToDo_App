import React, {useState} from 'react';
import './ToDoList.css';   
//import ListItem from './ListItem.js'

const AddItem = props => {

    const [refreshing, setRefreshing] = useState(false); 

    function ListItem(props) {


        const HandleTrash = () => {
            console.log("in HandleTrash");
            console.log(props.item.id);

            if(itemsdo.length > 0) {
                
                itemsdo[props.item.id].date_completed = new Date();

                //itemsdone.unshift(itemsdo[props.item.id]); //add to done array 1st
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
            setRefreshing(true);
            console.log("leaving handle");
        }

        const HandleReturn = () => {
            console.log("in HandleReturn");
            console.log(props.item.id);

            itemsdo[props.item.id].date_completed = null;
            setRefreshing(true);

        }


        const PermanentDelete = () => {
            //decrement trailing items
            
            var j = props.item.id;
            itemsdo.splice(props.item.id, 1);


            for(j; j < itemsdo.length; j++) {
                console.log("in for loop");
                console.log( itemsdo[j].id);
                itemsdo[j].id = j;
            }
            setRefreshing(true);
        }

        
        //if(props.item.date_completed != null) setTrashed(true);
        console.log("near ListItem return");
        return(
            //nested if statement
            (props.done == false) ?
                //in current tasks
                (props.item.date_completed != null) ? 
                    <> 
                        {/*should display nothing in current tasks*/}       
                    </>
                :
                    <>
                        <button>{props.item.id}</button>
                        <button>{props.item.text}</button>
                        <button onClick={HandleTrash}>Trash</button>
                    </>
            :
                //in completed tasks
                (props.item.date_completed == null) ? 
                    <> 
                        {/*should display nothing in comleted tasks*/}       
                    </>
                :
                    <>
                        <button>{props.item.id}</button>
                        <button>{props.item.text}</button>
                        <button onClick={HandleReturn}>Add back</button>
                        <button onClick={PermanentDelete}>Delete</button>
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
            <ListItem key={item.id} item={item} done={false}></ListItem>
        </li>
    ))

    // array of tasks DONE
    //var [itemsdone, setDoneItems] = useState([]);

    //mapping array of items to do
    const listitemsdone = itemsdo.map(item => (
        <li key={item.id}>
            <ListItem key={item.id} item={item} done={true}></ListItem>
        </li>
    ))

    const appendItem = (task) => {
        setItems([ ...itemsdo, {
            id: itemsdo.length, //i
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

        {(refreshing) && //inline 'IF' statement for showing list of deleted tasks
            <ul>
                <p>refreshing</p>
                {setRefreshing(false)}
            </ul>
        }

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
                <p>inside guy</p>
                {listitemsdone}
            </ul>
        }
        </>
    );
};

export default AddItem;