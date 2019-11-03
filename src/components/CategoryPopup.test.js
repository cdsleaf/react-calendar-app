import React from 'react';
import CategoryPopup from './CategoryPopup';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const selectedDay = {};
  const handleChangeCategory = jest.fn();
  const toggleCategoryPopup = jest.fn();

  const wrapper = shallow(<CategoryPopup 
    selectedDay={selectedDay}
    handleChangeCategory={handleChangeCategory}
    toggleCategoryPopup={toggleCategoryPopup}
  />);

  wrapper.find('select').simulate('change');

  expect(handleChangeCategory.mock.calls.length).toBe(1);
});
