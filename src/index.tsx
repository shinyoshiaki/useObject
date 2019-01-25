import { useState } from "react";

export default function useObject<T>(obj: T) {
  const [state, setObj] = useState(Object.assign({}, obj));

  const setState = (next: Partial<T>) => {
    setObj(Object.assign({}, state, next));
  };

  return { state, setState };
}

