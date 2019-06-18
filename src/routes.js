import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App/App';
import CreateStudent from './views/CreateStudent/CreateStudent';
import NavbarApex from "./views/NavbarApex/NavbarApex";
import NotFound from "./views/NotFound/NotFound";
import ClassTable from './components/ClassTable/ClassTable';
import ListStudent from './views/ListStudent/ListStudent';
import CreateClass from "./views/CreateClass/CreateClass";

const Routes = () => (
  <div>
    <BrowserRouter>
      <NavbarApex />
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/class" exact={true} component={ClassTable} />
        <Route path="/student" exact={true} component={App} />
        <Route path="/student/list" component={ListStudent} />
        <Route path="/student/create" component={CreateStudent} />
        <Route path="/class/create" component={CreateClass} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default Routes;