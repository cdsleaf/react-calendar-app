import React from 'react';
import Legend from './Legend';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Legend />);
});
