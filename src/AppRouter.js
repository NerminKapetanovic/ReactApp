import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './css/App.css';
import HelloWorld from './HelloWorld';
import NewRoute from './NewRoute';

const AppRouter = () => {
  return (
    <div>
    <Router> 
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/hello-world" element={<HelloWorld />} />
        <Route path="/new-route" element={<NewRoute />} />
      </Routes>
    </Router>
    </div>
  );
};

export default AppRouter;
