// Copyright (c) Bentley Systems

export enum RemoteComponentContainerStateActions {
  SET_BUTTON_TEXT_CONTAINER = "SET_BUTTON_TEXT_CONTAINER"
}

export const setText = (buttonText: Number) => {
  return {
    type: RemoteComponentContainerStateActions.SET_BUTTON_TEXT_CONTAINER,
    payload: buttonText
  };
}
