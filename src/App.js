import React from "react";
import "./App.css";
import Onlinecourses from "./Onlinecourses";
import Hiring from "./Hiring";
import Aboutus from "./Aboutus";
import {Route} from "react-router-dom";
import Home from "./Home";

function App(){
  return(
  <>
    <Route exact path="/" component={Home} />
    <Route path="/online" component={Onlinecourses} />
    <Route path="/hiring" component={Hiring} />
    <Route path="/aboutus" component={Aboutus} />
  </>
)};

export default App;