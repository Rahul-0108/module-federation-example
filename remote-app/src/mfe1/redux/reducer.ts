// Copyright (c) Bentley Systems
import { AnyAction } from 'redux';
import { RemoteComponentContainerStateActions } from './actions';


export interface RemoteComponentContainerState {
  text: Number;
}
const remoteComponentContainerState = {
  text: -999
}

export const remoteComponentContainerStateReducer = () => {
  return (state: RemoteComponentContainerState = remoteComponentContainerState, action: AnyAction) => {
    const currentState: RemoteComponentContainerState = { ...state };
    switch (action.type) {
      case RemoteComponentContainerStateActions.SET_BUTTON_TEXT_CONTAINER:
        return { ...currentState, text: action.payload };
      default:
        return currentState;

    }
  }
}
