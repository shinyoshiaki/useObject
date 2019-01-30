export default function useObject<T>(obj: T): {
    state: T;
    setState: (next: Partial<T>) => void;
    prevState: () => T;
};
export declare function alphaUseObject2<T>(obj: T): {
    state: T;
    setState: (next: Partial<T>) => void;
};
