import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from '@itwin/itwinui-react';
import { GlobalStore } from 'redux-micro-frontend';

// import RemoteComponentType from "remote/RemoteComponent";

// @ts-ignore
// const RemoteComponent = React.lazy(() => import('remote/RemoteComponent'));
// @ts-ignore
const MFE1 = React.lazy(() => import('remote/mfe1'));
// @ts-ignore
const MFE2 = React.lazy(() => import('remote/mfe2'));

function App() {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    const globalStore = GlobalStore.Get(false);
    // console.log(globalStore.GetGlobalState())
    globalStore.DispatchGlobalAction("Platform", { type: "SET_BUTTON_TEXT_CONTAINER", payload: value }); // This will dispatch the action to current app's store as well other stores who might have registered 'Action-1' as a global action
  }, [value]);


  return (
    <div className="App">
      <div style={{ border: "0.5px solid black", margin: "16px", padding: '5px' }}>
        <Button styleType='cta' onClick={() => {
          setValue(value + 1);
        }}>{`Itwin UI Button from Container App to dispatch Global Action  ${value}`}</Button>
        {/* <RemoteComponent /> */}
        <div style={{ marginTop: "125px" }}>
          <h2>mfe1 share the same store with container app with nested dynamic modules inside it</h2>
          <MFE1 />
        </div>
      </div>
      <div style={{ border: "0.5px solid black", margin: "16px", padding: '5px' }}>
        <div style={{ marginTop: "25px" }}>
          <h2>mfe2 has separate store with nested dynamic modules inside it</h2>
          <MFE2 />
        </div>
      </div>
    </div>
  );
}

export default App;
