import {GET_COVID_DATA, SET_ACTIVE_DATA} from '../config/types';

export const saveCovidData = data => dispatch => {
  try {
    dispatch({
      type: GET_COVID_DATA,
      payload: data,
    });
  } catch (error) {
    console.log('An error occured while saving menu to store', error);
  }
};

export const setActiveData = data => dispatch => {
  try {
    dispatch({
      type: SET_ACTIVE_DATA,
      payload: data,
    });
  } catch (error) {
    console.log('An error occured while saving menu to store', error);
  }
};
