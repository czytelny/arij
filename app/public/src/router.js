import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import store from './store'

//Layouts
import MainLayout from './layouts/mainLayout';


export default (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={MainLayout} />
        </Router>
    </Provider>
);