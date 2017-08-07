import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../../ui/layouts/main/Main';
import Home from '../../ui/pages/home/Home';
import Subpage from '../../ui/pages/subpage/Subpage';

export default (
  <Main>
    <Route exact path="/" component={Home} />
    <Route exact path="/subpage" component={Subpage} />
  </Main>
);
