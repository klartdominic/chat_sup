import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: 200,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text>Increase</Text>
          </TouchableOpacity>
          <Text>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
<<<<<<< HEAD
  console.log(state);
  return {
    counter: state.counterApp.counter,
=======
  return {
    counter: state.counter,
>>>>>>> 8d430351ff2389a17de6c1775ede628b330d5ac7
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
