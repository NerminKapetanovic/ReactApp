import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './css/App.css';

const NewRoute = () => {
    return(  <div class="App-header"> 
      <h1 class="hello">This is a new route!</h1>
      <p class="paragraph">Welcome to the second route</p>
    </div>
    )
   };

  export default NewRoute;