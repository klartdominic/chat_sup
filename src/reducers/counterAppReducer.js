import {INCREASE_COUNTER, DECREASE_COUNTER} from '.././action/action';

const INITIAL_STATE = {
  counter: 0,
};

<<<<<<< HEAD
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
=======
const counterAppReducer = (state = INITIAL_STATE, action) => {
  console.log('counterAppReducer', action);
  switch (action.type) {
    case 'INCREASE_COUNTER':
      console.log('INCREASE_COUNTER', state);
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      console.log('DECREASE_COUNTER', state);
>>>>>>> 8d430351ff2389a17de6c1775ede628b330d5ac7
      return {counter: state.counter - 1};
  }
  return state;
};

<<<<<<< HEAD
=======
export default counterAppReducer;
>>>>>>> 8d430351ff2389a17de6c1775ede628b330d5ac7
