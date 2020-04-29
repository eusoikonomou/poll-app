import React from 'react';
import { shallow } from 'enzyme';
import PollStats from './PollStats';
import PollStore from '../../store/PollStore';

describe('PollStats', () => {
  let store = null;

  beforeEach(() => {
    store = new PollStore();
  });

  afterEach(() => {
    store = null;
  });

  test('should render successfully', () => {
    const wrapper = shallow(<PollStats store={store} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with default title if pollQuestion is empty', () => {
    const wrapper = shallow(<PollStats store={store} />);
    const title = () => wrapper.find('.section-title').at(0);
    expect(title().text()).toEqual('Poll Question');
  });

  test('should change the title when pollQuestion changes', () => {
    store.setPollQuestion('test');
    const wrapper = shallow(<PollStats store={store} />);
    const title = () => wrapper.find('.section-title').at(0);
    expect(title().text()).toEqual('test');
  });
});
