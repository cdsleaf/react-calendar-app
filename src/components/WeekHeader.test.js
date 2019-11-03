import React from 'react';
import WeekHeader from './WeekHeader';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<WeekHeader />);
});
