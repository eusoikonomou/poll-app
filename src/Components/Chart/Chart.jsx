import React from 'react';
import PropTypes from 'prop-types';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Chart = ({
  height,
  width,
  data,
  xDataKey,
  yDataKey,
}) => (
  <BarChart
    height={height}
    width={width}
    data={data}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey={xDataKey} />
    <YAxis dataKey={yDataKey} allowDecimals={false} />
    <Tooltip />
    <Bar dataKey={yDataKey} fill="#8884d8" />
  </BarChart>
);

Chart.displayName = 'Chart';

Chart.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  xDataKey: PropTypes.string,
  yDataKey: PropTypes.string,
};

Chart.defaultProps = {
  xDataKey: 'name',
  yDataKey: 'value',
};

export default Chart;
