import React, { useState } from "react";
import "./App.css";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import Tasks from "./components/Tasks/Tasks";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  let history = useHistory();

  return (
    <div className="App">
      {loggedIn && (
        <button
          className="App-logout"
          onClick={() => {
            setLoggedIn(false);
            history.push("/login");
          }}
        >
          Logout
        </button>
      )}
      <Switch>
        <Route
          exact
          path="/login"
          render={(routeProps) => (
            <Login setLoggedIn={setLoggedIn} {...routeProps} />
          )}
        />
        <ProtectedRoute
          exact
          path="/"
          component={Tasks}
          loggedIn={loggedIn}
          redirectPath="/login"
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
