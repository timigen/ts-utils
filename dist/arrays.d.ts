export declare class Arrays {
    static sequenceIntExclusive(start: number, end: number): number[];
    static sequenceIntInclusive(start: number, end: number): number[];
    static sample<T>(a: T[]): T | undefined;
    static getRandomlySeeded(length: number, min: number, max: number): number[];
    static getSeeded<T>(length: number, seedValue: T): T[];
}
