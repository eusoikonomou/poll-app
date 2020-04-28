import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import InputField from '../../Components/InputField/InputField';
import { generateUUID } from '../../../utils/generalUtils';
import './PollOptions.scss';

const PollOptions = observer(({ store }) => {
  const [newOption, setNewOption] = useState('');
  const {
    pollQuestion,
    pollOptions,
    setPollQuestion,
    setPollOptions,
    addPollOption,
    reset,
    pollLocked,
    setPollLocked,
  } = store;

  const onPollQuestionChange = (e) => {
    setPollQuestion(e.target.value || '');
  };

  const onOptionChange = (optionId) => (e) => {
    const optionIndex = pollOptions.findIndex((option) => option.id === optionId);
    setPollOptions([
      ...pollOptions.slice(0, optionIndex),
      { id: optionId, value: e.target.value },
      ...pollOptions.slice(optionIndex + 1),
    ]);
  };

  const onAddNewOption = () => {
    addPollOption({ id: generateUUID(), value: newOption, count: 0 });
    setNewOption('');
  };

  const onDeleteOption = (index) => () => {
    setPollOptions([...pollOptions.slice(0, index), ...pollOptions.slice(index + 1)]);
  };

  const resetPoll = () => {
    reset();
    setNewOption('');
  };

  const onNewOptionChange = (e) => {
    setNewOption(e.target.value || '');
  };

  const lockPoll = () => {
    setPollLocked(true);
  };

  return (
    <div className="section">
      <InputField id="poll-question" value={pollQuestion} onChange={onPollQuestionChange} />
      <button
        type="button"
        disabled={pollOptions.length < 2 || pollQuestion.length === 0}
        onClick={lockPoll}
        style={{ verticalAlign: 'middle' }}
      >
        <i className="material-icons" style={{ fontSize: '26px  ' }}>{pollLocked ? 'lock' : 'lock_open'}</i>
      </button>
      <div className="flex-container">
        <>
          {pollOptions.map((option) => (
            <div className="option-container" key={option.id}>
              <InputField
                id={option.id}
                onChange={onOptionChange(option.id)}
                value={option.value}
                placeholder="Add new option"
                disabled={pollLocked}
              />
              <button
                type="button"
                className="del-btn"
                onClick={onDeleteOption(option.id)}
                disabled={pollLocked}
              >
                X
              </button>
            </div>
          ))}
          {(pollOptions.length < 10 && !pollLocked) && (
            <div className="option-container" key="new_option">
              <InputField
                id="new_option"
                onChange={onNewOptionChange}
                value={newOption}
                placeholder="Add new option"
                disabled={pollLocked}
              />
              <button
                type="button"
                className="add-btn"
                onClick={onAddNewOption}
                disabled={
                  pollOptions.find((option) => option.value === newOption)
                  || newOption.length === 0
                }
              >
                Add
              </button>
              {pollOptions.find((option) => option.value === newOption) && (
                <div className="error-msg">Duplicate options are invalid</div>
              )}
            </div>
          )}
        </>
      </div>
      <div className="footer">
        <div className="message">
          {`${pollOptions.length}/10 possible answers`}
        </div>
        <div className="btn-holder">
          <button type="button" onClick={resetPoll} className="reset-btn">Reset</button>
        </div>
      </div>
    </div>
  );
});

PollOptions.displayName = 'PollOptions';

PollOptions.propTypes = {
  store: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.array,
    PropTypes.bool,
  ])).isRequired,
};

export default PollOptions;
