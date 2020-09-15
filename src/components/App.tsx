import React from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Loadable from 'react-loadable';
import Layout from './Layout'
import routes from '../routes'

const Loading = () => <div />

const Routes = routes.map(route => {
    return (
        <Route
            exact={!!route.exact}
            key={route.path}
            path={route.path}
            component={Loadable({ loader: route.load, loading: Loading })}
        />
    )
})

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    {Routes}
                    <Redirect to="/" />
                </Switch>
            </Layout>
        </Router>
    )
}

export default App