import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import HomeScreen from "screens/HomeScreen"
import UserScreen from "screens/UserScreen"
import UsersScreen from "screens/UsersScreen"

export default function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/users" component={UsersScreen} />
        <Route path="/users/:id" component={UserScreen} />
      </Switch>
    </Router>
  );
}
