import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './css/App.css';

const HelloWorld = () => {
    const navigate = useNavigate();
  
    const clickHandler = () => {
      navigate('/new-route');
    };
  
    return (
      <div class="App-header">
        <h1 class="hello">Hello world</h1>
        <p class="paragraph">This is my first React.js application.</p>
        <button class="button" onClick={clickHandler}>Open second page</button>
      </div>
    );
  };

  export default HelloWorld;