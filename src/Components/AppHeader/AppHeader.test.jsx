import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from './AppHeader';

describe('AppHeader', () => {
  test('should render properly', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
