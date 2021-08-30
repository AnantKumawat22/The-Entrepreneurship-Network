import React from "react";
import Onlinecourses from "./Onlinecourses";
import Hiring from "./Hiring";
import Aboutus from "./Aboutus";
import { Route } from "react-router-dom";
import Home from "./Home";
import Certification from './More/Certification';
import Entrepreneurship from './Entrepreneurship';
import DigitalMarketing from './DigitalMarketing';
import ProductManagement from './ProductManagement';
import Complaints from "./More/Complaints";

function App(){
  return(
  <>
    <Route exact path="/" component={Home} />
    <Route path="/online" component={Onlinecourses} />
    <Route path="/hiring" component={Hiring} />
    <Route path="/aboutus" component={Aboutus} />
    <Route path="/certification" component={Certification} />
    <Route path="/complaints" component={Complaints} />
    <Route path="/entrepreneurship-1" component={Entrepreneurship} />
    <Route path="/digital-marketing-1" component={DigitalMarketing} />
    <Route path="/product-management-1" component={ProductManagement} />
  </>
)};

export default App;