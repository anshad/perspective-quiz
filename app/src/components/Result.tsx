import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchResult } from '../actions';
import Score from './Score';

function Result(props: any) {
  const { id }: { id: any } = useParams();

  const { result, fetchResult } = props;
  const res = result.result;

  useEffect(() => {
    if (typeof result.id === 'undefined') {
      fetchResult(id);
    }
  }, [id]);

  return (
    <div className='result-container'>
      <div className='info'>
        <h2>Your Perspective</h2>
        <p>Your Perspective Type is {res.summary || 'not identified'}</p>
      </div>
      <Score result={res.result} />
    </div>
  );
}
const mapStateToProps = (state: any) => ({
  result: state.result,
});

const mapDispatchToProps = {
  fetchResult,
};

Result.propTypes = {
  result: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
