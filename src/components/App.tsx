import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ReactLoadable from 'react-loadable';
import Layout from './Layout'
import routes from '../routes'

const Loading = () => <div />

const Routes = routes.map(route => {
    return <Route
        exact={!!route.exact}
        key={route.path}
        path={route.path}
        component={Loadable({
            loader: route.load,
            loading: Loading
        })}
    />
})

const App = () => {
    return (
        <Layout>
            <Switch>
                {Routes}
                <Redirect to="/" />
            </Switch>
        </Layout>
    )
}

export default App