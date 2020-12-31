import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <>
    <div className='backg'>
      <Router>
        <ToDoList /> 

        <br/>
        <p>team-02: Eric n' Jaakko</p>
      </Router>
    </div>
    </>
  );
}

export default App;
