import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Onlinecourses from './Onlinecourses';
import Hiring from './Hiring';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

ReactDOM.render(
    // <App/>
    <BrowserRouter>
        <Switch>
            <Route exact path="/The-Entrepreneurship-Network" component={App} />
            <Route path="/online" component={Onlinecourses} />
            <Route path="/hiring" component={Hiring} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));

