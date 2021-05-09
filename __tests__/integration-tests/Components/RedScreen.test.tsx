import React from 'react';
import RedScreen from '@/Components/RedScreen';
import {render} from '@testing-library/react-native';

describe('RedScreen component test', () => {
  test('Renders correctly (take snapshot)', () => {
    const tree = render(<RedScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
