import {combineReducers} from 'redux';

const initialState = {app: 'hello'};

const fakeReducer = (state, action) => {
  return (state = {happy: false});
};
export default combineReducers({initialState, appReducer: fakeReducer});
