// Copyright (c) Bentley Systems

export enum AppActions {
  SET_STATE = "SET_STATE"
}

export const setState = (state: string) => {
  return {
    type: AppActions.SET_STATE,
    payload: state
  };
}
