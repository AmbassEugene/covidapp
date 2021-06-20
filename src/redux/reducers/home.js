import {GET_COVID_DATA, SET_ACTIVE_DATA} from '../config/types';

export const home = (state = {}, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_COVID_DATA:
      console.log('inside reducer GET_COVID_DATA', payload);
      return {...state, allData: payload};
    case SET_ACTIVE_DATA:
      console.log('inside reducer SET_ACTIVE_DATA', payload);

      return {...state, activeData: payload};

    default:
      return state;
  }
};
