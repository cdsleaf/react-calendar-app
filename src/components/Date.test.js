import React from 'react';
import Date from './Date';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const weekDay = {
    date: 1,
    weekends: true,
    today: true,
  };

  shallow(<Date weekDay={weekDay} />);
});
