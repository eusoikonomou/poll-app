import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from './AppHeader';

test('AppHeader renders properly', () => {
  const wrapper = shallow(<AppHeader />);
  expect(wrapper).toMatchSnapshot();
});
