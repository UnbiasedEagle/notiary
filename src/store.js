import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { noteReducer } from './reducers/notesReducer';
import ReduxThunk from 'redux-thunk';

const reducers = combineReducers({
  notes: noteReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [ReduxThunk];

const notesFromLocalStorage = localStorage.getItem('notes')
  ? JSON.parse(localStorage.getItem('notes'))
  : [];

const initialState = {
  notes: { notes: notesFromLocalStorage },
};

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
