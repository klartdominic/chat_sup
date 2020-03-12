import {INCREASE_COUNTER, DECREASE_COUNTER} from '.././action/action';

const INITIAL_STATE = {
  counter: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
  }
  return state;
};

