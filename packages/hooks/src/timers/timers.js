import { useEffect, useRef, useState } from 'react';
import {
  defaultFakeLoadingOptions,
  FAKE_LOADING_STATES,
} from './timers.constants';

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return () => {};
  }, [delay]);
}

export function useTimeout(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
    return () => {};
  }, [delay]);
}

export function useFakeLoading(loading, options) {
  const mergedOptions = { ...defaultFakeLoadingOptions, ...options };
  const [state, setState] = useState(FAKE_LOADING_STATES.IDLE);
  const timeout = useRef(null);
  useEffect(() => {
    if (loading && state === FAKE_LOADING_STATES.IDLE) {
      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        if (loading) {
          timeout.current = setTimeout(
            () => setState(FAKE_LOADING_STATES.EXPIRE),
            mergedOptions.minDuration,
          );

          setState(FAKE_LOADING_STATES.DISPLAY);
        } else {
          setState(FAKE_LOADING_STATES.IDLE);
        }
      }, mergedOptions.delay);

      setState(FAKE_LOADING_STATES.DELAY);
    }

    if (!loading && state !== FAKE_LOADING_STATES.DISPLAY) {
      clearTimeout(timeout.current);
      setState(FAKE_LOADING_STATES.IDLE);
    }
  }, [loading, state, mergedOptions.delay, mergedOptions.minDuration]);

  return (
    state === FAKE_LOADING_STATES.DISPLAY ||
    state === FAKE_LOADING_STATES.EXPIRE
  );
}
