import { useReducer } from 'react';

type AnyObject = Record<string, unknown>;

type StateAction<S> =
  | Partial<Record<keyof S, S[keyof S]>>
  | import('react').ReducerWithoutAction<S>;

export const useRecordState = <T extends AnyObject>(initialState: T) =>
  useReducer((previousState: T, action: StateAction<T>) => {
    if (typeof action === 'function') {
      return {
        ...previousState,
        ...action(previousState),
      };
    }

    const hasUpdated = Object.entries(action).some(
      ([key, value]) => previousState[key] !== value,
    );

    return hasUpdated ? { ...previousState, ...action } : previousState;
  }, initialState);
