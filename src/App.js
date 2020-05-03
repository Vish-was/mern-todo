import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodosList from './components/create-todo.component'
import EditTodo from './components/edit-todo.component'
import CreateTodo from './components/todos-list.component'


import './App.css';

function App() {
  return (
    <Router>
      <div class='container'>
        <h2>MERN To Do App!</h2>
      </div>
      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
    </Router>
  );
}

export default App;
