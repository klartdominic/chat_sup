import {combineReducers} from 'redux';
import counterApp from './counterAppReducer';
<<<<<<< HEAD
import openChannelList from './openChannelReducer';

export default combineReducers({
  counterApp,
  openChannelList,
});
=======

export default combineReducers({
  counter: counterApp;
});
>>>>>>> 8d430351ff2389a17de6c1775ede628b330d5ac7
