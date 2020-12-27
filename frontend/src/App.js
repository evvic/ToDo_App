import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ToDoList from './components/ToDoList';
import './App.css';


function App() {
  return (
  
  <>
    <Router>
      <ToDoList /> 
      Hello Team-02
    </Router>
  </>
  );
}

export default App;
