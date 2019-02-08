import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import Header from '../components/Header';
import DashboardExpensePage from '../components/DashboardExpensePage';
import CreateExpensePage from '../components/CreateExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';

const AppRouter = () => (
    <Router>
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={DashboardExpensePage} />
            <Route path='/create' component={CreateExpensePage} />
            <Route path='/edit/:id' component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;