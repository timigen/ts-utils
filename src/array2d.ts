import { Arrays } from "./arrays.js";

export class Array2d {
  public static getSeeded<T>(
    rowCount: number,
    colCount: number,
    defaultValue: T
  ): T[][] {
    const grid: T[][] = [];

    for (let row = 0; row < rowCount; row++) {
      const newRow = Arrays.getSeeded(colCount, defaultValue);
      grid.push(newRow);
    }

    return grid;
  }

  public static getRandomlySeeded2d(
    rows: number,
    cols: number,
    min: number,
    max: number
  ): number[][] {
    const grid: number[][] = [];

    for (let row = 0; row < rows; row++) {
      const newRow = Arrays.getRandomlySeeded(cols, min, max);
      grid.push(newRow);
    }

    return grid;
  }

  public static getNeighbors<T>(
    array2d: T[][],
    row: number,
    column: number,
    distance = 1
  ): T[] {
    if (array2d.length < row || array2d[0].length < column) {
      throw new Error("target not in array");
    }

    const neighbors = [];
    const rowStart = row - distance >= 0 ? row - distance : 0;
    const columnStart = column - distance >= 0 ? column - distance : 0;
    const rowEnd =
      row + distance <= array2d.length - 1
        ? row + distance
        : array2d.length - 1;
    const columnEnd =
      column + distance <= array2d[0].length - 1
        ? column + distance
        : array2d[0].length - 1;

    for (let rowIndex = rowStart; rowIndex <= rowEnd; rowIndex++) {
      let r = array2d[rowIndex];
      for (
        let columnIndex = columnStart;
        columnIndex <= columnEnd;
        columnIndex++
      ) {
        if (row === rowIndex && column === columnIndex) {
          continue;
        }
        neighbors.push(r[columnIndex]);
      }
    }

    return neighbors;
  }
}
