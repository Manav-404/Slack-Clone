import React, { useState } from "react";

import "./App.css";
import Header from "./core/Header/Header";
import Sidebar from "./core/Sidebar/Sidebar";
import Chat from "./core/Chat/Chat";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./core/Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
