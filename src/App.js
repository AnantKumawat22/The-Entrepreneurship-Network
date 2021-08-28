import React from "react";
import Onlinecourses from "./Onlinecourses";
import Hiring from "./Hiring";
import Aboutus from "./Aboutus";
import { Route } from "react-router-dom";
import Home from "./Home";
import Entrepreneurship from './Entrepreneurship';

function App(){
  return(
  <>
    <Route exact path="/" component={Home} />
    <Route path="/online" component={Onlinecourses} />
    <Route path="/hiring" component={Hiring} />
    <Route path="/aboutus" component={Aboutus} />
    <Route path="/entrepreneurship" component={Entrepreneurship} />
  </>
)};

export default App;