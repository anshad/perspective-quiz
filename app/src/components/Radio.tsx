import React from 'react';
import PropTypes from 'prop-types';

const Radio = (props: any) => {
  return (
    <div className='radio-wrapper'>
      <input
        id={props.id}
        name={props.name}
        onChange={props.change}
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
  change: PropTypes.func,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export default Radio;
