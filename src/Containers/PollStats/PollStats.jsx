import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Chart from '../../Components/Chart/Chart';

const PollStats = observer(({ store }) => {
  const { pollQuestion, pollOptions } = store;

  return (
    <div
      className="section"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        flexDirection: 'column',
      }}
    >
      <div className="section-title">{pollQuestion || 'Poll Question'}</div>
      <Chart
        height={450}
        width={450}
        data={pollOptions.map((option) => ({ name: option.value, value: option.count }))}
      />
    </div>
  );
});

PollStats.displayName = 'PollStats';

PollStats.propTypes = {
  store: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.array,
    PropTypes.bool,
  ])).isRequired,
};

export default PollStats;
