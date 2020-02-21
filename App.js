import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import CounterApp from './screen/counterApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/reducers/counterAppReducer';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <CounterApp />
      </Provider>
    );
  }
}

export default App;
