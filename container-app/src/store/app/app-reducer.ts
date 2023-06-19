// Copyright (c) Bentley Systems
import { AnyAction } from 'redux';
import { AppActions } from './app-actions';


export interface AppState {
  usState: string
}
const initialState = {
  usState: ""
}

export const appReducer = () => {
  return (state: AppState = initialState, action: AnyAction) => {
    const currentState: AppState = { ...state };
    switch (action.type) {
      case AppActions.SET_STATE:
        return { ...currentState, usState: action.payload };
      default:
        return currentState;

    }
  }
}
