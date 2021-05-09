import 'react-native';
import React from 'react';
import App from '@/App';

import {render} from '@testing-library/react-native';

describe('App component test', () => {
  test('Renders correctly (take snapshot)', () => {
    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
