import React from 'react';
import { shallow } from 'enzyme';
import InputField from './InputField';

test('InputField renders properly with the correct props', () => {
  const onChangeFunc = () => {};
  const wrapper = shallow(
    <InputField
      value="test-value"
      onChange={onChangeFunc}
      id="test-id"
      placeholder="test-placeholder"
      disabled
    />,
  );
  expect(wrapper.prop('value')).toEqual('test-value');
  expect(wrapper.prop('id')).toEqual('test-id');
  expect(wrapper.prop('placeholder')).toEqual('test-placeholder');
  expect(wrapper.prop('disabled')).toBe(true);
  expect(wrapper.prop('onChange')).toEqual(onChangeFunc);
  expect(wrapper).toMatchSnapshot();
});

test('InputField logs error if value or onChange properties are missing', () => {
  const spy = jest.spyOn(console, 'error');
  shallow(
    <InputField
      onChange={() => {}}
      id="test-id"
      placeholder="test-placeholder"
      disabled={false}
    />,
  );
  shallow(
    <InputField
      value=""
      id="test-id"
      placeholder="test-placeholder"
      disabled={false}
    />,
  );
  expect(spy).toHaveBeenCalledTimes(2);
});

test('InputField default properties are properly set', () => {
  const wrapper = shallow(
    <InputField
      value=""
      onChange={() => {}}
    />,
  );
  expect(wrapper.prop('id')).toEqual('');
  expect(wrapper.prop('placeholder')).toEqual('Input the question here...');
  expect(wrapper.prop('disabled')).toBe(false);
});
