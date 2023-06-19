import { Button } from '@itwin/itwinui-react';
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { remoteComponentStateReducerModule } from './redux/module';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setText } from './redux/actions'
function RemoteComponent() {
  const dispatch = useDispatch();
  const text = useSelector((state: any) => state?.remoteComponent?.text);
  useEffect(() => { }, []);
  return (
    // @ts-ignore
    <DynamicModuleLoader modules={[remoteComponentStateReducerModule]}>
      <Button styleType='high-visibility' onClick={() => {
        dispatch(setText(text + 1));
      }}>{`Itwin UI Button from Remote App ${text}`}</Button>
      <p>This text is from Remote App</p>
    </DynamicModuleLoader >
  );
}

export default RemoteComponent;
