import React, {Component} from 'react';
import {View} from 'react-native';
import CounterApp from './screen/counterApp';
import {Provider} from 'react-redux';
import store from './src/store';
import ChatScreen from './screen/chatScreen';
import OpenChannelScreen from './screen/openChannelScreen';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ChatScreen />
      </Provider>
    );
  }
}

export default App;
