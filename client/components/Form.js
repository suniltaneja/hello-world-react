import React, { Component } from 'react';
import './app.scss';

export class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
        multiline: '',
        commaSeparated: 'a, b, c',
        multiSelect: [],
      }

    }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>{this.state.commaSeparated}</h1>
      </div>);
  }
}

export class MyFancyForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        multiline: '',
        commaSeparated: 'a, b, c',
        multiSelect: [],
      }

    }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>{this.state.commaSeparated}</h1>
      </div>);
  }
}

