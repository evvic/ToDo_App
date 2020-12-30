import React, {useEffect, useState} from 'react';
import './ToDoList.css';
import AddItem from './AddItem';
//import React, { useEffect, useState } from "react";


//props are READ-ONLY


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(async () => {
      const response = await fetch(url);
      const data = await response.json();
      const item = data.results;
      setData(item);
      setLoading(false);
    }, []);
  
    return { data, loading };
    console.log(data);
  };


function ToDoList() {
     //this is for 
    const { data, loading } = useFetch("http://localhost:5050/task/");

    
    return(
        <div className='ToDoListy'>
            <AddItem data={data}/>
            
            
        </div>
    );
    /*
     
    {
        this.state.data.map((items)=>
        <div><span>{items.text}</span></div>)
    }
    */
}

export default ToDoList;
