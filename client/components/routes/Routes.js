import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Home from '../home'
import Header from '../header'
import Earthquake from '../earthquake'
import Profile from '../profile'

export default (props) => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/eq-zen-garden/home' component={Home} />
      <Route path='/eq-zen-garden/earthquake/:id' component={Earthquake} />
      <Route path='/eq-zen-garden/profile' component={Profile} />
      <Redirect exact from='/eq-zen-garden' to='/eq-zen-garden/home' />
    </Switch>
  </BrowserRouter>
)
