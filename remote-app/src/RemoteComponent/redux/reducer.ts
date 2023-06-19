// Copyright (c) Bentley Systems
import { AnyAction } from 'redux';
import { RemoteComponentStateActions } from './actions';


export interface RemoteComponentState {
  text: Number;
}
const remoteComponentState = {
  text: 1
}

export const remoteComponentStateReducer = () => {
  return (state: RemoteComponentState = remoteComponentState, action: AnyAction) => {
    const currentState: RemoteComponentState = { ...state };
    switch (action.type) {
      case RemoteComponentStateActions.SET_BUTTON_TEXT:
        return { ...currentState, text: action.payload };
      default:
        return currentState;

    }
  }
}
