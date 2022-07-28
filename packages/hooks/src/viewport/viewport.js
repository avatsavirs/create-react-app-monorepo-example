import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';

function getSize() {
  if (typeof window === 'undefined') return {};
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
}

export { useInView };

export function useOnceInView(options = {}) {
  /*
   * NOTE: ref returned by useInView is not a react ref, rather a function
   * that sets a ref internally in the library after it is given to the dom node
   * as a prop. setRefs function here essentially combines both our domRef and ref
   * recieved from useInView to point to the same thing. So if you want to do any
   * DOM operation use the domRef returned by this hook. Attach setRef to the actual
   * DOM node
   * */
  const domRef = useRef();
  const [hasShownElement, setHasShowElement] = useState(false);
  const [ref, inView, entry] = useInView(options);
  useEffect(() => {
    if (inView) {
      setHasShowElement(true);
    }
  }, [inView]);

  const setRefs = useCallback(
    (node) => {
      domRef.current = node;
      ref(node);
    },
    [ref],
  );

  return { hasShownElement, inView, ref: setRefs, entry, domRef };
}
