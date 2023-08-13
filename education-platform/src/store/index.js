// import { legacy_createStore as createStore, combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { reducer as userReducer} from './userReducer';
// import { composeWithDevTools } from '@redux-devtools/extension';

// const rootReducer = combineReducers({
//   userReducer,
// })

// export const store = createStore(rootReducer, composeWithDevTools);

export const store = configureStore({
  reducer: {
    user: userReducer,
  }});

