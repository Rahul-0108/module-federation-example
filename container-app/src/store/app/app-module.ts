// Copyright (c) Bentley Systems

import { appReducer } from "./app-reducer";
const _appModule = {
  id: "app",
  reducerMap: {
    app: appReducer()
  } as any
};

export const appModule = _appModule;
