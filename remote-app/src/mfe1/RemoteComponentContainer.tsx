import { Button } from '@itwin/itwinui-react';
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { remoteComponentContainerStateReducerModule } from '../mfe1/redux/module';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setText } from '../mfe1/redux/actions'
import RemoteComponent from '../RemoteComponent/RemoteComponent';
function RemoteComponentContainer() {
  const dispatch = useDispatch();
  const text = useSelector((state: any) => state?.remoteComponentContainer?.text);
  useEffect(() => { }, []);
  return (
    // @ts-ignore
    <DynamicModuleLoader modules={[remoteComponentContainerStateReducerModule]}>
      <Button styleType='high-visibility' onClick={() => {
        dispatch(setText(text - 1));
      }}>{`Itwin UI Button from Remote App Container ${text}`}</Button>
      <p>This text is from Remote App Container</p>
      <RemoteComponent />
    </DynamicModuleLoader >
  );
}

export default RemoteComponentContainer;
