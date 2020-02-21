const increment = () => {
  console.log('increment');
  return {
    type: 'INCREASE_COUNTER',
  };
};

const decrement = () => {
  console.log('decrement');
  return {
    type: 'DECREASE_COUNTER',
  };
};
