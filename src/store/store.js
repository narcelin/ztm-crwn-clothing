import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// root-reducer

//createStore is depreciated. Using configureStore instead
export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

//OLD OUTDATE METHOD

// import { compose, createStore, applyMiddleware } from "redux";

// import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

// import { rootReducer } from './root-reducer';

// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
//   Boolean
// );

// const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composedEnhancers);
