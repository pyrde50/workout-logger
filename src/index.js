import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './styles.css';
import { Provider } from 'react-redux';
import store from './store';

//Render app into the root HTML DOM node

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router basename="">
      <Routes />
    </Router>
  </Provider>,
);
