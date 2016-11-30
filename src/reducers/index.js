//index.js is typical name for 'root reducer'

import {combineReducers} from 'redux';
import todos from './todoReducer';

const rootReducer = combineReducers({
  todos //short hand property name
});

export default rootReducer;