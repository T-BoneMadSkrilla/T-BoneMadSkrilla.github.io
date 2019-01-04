import React from "react";
import { Switch, Route } from "react-router-dom";
import About from './components/about/About';
import UserPost from './components/userInfo/UserPost';

export default (
    <Switch>
        <Route path="/" exact component={About}/>
        <Route path="/contactus" component={UserPost}/>
    </Switch>
)