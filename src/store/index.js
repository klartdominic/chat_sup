import reducers from '../reducers';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));
// const store = createStore(reducers);

export default store;
