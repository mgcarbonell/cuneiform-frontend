import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import EntryList from '../components/EntryList'
import ShowEntry from '../pages/ShowEntry'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem('id')
  return  <Route { ...rest } render={ props => {
            return currentUser ? <Component { ...rest } { ...props } /> : <Redirect to="/login" />
          }} 
  />
}

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/entry/:id' component={ ShowEntry } />
    <Route path='/entry' component={ EntryList } />
    <Route path='/register' component={ Register } />
    <Route path='/login' render={ (routeComponentProps) => {
      return  <Login 
                {...routeComponentProps}
                // more props to come here
                currentUser={ props.currentUser }
                storeUser={ props.storeUser }
              />
    } } />
    <PrivateRoute path='/profile' component={ Profile } currentUser={ props.currentUser } />
    {/* PrivateRoute path='/entry/create' component={ NewEntry } currentUser={ props.currentUser } */}
    {/* PrivateRoute path='/still trying to figure this one out entry/user/orsomething' component={ UserEntries } currentUser={ props.currentUser } */}
    {/* PrivateRoute path='/entry/destroy' component={ DeleteEntry } currentUser={ props.currentUser } <-not necessary*/}
  </Switch>
)

export default Routes;