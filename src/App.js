import React, { Component } from 'react'
import PageWrapper from './component/PageWrapper';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
// Import Route Element
import Home from './component/pages/Home';
import About from "./component/pages/About";


export default class App extends Component {
  render() {
    const error = ()=>{
      return(
        <div>
          <p>Halaman Kosong</p>
        </div>
      );
    }
    return (
      <div>
          <Router>
            <PageWrapper>
              <Switch>
                <Route
                  exact={true}
                  path="/"
                  component={Home}
                />
                <Route
                  path="/about"
                  component={About}
                  />
                <Route
                  path="/h"
                  render = {()=>{
                    return('Hello Iam Salman');
                  }}
                  />
                <Route component={error} />
              </Switch>

            </PageWrapper>
          </Router>
      </div>
    )
  }
}
