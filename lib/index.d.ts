export default function useObject<T>(obj: T): {
    state: T;
    setState: <U extends Partial<T> | ((prev: T) => Partial<T>)>(next: U) => void;
    prevState: () => T;
    updateState: (next: (prev: T) => Partial<T>) => void;
};
export declare function alphaUseObject2<T>(obj: T): {
    state: T;
    setState: (next: Partial<T>) => void;
};
