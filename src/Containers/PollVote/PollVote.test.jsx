import React from 'react';
import { shallow, mount } from 'enzyme';
import PollVote from './PollVote';
import PollStore from '../../store/PollStore';

describe('PollVote', () => {
  let store = null;
  let wrapper = null;

  beforeEach(() => {
    store = new PollStore();
  });

  afterEach(() => {
    store = null;
    wrapper = null;
  });

  test('should render successfully', () => {
    wrapper = shallow(<PollVote store={store} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should increase the number of input fields when poll options increase', () => {
    wrapper = shallow(<PollVote store={store} />);
    expect(wrapper.find('input')).toHaveLength(0);
    store.setPollOptions([{ id: 'opt1', value: 'opt1', count: 0 }]);
    wrapper = shallow(<PollVote store={store} />);
    expect(wrapper.find('input')).toHaveLength(1);
    store.setPollOptions([
      { id: 'opt1', value: 'opt1', count: 0 },
      { id: 'opt2', value: 'opt2', count: 0 },
      { id: 'opt3', value: 'opt3', count: 0 },
      { id: 'opt4', value: 'opt4', count: 0 },
    ]);
    wrapper = shallow(<PollVote store={store} />);
    expect(wrapper.find('input')).toHaveLength(4);
  });

  test('should have .vote-btn button disabled while there is no selected option or pollLocked is false', () => {
    wrapper = shallow(<PollVote store={store} />);
    expect(wrapper.find('button').prop('disabled')).toBe(true);
    store.setPollLocked(true);
    wrapper = shallow(<PollVote store={store} />);
    expect(wrapper.find('button').prop('disabled')).toBe(true);
    store.setPollOptions([
      { id: 'opt1', value: 'opt1', count: 0 },
      { id: 'opt2', value: 'opt2', count: 0 },
      { id: 'opt3', value: 'opt3', count: 0 },
      { id: 'opt4', value: 'opt4', count: 0 },
    ]);
    wrapper = mount(<PollVote store={store} />);
    const radioButton = () => wrapper.find('input').at(0);
    radioButton().simulate('change', { target: { checked: true } });
    expect(wrapper.find('button').prop('disabled')).toBe(false);
  });

  test('should increase the count property of the option by pressing the vote button with a selected option', () => {
    const spy = jest.spyOn(store, 'addVote');
    store.setPollLocked(true);
    store.setPollOptions([
      { id: 'opt1', value: 'opt1', count: 0 },
      { id: 'opt2', value: 'opt2', count: 0 },
      { id: 'opt3', value: 'opt3', count: 0 },
      { id: 'opt4', value: 'opt4', count: 0 },
    ]);
    wrapper = mount(<PollVote store={store} />);
    const radioButton = () => wrapper.find('input').at(0);
    radioButton().simulate('change', { target: { checked: true } });
    const voteButton = () => wrapper.find('button').at(0);
    voteButton().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(store.pollOptions[0].count).toEqual(1);
  });

  test('should unselect the selected option after voting', () => {
    store.setPollLocked(true);
    store.setPollOptions([
      { id: 'opt1', value: 'opt1', count: 0 },
      { id: 'opt2', value: 'opt2', count: 0 },
      { id: 'opt3', value: 'opt3', count: 0 },
      { id: 'opt4', value: 'opt4', count: 0 },
    ]);
    wrapper = mount(<PollVote store={store} />);
    const radioButton = () => wrapper.find('input').at(0);
    radioButton().simulate('change', { target: { checked: true } });
    const voteButton = () => wrapper.find('button').at(0);
    voteButton().simulate('click');
    expect(radioButton().prop('checked')).toBe(false);
  });

  test('should change the section-title when pollQuestion changes', () => {
    wrapper = shallow(<PollVote store={store} />);
    const title = () => wrapper.find('.section-title').at(0);
    const firstTitle = title().text();
    expect(firstTitle).toEqual('Enter poll question');
    store.setPollQuestion('test');
    wrapper = shallow(<PollVote store={store} />);
    const secondTitle = title().text();
    expect(secondTitle).toEqual('test');
  });
});
