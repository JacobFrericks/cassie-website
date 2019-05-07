import React, { Component } from 'react';
import Home from "./components/Home/Home";
import {Route} from 'react-router-dom';
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";

export default class App extends Component {

  componentDidMount() {
    document.title = 'Cassie Frericks';
  }

  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/services' component={Services} />
        <Route path='/contactUs' component={ContactUs} />
      </div>
    );
  }
}