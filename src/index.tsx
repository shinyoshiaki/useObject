import { useState } from "react";

export default function useObject<T>(obj: T) {
  const [state, setObj] = useState({ ...obj });

  const setState = (next: Partial<T>) => {
    setObj(prev => {
      return { ...prev, ...next };
    });
  };

  const prevState = () => {
    let result: any;
    setObj(prev => {
      result = prev;
      return prev;
    });
    return result as T;
  };

  return { state, setState, prevState };
}

export function alphaUseObject2<T>(obj: T) {
  const store: { [key: string]: any } = {};
  Object.keys(obj).forEach(key => {
    store[key] = useState({ ...(obj as any)[key] });
  });

  const setState = (next: Partial<T>) => {
    Object.keys(next).forEach(key => {
      store[key][1]((next as any)[key]);
    });
  };

  const state: any = {};
  Object.keys(store).forEach(key => {
    state[key] = store[key][0];
  });

  return { state: state as T, setState };
}
