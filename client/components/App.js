import React from 'react';
import {Form, MyFancyForm} from './Form';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <Form />
        <br />
        <MyFancyForm />

      </div>);
  }
}
