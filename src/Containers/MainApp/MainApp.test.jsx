import React from 'react';
import { shallow } from 'enzyme';
import MainApp from './MainApp';
import PollStore from '../../store/PollStore';

describe('MainApp', () => {
  test('should render successfully', () => {
    const store = new PollStore();
    const wrapper = shallow(<MainApp store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
