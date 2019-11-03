import React from 'react';
import Week from './Week';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const week = [];
  
  shallow(<Week week={week}/>);
});
