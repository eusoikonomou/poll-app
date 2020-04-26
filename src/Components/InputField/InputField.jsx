import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ value, onChange, id }) => (
  <input
    id={id}
    className="poll-question"
    placeholder="Input the question here..."
    value={value}
    onChange={onChange}
  />
);

InputField.displayName = 'InputField';

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
};

InputField.defaultProps = {
  id: '',
};

export default InputField;
