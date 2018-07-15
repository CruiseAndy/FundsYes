import React, { Component } from 'react';

export default class NoComponent extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
