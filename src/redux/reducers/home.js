import {GET_COVID_DATA, SET_ACTIVE_DATA} from '../config/types';

export const home = (state = {}, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_COVID_DATA:
      return {...state, allData: payload};
    case SET_ACTIVE_DATA:
      return {...state, activeData: payload};

    default:
      return state;
  }
};
