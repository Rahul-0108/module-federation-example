// Copyright (c) Bentley Systems

import { remoteComponentContainerStateReducer } from "./reducer";
const _remoteComponentContainerStateReducerModule = {
  id: "remoteComponentContainer",
  reducerMap: {
    remoteComponentContainer: remoteComponentContainerStateReducer()
  } as any
};

export const remoteComponentContainerStateReducerModule = _remoteComponentContainerStateReducerModule;
