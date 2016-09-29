import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import GamePage from './components/game/game-page';
import ResultsPage from './components/results/results-page';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={GamePage} />
        <Route path="/results" component={ResultsPage} />
    </Route>
);
