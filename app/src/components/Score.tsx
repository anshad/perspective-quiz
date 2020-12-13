import React from 'react';
import PropTypes from 'prop-types';

function Score(props: any) {
  const dimensions = [
    { left: 'Extraversion (E)', right: 'Introversion (I)', short: 'EI' },
    { left: 'Sensing (S)', right: 'Intuition (N)', short: 'SN' },
    { left: 'Thinking (T)', right: 'Feeling (F)', short: 'TF' },
    { left: 'Judging (J)', right: 'Perceiving (P)', short: 'JP' },
  ];

  const { result } = props;

  return (
    <div className='result'>
      {dimensions.map(dim => (
        <div className='row' key={dim.short}>
          <div className='left-text'>{dim.left}</div>
          <div
            className={
              result && result[dim.short] <= 50
                ? 'progress left'
                : 'progress right'
            }></div>
          <div className='right-text'>{dim.right}</div>
        </div>
      ))}
    </div>
  );
}

Score.propTypes = {
  result: PropTypes.any,
};

export default Score;
