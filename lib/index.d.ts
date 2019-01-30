export default function useObject<T>(obj: T): {
    state: {} & T;
    setState: (next: Partial<T>) => void;
};
export declare function alphaUseObject2<T>(obj: T): {
    state: T;
    setState: (next: Partial<T>) => void;
};
