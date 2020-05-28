import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import About from '../component/AboutMe';
import Contact from './Contact';
import Project from '../component/Project';
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