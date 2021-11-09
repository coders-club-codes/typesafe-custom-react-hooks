import { useRef } from 'react';

export const usePreviousValue = <T>(value: T) => {
  const previousValue = useRef(value);

  return previousValue.current;
};
