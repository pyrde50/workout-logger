import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,
  Route,
  Link} from 'react-router-dom';

const App = () => (
  <div>
    <h1>React Router Example</h1>
    <ul role="nav">
      <li><Link to="/client">Client Side</Link></li>
      <li><Link to="/server">Server Side</Link></li>
    </ul>
     
    <div>
      <Route path='/client' component={Client} />
      <Route path='/server' component={Server} />
    </div>
  </div>
)
const Client= () => <h3>What is client side?<body><li>Browser</li><li>Runs on local machine</li><li>React renders user interface</li><li>React Router adds clickable links</li></body></h3>

const Server= () => <h3>What is server side?<li>node.js - JavaScript everywhere!</li></h3>

//Render app into the root HTML DOM node

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

