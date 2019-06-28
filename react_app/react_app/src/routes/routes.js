//This is the starting point of the application

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../component/app.component';
import About from '../AboutUs/about';
import "../css/main.css";    // importing 'main.css' file which contains all the
                             // css of the application.

import Dashboard from '../containers/dashboard/Dashboard';
import Album from '../containers/album/Album';
import CheckOutForm from '../containers/checkout/Checkout';
import Pricing from '../containers/pricing/Pricing';
import SignUp from '../containers/sign-in/SignIn';

export default () => {
 return (
   <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/about' component={About}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/album' component={Album}/>
        <Route path='/checkOutForm' component={CheckOutForm}/>
        <Route path='/pricing' component={Pricing}/>
        <Route path='/signUp' component={SignUp}/>
    </Switch>
   </BrowserRouter>
 )
}