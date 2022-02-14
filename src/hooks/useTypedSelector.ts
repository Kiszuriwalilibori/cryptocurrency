import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootStateType } from '../components/AppProvider';
/**
 * prepares useSelectorHook which knows RootStateType
 */
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
