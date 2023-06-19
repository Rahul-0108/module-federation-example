import { useEffect } from 'react';
import RemoteComponentContainer from '../mfe1/RemoteComponentContainer';
import MFE2Store from '../store/platform-store';
import { Provider } from 'react-redux';
import { GlobalStore } from 'redux-micro-frontend';
import { RemoteComponentContainerStateActions } from '../mfe1/redux/actions';
function RemoteComponent2() {
  useEffect(() => {
    const globalStore = GlobalStore.Get(false);
    globalStore.RegisterStore("MFE2", MFE2Store);
    globalStore.RegisterGlobalActions("MFE2", [RemoteComponentContainerStateActions.SET_BUTTON_TEXT_CONTAINER]); // These actions can be dispatched by other apps to this store
  }, []);

  return (
    <Provider store={MFE2Store}>
      <RemoteComponentContainer />
    </Provider>
  );
}

export default RemoteComponent2;
