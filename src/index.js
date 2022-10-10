import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Routes from './Routes';

//Render app into the root HTML DOM node

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="">
    <Routes />
  </Router>,
);
