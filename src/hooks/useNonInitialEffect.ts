import { useEffect, useRef, EffectCallback, DependencyList } from 'react';

export default (effect: EffectCallback, deps?: DependencyList) => {
  const initialRender = useRef(true);

  useEffect(() => {
    let effectReturns: void | (() => void | undefined) = () => {};

    if (initialRender.current) {
      initialRender.current = false;
    } else {
      // @ts-ignore
      effectReturns = effect();
    }

    if (effectReturns && typeof effectReturns === 'function') {
      return effectReturns;
    }
  }, deps);
};
