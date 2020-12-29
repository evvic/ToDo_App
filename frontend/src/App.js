import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import DropdownMenu from './components/DropdownMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ToDoList from './components/ToDoList';

/*
HOW TO REVERT TO A PREVIOUS COMMIT:
git add .
git revert --no-commit 0766c053..HEAD
git commit
*/


function App() {
  return (
    <>
      <Router>
  
      {//<DropdownMenu />
      }
      {/* <Switch>
        <Route path ='/' exact component={Home} />
      </Switch> */}
      <ToDoList />  
        <h1>in temp navBar</h1>
      </Router>
    </>
  );
}






export default App;
