import React, {Component} from 'react';
<<<<<<< HEAD
import {View} from 'react-native';
import CounterApp from './screen/counterApp';
import {Provider} from 'react-redux';
import store from './src/store';
import ChatScreen from './screen/chatScreen';
import OpenChannelScreen from './screen/openChannelScreen';


=======
import {View, StyleSheet} from 'react-native';
import CounterApp from './screen/counterApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/reducers/counterAppReducer';
import SendBirdSampleScreen from './screen/sendBirdSample';
>>>>>>> 8d430351ff2389a17de6c1775ede628b330d5ac7

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Provider store={store}>
        <ChatScreen />
=======
      <Provider store={createStore(reducer)}>
        {/* <CounterApp /> */}
        <SendBirdSampleScreen />
>>>>>>> 8d430351ff2389a17de6c1775ede628b330d5ac7
      </Provider>
    );
  }
}

export default App;
