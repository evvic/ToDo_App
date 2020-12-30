import React, { useState } from 'react';
import './ToDoList.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup'; //text & button
import FormControl from 'react-bootstrap/Form';

const AddItem = props => {

    const [refreshing, setRefreshing] = useState(false);

    function ListItem(props) {

        const HandleTrash = () => {
            console.log("in HandleTrash");
            console.log(props.item.id);

            if (itemsdo.length > 0) {
                itemsdo[props.item.id].date_completed = new Date();
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

            for (j; j < itemsdo.length; j++) {
                console.log("in for loop");
                console.log(itemsdo[j].id);
                itemsdo[j].id = j;
            }
            setRefreshing(true);
        }


        //if(props.item.date_completed != null) setTrashed(true);
        console.log("near ListItem return");
        return (
            //nested if statement
            (props.done === false) ?
                //in current tasks
                (props.item.date_completed != null) ?
                    <>
                        {/*should display nothing in current tasks*/}
                    </>
                    :
                    <>
                        <Card className='taskitem'>
                            <Card.Body className='taskitembody'>
                                <span className="badge badge-primary badge-pill" style={{margin:"6px"}}>{props.item.id}</span>
                                {props.item.text}
                                <a className="ui-tooltip" title="task completed">
                                    <span style={{cursor:"help"}}>          
                                        <Button className='cardbutton' onClick={HandleTrash}>
                                            <Emoji symbol="✔️"/>
                                        </Button>{' '}   
                                    </span>
                                </a>
                            </Card.Body>
                        </Card>
                    </>
                :
                //in completed tasks
                (props.item.date_completed == null) ?
                    <>
                        {/*should display nothing in comleted tasks*/}
                    </>
                    :
                    <>
                        <Card className='taskitem' style={{filter:"brightness(0.9)"}}>
                            <Card.Body className='taskitembody'>
                                <span className="badge badge-primary badge-pill" style={{margin:"6px"}}>{props.item.id}</span>
                                {props.item.text}
                                <a className="ui-tooltip" title="return task to list">
                                    <span style={{cursor:"help"}}>
                                        <Button className='cardbutton' onClick={HandleReturn}>
                                            <Emoji symbol="♻️"/>
                                        </Button>
                                    </span>
                                </a>
                                <a className="ui-tooltip" title="permanently delete task">
                                    <span style={{cursor:"help"}}>
                                        <Button className='cardbutton' onClick={PermanentDelete}>
                                            <Emoji symbol="🗑️"/>
                                        </Button>{' '}
                                    </span>
                                </a>
                                
                            </Card.Body>
                        </Card>
                    </>
        )

    }

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
        setTask({
            ...task,
            text: event.target.value,
            date_created: new Date()
        });
        setTyping(true);
        //console.log(task);
    }

    // when button/enter is pressed, check it has text and set true
    const HandleSubmit = (event) => {
        event.preventDefault();
        if (task.text) setValid(true);
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
        setItems([...itemsdo, {
            id: itemsdo.length, //i
            text: task.text,
            date_created: task.date_created,
            date_completed: task.date_completed,
        }])
    }

    const ResetInput = (task) => {
        setTask({
            ...task,
            text: "",
            date_created: null
        });
        setAdded(false);
        setTyping(false);
    }


    console.log("near AddItem return");
    return (
        <>
        <Card className='maincard'>

            <h1>To Do List</h1>
            {(refreshing) && //inline 'IF' statement for showing list of deleted tasks
                <ul>
                    <p>refreshing</p>
                    {setRefreshing(false)}
                </ul>
            }

            <div className='Adding'>
                <form className='sumthin' onSubmit={HandleSubmit}>
                    {(added || !typing) && valid ? <div className='success-message'>Task successfully added!</div> : null}

                    <InputGroup className="mb-3">
                        <input
                            onChange={HandleInputChange}
                            required='required'
                            value={task.text}
                            placeholder='add new task'
                            className='adding-box'/>
                        <InputGroup.Append>
                            <Button type='submit'>Add</Button>{' '}
                        </InputGroup.Append>
                    </InputGroup>
                </form>
            </div>

            <ul>
                {listitemstodo}
            </ul>

            {(itemsdo.length > 0) && 
            <>
                <br />
                <a className="ui-tooltip" title="toggle showing completed tasks">
                    <span style={{cursor:"help"}}>
                        <Button className='showdone' onClick={() => toggleShow(!showDone)}>
                            {(showDone) ? "Don't show" : "Show completed tasks"}
                        </Button>
                    </span>
                </a>
    
                <br/>
                
                {console.log(showDone)}
                {(showDone) && //inline 'IF' statement for showing list of deleted tasks\
                    //add a message that theres no trash if there's no trash
                    <ul>
                        {listitemsdone}
                    </ul>
                }
            </>
            }
            
        </Card>
        </>
    );
};

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

export default AddItem;