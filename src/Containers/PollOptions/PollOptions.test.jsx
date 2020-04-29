import React from 'react';
import { shallow, mount } from 'enzyme';
import PollOptions from './PollOptions';
import PollStore from '../../store/PollStore';

describe('PollOptions', () => {
  let store = null;

  beforeEach(() => {
    store = new PollStore();
  });

  afterEach(() => {
    store = null;
  });

  test('should render successfully', () => {
    const wrapper = shallow(<PollOptions store={store} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should change pollQuestion when #poll-question input value changes', () => {
    const wrapper = mount(<PollOptions store={store} />);
    const pollQuestionInput = () => wrapper.find('InputField').at(0);
    pollQuestionInput().simulate('change', { target: { value: 'test-question' } });
    expect(store.pollQuestion).toEqual('test-question');
  });

  test('should have lock-btn disabled while pollOptions are less than 2 and pollQuestion is empty', () => {
    let wrapper = shallow(<PollOptions store={store} />);
    const lockButton = () => wrapper.find('#lock-btn').at(0);
    expect(lockButton().prop('disabled')).toBe(true);
    store.setPollOptions([
      { id: 'opt1', value: 'opt1', count: 0 },
      { id: 'opt2', value: 'opt2', count: 0 },
    ]);
    wrapper = shallow(<PollOptions store={store} />);
    expect(lockButton().prop('disabled')).toBe(true);
    store.setPollQuestion('test');
    wrapper = shallow(<PollOptions store={store} />);
    expect(lockButton().prop('disabled')).toBe(false);
  });
});
