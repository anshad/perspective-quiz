import React from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';

const Question = (props: any) => {
  return (
    <div className='question'>
      <label className='question-label'>{props.text}</label>

      <div>
        <span className='direction-left'>Disagree</span>

        <Radio
          ariaLabel='Completely Disagree'
          required
          name={`question-${props.id}`}
          value='1'
          id={`${props.id}-1`}
        />

        <Radio
          ariaLabel='Strongly Disagree'
          required
          name={`question-${props.id}`}
          value='2'
          id={`${props.id}-2`}
        />

        <Radio
          ariaLabel='Disagree Somewhat'
          required
          name={`question-${props.id}`}
          value='3'
          id={`${props.id}-3`}
        />

        <Radio
          ariaLabel='Neutral'
          required
          name={`question-${props.id}`}
          value='4'
          id={`${props.id}-4`}
        />

        <Radio
          ariaLabel='Agree Somewhat'
          required
          name={`question-${props.id}`}
          value='5'
          id={`${props.id}-5`}
        />

        <Radio
          ariaLabel='Strongly Agree'
          required
          name={`question-${props.id}`}
          value='6'
          id={`${props.id}-6`}
        />

        <Radio
          ariaLabel='Completely Agree'
          required
          name={`question-${props.id}`}
          value='7'
          id={`${props.id}-7`}
        />

        <span className='direction-right'>Agree</span>
      </div>
    </div>
  );
};

Question.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Question;
