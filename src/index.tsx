import { useState } from "react";

export default function useObject<T>(obj: T) {
  const [state, setObj] = useState(Object.assign({}, obj));

  const setState = (next: Partial<T>) => {
    setObj(prev => {
      return { ...prev, ...next };
    });
  };

  return { state, setState };
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
