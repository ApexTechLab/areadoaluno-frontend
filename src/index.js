import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import ClassForm from './components/ClassForm/ClassForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes';

//import 'bootstrap-multiselect.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
