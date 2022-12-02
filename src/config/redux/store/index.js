import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

export const store = configureStore(
  reducer,
  applyMiddleware(thunk),
);