import React from 'react';
import { shallow } from 'enzyme';
import Chart from './Chart';

describe('Chart', () => {
  test('should render successfully', () => {
    const wrapper = shallow(<Chart height={450} width={480} data={[]} />);
    expect(wrapper.prop('height')).toEqual(450);
    expect(wrapper.prop('width')).toEqual(480);
    expect(wrapper.prop('data')).toEqual([]);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with default properties', () => {
    const wrapper = shallow(
      <Chart
        height={450}
        width={480}
        data={[]}
      />,
    );
    expect(wrapper.find('XAxis').prop('dataKey')).toEqual('name'); // xDataKey
    expect(wrapper.find('YAxis').prop('dataKey')).toEqual('value'); // yDataKey
  });
});
