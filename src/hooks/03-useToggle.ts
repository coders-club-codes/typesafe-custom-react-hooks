import { useReducer } from 'react';

export const useToggle = (initialState: boolean) =>
  useReducer((previousState: boolean) => !previousState, initialState);
