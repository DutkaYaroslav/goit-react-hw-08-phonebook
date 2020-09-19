import LoginView from './redux/View/LoginView';
import RegisterView from './redux/View/RegisterView';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Contacts from './App';
import UserMenuBar from './components/userMenuBar/userMenuBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelectors from './redux/auth/authSelectors';

const AppB = () => (
  <div>
    <Navigation />
    <UserMenuBar />
    <Switch>
      <PrivateRoute path="/contacts" exact component={Contacts} />
      {/* <Route path="/contacts" exact component={Contacts}></Route> */}
      <PublicRoute
        path="/registration"
        component={RegisterView}
        restricted={false}
      ></PublicRoute>
      <PublicRoute
        path="/login"
        component={LoginView}
        restricted={true}
      ></PublicRoute>
    </Switch>
  </div>
);

export default AppB;
