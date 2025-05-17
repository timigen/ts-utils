export declare class Array2d {
    static getSeeded<T>(rowCount: number, colCount: number, defaultValue: T): T[][];
    static getRandomlySeeded2d(rows: number, cols: number, min: number, max: number): number[][];
    static getNeighbors<T>(array2d: T[][], row: number, column: number, distance?: number): T[];
}
