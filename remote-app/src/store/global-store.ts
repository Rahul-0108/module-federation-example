// Copyright (c) Bentley Systems

import { MFE2Store } from "./platform-store";
import { GlobalStore } from "redux-micro-frontend";
export const globalStore = GlobalStore.Get(false);
globalStore.RegisterStore("Platform", MFE2Store);
export default globalStore;
