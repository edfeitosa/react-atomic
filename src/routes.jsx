import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/pages/Login/login';
import NotFound from './components/pages/NotFound/notFound';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='*' component={NotFound} />
    </Switch>
  )
}

export default Routes;