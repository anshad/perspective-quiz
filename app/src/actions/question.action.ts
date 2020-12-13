import { QUESTION_REQUESTING } from '../constants';

export const fetchQuestions = () => {
  return {
    type: QUESTION_REQUESTING,
  };
};
