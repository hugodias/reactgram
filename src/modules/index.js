import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import photos from './photos';

export default combineReducers({
  router: routerReducer,
  photos
});
