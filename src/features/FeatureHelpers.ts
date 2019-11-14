import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { State } from '../models/State';
import { AnyAction } from 'redux';

export type ThunkDispatchType = ThunkDispatch<State, void, AnyAction>;

export const useThunkDispatch = () => useDispatch<ThunkDispatchType>();