import React from 'react';
import YearNavigation from './YearNavigation';
import { shallow } from 'enzyme';

it('renders without crashing and test click event ', () => {
  const year = 2019;
  const mockSetYear = jest.fn(v => v);

  const wrapper = shallow(<YearNavigation year={year} setYear={mockSetYear} />);

  wrapper.find('#lastYear').simulate('click');
  wrapper.find('#nextYear').simulate('click');

  expect(mockSetYear.mock.calls.length).toBe(2);
});
