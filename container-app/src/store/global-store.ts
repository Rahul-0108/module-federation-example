// Copyright (c) Bentley Systems

import { platformStore } from "./platform-store";
import { GlobalStore } from "redux-micro-frontend";

export const InitializeGlobalStore = () => {
const globalStore = GlobalStore.Get(false);
globalStore.RegisterStore("Platform", platformStore);
}
export default InitializeGlobalStore;
