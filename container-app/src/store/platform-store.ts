// Copyright (c) Bentley Systems

import { applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { createStore } from "redux-dynamic-modules";
import { getThunkExtension } from "redux-dynamic-modules-thunk";
import dynamicMiddlewares from 'redux-dynamic-middlewares'
import { appModule } from "./app/app-module";
// const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const platformStore =
  process.env.NODE_ENV === "development"
    ? createStore(
        {
          enhancers: [compose(applyMiddleware(dynamicMiddlewares)), compose(applyMiddleware(logger))],
          extensions: [getThunkExtension()]
        },
        appModule
      )
    : createStore(
        {
          enhancers: [compose(applyMiddleware(dynamicMiddlewares))],
          extensions: [getThunkExtension()]
        },
        appModule
      );

export default platformStore;
