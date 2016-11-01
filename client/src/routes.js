import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import GamePage from './components/game/game-page';
import HomePage from './components/home/home-page';
import ResultsPage from './components/results/results-page';
import SigninPage from './components/auth/signin/signin-page';
import SignupPage from './components/auth/signup/signup-page';
import SignoutPage from './components/auth/signout/signout-page';
import RequireAuth from './components/auth/require-auth';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/game" component={RequireAuth(GamePage)} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/signout" component={SignoutPage} />
        <Route path="/results" component={ResultsPage} />
    </Route>
);
