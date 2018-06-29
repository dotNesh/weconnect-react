import { combineReducers } from 'redux';
import Users from './user';
import BusinessReducer from './business';

const rootReducer = combineReducers({
  user: Users,
  businesses: BusinessReducer,
});

export default rootReducer;
