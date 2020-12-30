import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className='backg'>
          <ToDoList /> 
          <h2>Hello Team-02</h2>
        </div>
      </Router>
    </>
  );
}

export default App;
