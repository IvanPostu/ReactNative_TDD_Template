import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function RedScreen() {
  return <View style={styles.root} />;
}

const styles = StyleSheet.create({
  root: {
    height: 200,
    backgroundColor: 'red',
  },
});
