import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Onlinecourses from './Onlinecourses';
import Hiring from './Hiring';
import Aboutus from './Aboutus';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/The-Entrepreneurship-Network" component={App} />
            <Route path="/The-Entrepreneurship-Network/online" component={Onlinecourses} />
            <Route path="/The-Entrepreneurship-Network/hiring" component={Hiring} />
            <Route path="/The-Entrepreneurship-Network/aboutus" component={Aboutus} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));

