import React, { Component } from 'react';

/* components */
import Header from './header/header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
