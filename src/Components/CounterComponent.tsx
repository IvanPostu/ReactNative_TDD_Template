import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const CounterComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(101);
    }, 900);
  }, []);

  return (
    <View style={styles.root}>
      <Text testID="out" style={styles.text}>
        {count}
      </Text>
      <Button
        testID="incrBtn"
        onPress={() => setCount(prevState => prevState + 1)}
        title="Increment"
      />
      <Button
        testID="decrBtn"
        onPress={() => setCount(prevState => prevState - 1)}
        title="Decriment"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 300,
    backgroundColor: 'grey',
  },
  btn: {
    margin: 20,
  },
  text: {
    fontSize: 70,
  },
});
