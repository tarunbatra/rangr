declare type inputRange = [number, number];
declare class Rangr {
    #private;
    constructor(ranges: inputRange[]);
    add(range: inputRange): void;
    toString(): string;
    toIterable(): Iterable<inputRange>;
    toArray(): inputRange[];
}
declare function generateRange(ranges: inputRange[]): inputRange[];
