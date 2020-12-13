import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestions } from './actions';
import Question from './components/Question';
import './App.scss';

function App(props: any) {
  useEffect(() => {
    if (props.questions && props.questions.length === 0) {
      props.fetchQuestions();
    }
  });

  return (
    <div className='app'>
      <header className='app-header'>
        <h3>Discover Your Perspective</h3>
        <p>
          Complete the 7 min test and get a detailed report of your lenses on
          the world.
        </p>
      </header>
      <div className='questions'>
        <form>
          {props.questions &&
            props.questions.map((q: any) => (
              <Question key={q.id} id={q.id} text={q.question} />
            ))}
        </form>
      </div>
    </div>
  );
}
const mapStateToProps = (state: any) => ({
  questions: state.question.questions,
});

const mapDispatchToProps = {
  fetchQuestions,
};

App.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
