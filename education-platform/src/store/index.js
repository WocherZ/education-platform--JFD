// import { legacy_createStore as createStore, combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { reducer as userReducer} from './userReducer';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from 'redux-thunk';
// const rootReducer = combineReducers({
//   userReducer,
// })

// export const store = createStore(rootReducer, composeWithDevTools);

// const middleware = getDefaultMiddleware({
//   immutableCheck: false,
//   serializableCheck: false,
//   thunk: true,
// });

export const store = configureStore({
  reducer: {
    user: userReducer,
  }
});

