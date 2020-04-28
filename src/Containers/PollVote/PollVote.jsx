import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import './PollVote.scss';

const PollVote = observer(({ store }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    pollQuestion,
    pollOptions,
    addVote,
    pollLocked,
  } = store;

  const castVote = () => {
    addVote(selectedOption);
    setSelectedOption(null);
  };

  const onSelect = (optionId) => () => {
    setSelectedOption(optionId);
  };

  return (
    <div className="section">
      <div className="section-title">{pollQuestion || 'Enter poll question'}</div>
      <div className="flex-container">
        {pollOptions.map((option) => (
          <div className="vote-option-container" key={option.id}>
            <input
              type="radio"
              id={option.id}
              name={option.id}
              value={option.id}
              checked={selectedOption === option.id}
              onChange={onSelect(option.id)}
            />
            <label htmlFor={option.id}>{option.value}</label>
          </div>
        ))}
      </div>
      <div className="footer">
        <button
          type="button"
          disabled={selectedOption === null || !pollLocked}
          className="vote-btn"
          onClick={castVote}
        >
          Vote
        </button>
        {!pollLocked && <div className="footer-info">Lock poll options to enable voting</div>}
      </div>
    </div>
  );
});

PollVote.displayName = 'PollVote';

PollVote.propTypes = {
  store: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.array,
    PropTypes.bool,
  ])).isRequired,
};

export default PollVote;
