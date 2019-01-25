export default function useObject<T>(obj: T): {
    state: {} & T;
    setState: (next: Partial<T>) => void;
};
