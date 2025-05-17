import { Numbers } from "./numbers.js";

export class Arrays {
  public static sequenceIntExclusive(start: number, end: number): number[] {
    let arr: number[] = new Array<number>();

    for (let x: number = start; x < end; x++) {
      arr.push(x);
    }

    return arr;
  }

  public static sequenceIntInclusive(start: number, end: number): number[] {
    let arr: number[] = new Array<number>();

    for (let x: number = start; x <= end; x++) {
      arr.push(x);
    }

    return arr;
  }

  //
  public static sample<T>(a: T[]): T | undefined {
    return a[Math.floor(Math.random() * a.length)];
  }

  public static getRandomlySeeded(
    length: number,
    min: number,
    max: number
  ): number[] {
    const array = [];

    for (let i = 0; i < length; i++) {
      const num = Numbers.getRandomInt(min, max);

      array.push(num);
    }

    return array;
  }

  public static getSeeded<T>(length: number, seedValue: T): T[] {
    const array: T[] = [];

    for (let i = 0; i < length; i++) {
      array.push(seedValue);
    }

    return array;
  }
}
