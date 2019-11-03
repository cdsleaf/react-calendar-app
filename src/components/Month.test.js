import React from 'react';
import Month from './Month';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const monthName = 'January';
  const days = [];

  shallow(<Month monthName={monthName} days={days} />);
});
