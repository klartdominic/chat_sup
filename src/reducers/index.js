import {combineReducers} from 'redux';
import counterApp from './counterAppReducer';
import openChannelList from './openChannelReducer';

export default combineReducers({
  counterApp,
  openChannelList,
});
