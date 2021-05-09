import {ReduxGlobalStateType} from '@/Redux';
import React, {ReactElement, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import * as actionCreators from '@/Redux/Counter/actionCreators';
import Button1 from './Button';

type CounterContainerPropTypes = {} & ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export const CounterContainer = (
  props: CounterContainerPropTypes,
): ReactElement => {
  const [count, setCount] = useState(0);

  function onCounterTextChange(text: string) {
    try {
      const validNumber = text.replace(/[^0-9]/g, '');
      setCount(+validNumber);
    } catch {}
  }

  return (
    <View style={styles.root}>
      <Text testID="outputValue" style={styles.text}>
        {String(props.count)}
      </Text>
      <View>
        <Button
          testID="incrementBtn"
          onPress={() => props.incrementActionCreator()}
          title="Increment"
        />
        <Button
          testID="decrementBtn"
          onPress={() => props.decrementActionCreator()}
          title="Decriment"
        />
        <TextInput
          testID="inputValue"
          keyboardType="numeric"
          style={styles.input}
          value={String(count)}
          onChangeText={onCounterTextChange}
        />
        <Button
          testID="setValueButton"
          onPress={() => {
            props.setValueActionCreator(count);
          }}
          title="Set value"
        />
        <Button1
          isLoading={false}
          onPress={() => {
            console.log(1);
          }}
          title="qq"
          transparent={false}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state: ReduxGlobalStateType) => ({
  count: state.counterReducer.counter,
});

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

const styles = StyleSheet.create({
  root: {
    height: 400,
    backgroundColor: 'black',
  },
  text: {
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
  },
});
