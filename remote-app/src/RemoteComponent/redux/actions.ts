// Copyright (c) Bentley Systems

export enum RemoteComponentStateActions {
  SET_BUTTON_TEXT = "SET_BUTTON_TEXT"
}

export const setText = (buttonText: Number) => {
  return {
    type: RemoteComponentStateActions.SET_BUTTON_TEXT,
    payload: buttonText
  };
}
