import { useSelector, TypedUseSelectorHook } from 'react-redux';
//import { RootStateType } from '../index';
import { RootStateType } from '../components/AppProvider';
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
