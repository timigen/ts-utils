import { Arrays } from "./arrays.js";
export class Array2d {
    static getSeeded(rowCount, colCount, defaultValue) {
        const grid = [];
        for (let row = 0; row < rowCount; row++) {
            const newRow = Arrays.getSeeded(colCount, defaultValue);
            grid.push(newRow);
        }
        return grid;
    }
    static getRandomlySeeded2d(rows, cols, min, max) {
        const grid = [];
        for (let row = 0; row < rows; row++) {
            const newRow = Arrays.getRandomlySeeded(cols, min, max);
            grid.push(newRow);
        }
        return grid;
    }
    static getNeighbors(array2d, row, column, distance = 1) {
        if (array2d.length < row || array2d[0].length < column) {
            throw new Error("target not in array");
        }
        const neighbors = [];
        const rowStart = row - distance >= 0 ? row - distance : 0;
        const columnStart = column - distance >= 0 ? column - distance : 0;
        const rowEnd = row + distance <= array2d.length - 1
            ? row + distance
            : array2d.length - 1;
        const columnEnd = column + distance <= array2d[0].length - 1
            ? column + distance
            : array2d[0].length - 1;
        for (let rowIndex = rowStart; rowIndex <= rowEnd; rowIndex++) {
            let r = array2d[rowIndex];
            for (let columnIndex = columnStart; columnIndex <= columnEnd; columnIndex++) {
                if (row === rowIndex && column === columnIndex) {
                    continue;
                }
                neighbors.push(r[columnIndex]);
            }
        }
        return neighbors;
    }
}
