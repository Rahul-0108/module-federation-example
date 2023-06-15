import React from 'react';
import './App.css';

// import RemoteComponentType from "remote/RemoteComponent";

// @ts-ignore
const RemoteComponent = React.lazy(() => import('remote/RemoteComponent'));
function App() {
  return (
    <div className="App">
      <RemoteComponent />
    </div>
  );
}

export default App;
