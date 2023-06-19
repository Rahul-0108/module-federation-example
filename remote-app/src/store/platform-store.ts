// Copyright (c) Bentley Systems

import { applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { createStore } from "redux-dynamic-modules";
import { getThunkExtension } from "redux-dynamic-modules-thunk";
import dynamicMiddlewares from 'redux-dynamic-middlewares'

export const MFE2Store =
  process.env.NODE_ENV === "development"
    ? createStore(
        {
          enhancers: [compose(applyMiddleware(dynamicMiddlewares)), compose(applyMiddleware(logger))],
          extensions: [getThunkExtension()]
        }
      )
    : createStore(
        {
          enhancers: [compose(applyMiddleware(dynamicMiddlewares))],
          extensions: [getThunkExtension()]
        }
      );

export default MFE2Store;
