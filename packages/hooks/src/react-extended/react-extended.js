import { useState, useLayoutEffect, useRef, useCallback } from 'react';
import timers from '../timers';

export function useIsMounted() {
  const isMounted = useRef(true);
  useLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return useCallback(() => isMounted.current, []);
}

export function useSafeState(defaultState) {
  const isMounted = useIsMounted();
  const [state, setState] = useState(defaultState);
  const setSafeState = useCallback(
    (...args) => {
      if (isMounted()) {
        return setState(...args);
      }
      return () => {};
    },
    [isMounted],
  );
  return [state, setSafeState];
}

export function useForceRender() {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  return forceUpdate;
}

export function usePreventLoop(frequency = 100, timeSlot = 5000) {
  const preventLoopRef = useRef(0);
  timers.useInterval(() => {
    preventLoopRef.current = 0;
  }, [timeSlot]);
  preventLoopRef.current += 1;
  if (preventLoopRef.current > frequency) {
    throw new Error('Loop detected');
  }
}

export function useBooleanState(defaultState = false) {
  const [state, setState] = useState(defaultState);
  const toggle = useCallback(
    (setter) =>
      setState(
        typeof setter !== 'undefined' ? setter : (prevState) => !prevState,
      ),
    [],
  );
  return [state, toggle];
}
