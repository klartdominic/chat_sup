import {combineReducers} from 'redux';
import counterApp from './counterAppReducer';

export default combineReducers({
  counter: counterApp
});
