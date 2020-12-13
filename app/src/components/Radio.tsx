import React from 'react';
import PropTypes from 'prop-types';

const Radio = (props: any) => {
  return (
    <div className='radio-wrapper'>
      <input
        id={props.id}
        name={props.name}
        required={props.required ? props.required : false}
        type='radio'
        value={props.value}
      />
      <label aria-label={props.ariaLabel} htmlFor={props.id}>
        {props.label ? props.label : null}
      </label>
    </div>
  );
};

Radio.propTypes = {
  ariaLabel: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default Radio;
