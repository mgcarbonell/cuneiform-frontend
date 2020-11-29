import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import EntryList from '../components/EntryList'
import ShowEntry from '../pages/ShowEntry'
import NewEntry from '../components/NewEntryForm'

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
                currentUser={ props.currentUser }
                storeUser={ props.storeUser }
                currentUsername={ props.currentUsername }
                storeUsername={ props.storeUsername }
              />
    } } />
    <PrivateRoute path='/profile' component={ Profile } currentUser={ props.currentUser } currentUsername={ props.currentUsername } />
    <PrivateRoute path='/newentry' component={ NewEntry } currentUser={ props.currentUser } currentUsername={ props.currentUsername } />
    {/* update an entry */}
    {/* delete an entry */}
  </Switch>
)

export default Routes;