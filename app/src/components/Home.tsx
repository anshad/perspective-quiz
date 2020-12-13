import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { fetchQuestions, saveResponse } from '../actions';
import Question from './Question';

function Home(props: any) {
  const [response, setResponse]: any = useState({});

  const history = useHistory();

  useEffect(() => {
    if (props.questions && props.questions.length === 0) {
      props.fetchQuestions();
    }
  });

  const handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setResponse({
      ...response,
      [name]: value,
    });
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    let req: any = { answers: [] };
    for (const key in response) {
      if (Object.prototype.hasOwnProperty.call(response, key)) {
        if (key === 'email') {
          req[key] = response[key];
        } else {
          let obj: any = {};
          obj[key] = response[key];
          req.answers.push(obj);
        }
      }
    }

    props.saveResponse(req, history);
  };

  return (
    <div>
      <header className='app-header'>
        <h3>Discover Your Perspective</h3>
        <p>
          Complete the 7 min test and get a detailed report of your lenses on
          the world.
        </p>
      </header>
      <div className='questions'>
        <form onSubmit={handleFormSubmit}>
          {props.questions &&
            props.questions.map((q: any) => (
              <Question
                key={q.id}
                id={q.id}
                text={q.question}
                change={handleInputChange}
              />
            ))}

          <div className='user-input'>
            <input
              type='email'
              name='email'
              placeholder='you@example.com'
              required
              onChange={handleInputChange}
              value={response.email}
            />
          </div>
          <div className='button-container'>
            <button type='submit'>Save & Continue</button>
          </div>
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
  saveResponse,
};

Home.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
