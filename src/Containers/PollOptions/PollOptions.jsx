import React, { useState } from 'react';
import InputField from '../../Components/InputField/InputField';

const PollOptions = () => {
  const [pollQuestion, setPollQuestion] = useState('');

  const onPollQuestionChange = e => {
    setPollQuestion(e.target.value || '');
  };

  return (
    <div className="section">
      <div className="section-title">Poll Question</div>
      <div className="flex-container">
        <InputField id="poll-question" value={pollQuestion} onChange={onPollQuestionChange}/>
      </div>
    </div>
  );
};

PollOptions.displayName = 'PollOptions';

PollOptions.propTypes = {};

export default PollOptions;
