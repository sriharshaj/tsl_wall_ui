import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getUserDetails } from './app/slices/userSlice';

import NavBar from './app/components/NavBar';
import Wall from './app/components/Wall';
import Login from './app/components/Login';
import Register from './app/components/Register';
import Profile from './app/components/Profile';
import CreatePost from './app/components/CreatePost';

import { home_path, login_path, register_path, profile_path, create_post_path } from './app/routes';

function App() {
  const { logged_in } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (logged_in) {
      dispatch(getUserDetails());
    }
  });
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path={login_path} component={Login} />
          <Route path={register_path} component={Register} />
          <Route path={profile_path} component={Profile} />
          <Route path={create_post_path} component={CreatePost} />
          <Route path={home_path} component={Wall} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
