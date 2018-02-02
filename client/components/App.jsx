import React from 'react';
import MyFancyForm from './fancyform';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        
        <MyFancyForm />

      </div>);
  }
}
