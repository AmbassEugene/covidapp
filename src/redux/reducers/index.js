import {combineReducers} from 'redux';
import {home} from './home';

const initialState = {app: 'hello'};

export default combineReducers({initialState, home});
