import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App/App';
import CreateStudent from './views/CreateStudent/CreateStudent';
import StudentsTable from './components/StudentsTable/StudentsTable';
import NavbarApex from "./views/NavbarApex/NavbarApex";
import NotFound from "./views/NotFound/NotFound";

const Routes = () => (
  <div>
    <BrowserRouter>
      <NavbarApex />
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/student" exact={true} component={App} />
        <Route path="/student/create" component={CreateStudent} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default Routes;