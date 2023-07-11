import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

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

const NewRoute = () => {
  return(  <div class="App-header"> 
    <h1 class="hello">This is a new route!</h1>
    <p class="paragraph">Welcome to the second route</p>
  </div>
  )
 

};

const AppRouter = () => {
  return (
    <div>
    <Router> 
      <Routes>
        <Route path="/hello-world" element={<HelloWorld />} />
        <Route path="/new-route" element={<NewRoute />} />
      </Routes>
    </Router>
    </div>
  );
};

export default AppRouter;
