import React, { Component } from 'react';
import getBitsoData from '../actions/index';

export default class App extends Component {
  constructor(props)
  {
    super(props);

    getBitsoData();

  }

  render() {
    return (
      <div>Bitso Prices</div>
    );
  }
}
