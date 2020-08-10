import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './home/LandingPage';
import About from './navbar/AboutMe';
import Contact from './contact/Contact';
import Project from './navbar/Project';
import Resume from '../component/Resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Project" component={Project} />
        <Route path="/Resume" component={Resume} />
    </Switch>
)

export default Main;