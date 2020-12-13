import { UPDATE_RESPONSE_REQUESTING, RESULT_REQUESTING } from '../constants';

export const saveResponse = (res: any, history: any) => {
  return {
    type: UPDATE_RESPONSE_REQUESTING,
    payload: res,
    history,
  };
};

export const fetchResult = (id: any) => {
  return {
    type: RESULT_REQUESTING,
    payload: id,
  };
};
