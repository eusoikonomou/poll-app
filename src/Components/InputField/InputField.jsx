import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
                      value,
                      onChange,
                      id,
                      placeholder,
                      disabled,
                    }) => (
  <input
    id={id}
    className="poll-question"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    maxLength={80}
    disabled={disabled}
  />
);

InputField.displayName = 'InputField';

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  id: '',
  placeholder: 'Input the question here...',
  disabled: false,
};

export default InputField;
