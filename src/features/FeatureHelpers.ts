import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { State } from '../models/State';
import { AnyAction } from 'redux';

export const useThunkDispatch = () => useDispatch<ThunkDispatch<State, void, AnyAction>>();