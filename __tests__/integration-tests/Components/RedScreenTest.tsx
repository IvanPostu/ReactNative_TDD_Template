import React from 'react';
import {create} from 'react-test-renderer';
import RedScreen from '@/Components/RedScreen';

const tree = create(<RedScreen />);

test('Red Screen test', () => {
  expect(tree).toMatchSnapshot();
});
