import { useState } from "react";

export default function useObject<T>(obj: T) {
  const [state, setObj] = useState({ ...obj });

  type func = (prev: T) => Partial<T>;
  type obj = Partial<T>;

  const setState = <U extends func | obj>(next: U) => {
    setObj(prev => {
      if (typeof JSON.stringify(next) === "string") {
        return { ...prev, ...next };
      } else {
        return { ...prev, ...(next as func)(prev) };
      }
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

  const updateState = (next: func) => {
    setObj(prev => {
      return { ...prev, ...next(prev) };
    });
  };

  return { state, setState, prevState, updateState };
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
