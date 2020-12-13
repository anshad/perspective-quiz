import { RESULT_REQUESTING, RESULT_SUCCESS, RESULT_ERROR } from '../constants';

const initialState: { errors: any; result: any } = {
  errors: [],
  result: {},
};

const resultReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case RESULT_REQUESTING:
      return {
        ...state,
        loading: true,
        success: false,
        errors: [],
      };

    case RESULT_SUCCESS:
      return {
        ...state,
        errors: [],
        loading: false,
        success: true,
        result: action.response,
      };

    case RESULT_ERROR:
      return {
        errors: state.errors.concat([action.error.toString()]),
        loading: false,
        success: false,
        result: {},
      };

    default:
      return state;
  }
};

export default resultReducer;
