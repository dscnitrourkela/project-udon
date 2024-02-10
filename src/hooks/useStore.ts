import { AppDispatch, RootState } from '@/store/store';
import { useDispatch as useMainDispatch, useSelector as useMainSelector, TypedUseSelectorHook } from 'react-redux';

export const useDispatch: () => AppDispatch = useMainDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useMainSelector;
