import React from 'react';
import './App.css';
import { Button } from '@itwin/itwinui-react';

// import RemoteComponentType from "remote/RemoteComponent";

// @ts-ignore
const RemoteComponent = React.lazy(() => import('remote/RemoteComponent'));
function App() {
  return (
    <div className="App">
      <Button styleType='cta'>Itwin UI Button from Container App</Button>
      <RemoteComponent />
    </div>
  );
}

export default App;
