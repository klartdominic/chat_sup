import {INCREASE_COUNTER, DECREASE_COUNTER} from '.././action/action';

const INITIAL_STATE = {
  counter: 0,
};

const counterAppReducer = (state = INITIAL_STATE, action) => {
  console.log('counterAppReducer', action);
  switch (action.type) {
    case 'INCREASE_COUNTER':
      console.log('INCREASE_COUNTER', state);
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      console.log('DECREASE_COUNTER', state);
      return {counter: state.counter - 1};
  }
  return state;
};

export default counterAppReducer;
