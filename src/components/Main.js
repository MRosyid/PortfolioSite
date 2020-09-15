import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Resume from './Resume';
import Projects from './Projects';

// Determening the pages according to components
const Main = () => (
    <Switch>
        <Route exact path="/" component={Projects} />
        <Route exact path="/resume" component={Resume} />
    </Switch>
)

export default Main;