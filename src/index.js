import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes.js";
import Header from "./Header.js";
import "./styles.css";
import * as firebase from "firebase";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return(
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn}}>
      is Logged in? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router>
          <Header>

            <Switch>
              {routes.map(route => (
                <Route
                key={routes.path}
                path={routes.path}
                exact={route.exact}
                component={route.main}
                />
              ))}
            </Switch>
          </Header>
        </Router>
      </div>
    </AuthContext.Provider>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);