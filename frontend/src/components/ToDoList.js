import React, {useState} from 'react';
import './ToDoList.css';
import AddItem from './AddItem';

//props are READ-ONLY

/*
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(async () => {
      const response = await fetch(url);
      const data = await response.json();
      const [item] = data.results;
      setData(item);
      setLoading(false);
    }, []);
  
    return { data, loading };
  };
*/

function ToDoList() {
    // this is for 
    //const { data, loading } = useFetch("https://api.randomuser.me/");

    
    return(
        <div className='ToDoListy'>
            <AddItem/>
            
            
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
