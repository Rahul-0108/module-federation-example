// Copyright (c) Bentley Systems

import { remoteComponentStateReducer } from "./reducer";
const _remoteComponentStateReducerModule = {
  id: "remoteComponent",
  reducerMap: {
    remoteComponent: remoteComponentStateReducer()
  } as any
};

export const remoteComponentStateReducerModule = _remoteComponentStateReducerModule;
