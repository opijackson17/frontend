import React from 'react';
import App from './App';
import Terms from './Terms';
import Privacy from './Privacy';
import AboutUs from './AboutUs';
import Contact from './Contacts';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const routing =  (
<Router>
    <Switch>
      <Route path = "/" exact component = {App}/>
      <Route path = "/about_us" component = {AboutUs}/>
      <Route path = "/contact" component = {Contact}/>
      <Route path = "/privacy" component = {Privacy}/>
      <Route path = "/terms" component = {Terms}/>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
