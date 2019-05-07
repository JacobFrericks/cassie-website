import React, { Component } from 'react';
import Home from "./components/Home/Home";
import {Route} from 'react-router-dom';
import ContactMe from "./components/ContactMe/ContactMe";

export default class App extends Component {

  componentDidMount() {
    document.title = 'Cassie Frericks';
  }

  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/contactMe' component={ContactMe} />
      </div>
    );
  }
}