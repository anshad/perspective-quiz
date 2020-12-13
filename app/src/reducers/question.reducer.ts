import {
  QUESTION_REQUESTING,
  QUESTION_SUCCESS,
  QUESTION_ERROR,
} from '../constants';

const initialState: { errors: any; questions: any } = {
  errors: [],
  questions: [],
};

const questionReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case QUESTION_REQUESTING:
      return {
        ...state,
        loading: true,
        success: false,
        errors: [],
      };

    case QUESTION_SUCCESS:
      return {
        ...state,
        errors: [],
        loading: false,
        success: true,
        questions: action.response,
      };

    case QUESTION_ERROR:
      return {
        errors: state.errors.concat([action.error.toString()]),
        messages: [],
        loading: false,
        success: false,
        questions: [],
      };

    default:
      return state;
  }
};

export default questionReducer;
