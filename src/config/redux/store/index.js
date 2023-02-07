import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

import thunk from 'redux-thunk';
import reducer from '../reducer';

export const store = createStore(
  reducer,
  // applyMiddleware(thunk),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);