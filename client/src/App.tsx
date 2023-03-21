import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/navbar';

import TestsPage from './pages/tests';
import StudentsPage from './pages/students';
import StudentPage from './pages/student';

export const App: React.FC = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/students/:studentId' component={StudentPage} />
      <Route path='/students' component={StudentsPage} />
      <Route path='/tests' component={TestsPage} />
      <Redirect from='/' to='/students' />
    </Switch>
  </BrowserRouter>
);