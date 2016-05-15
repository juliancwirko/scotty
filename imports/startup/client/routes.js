import React from 'react';
import Main from '../../ui/layouts/main/Main';
import Home from '../../ui/pages/home/Home';
import {Route, IndexRoute} from 'react-router';

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
    </Route>
);