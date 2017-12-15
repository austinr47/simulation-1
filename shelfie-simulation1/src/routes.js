import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../src/components/home';
import A from '../src/components/shelf-a';
import B from '../src/components/shelf-b';
import C from '../src/components/shelf-c';
import D from '../src/components/shelf-d';

export default (
    // simulation 1 42G
    <Switch>
        {/* simulaiton 1 42F and 42H */}
        <Route exact path="/" component={Home} />
        <Route path="/bins/A" component={A} />
        <Route path='/bins/B' component={B} />
        <Route path='/bins/C' component={C} />
        <Route path='/bins/D' component={D} />
    </Switch>
    
)