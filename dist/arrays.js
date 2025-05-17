import { Numbers } from "./numbers.js";
export class Arrays {
    static sequenceIntExclusive(start, end) {
        let arr = new Array();
        for (let x = start; x < end; x++) {
            arr.push(x);
        }
        return arr;
    }
    static sequenceIntInclusive(start, end) {
        let arr = new Array();
        for (let x = start; x <= end; x++) {
            arr.push(x);
        }
        return arr;
    }
    static sample(a) {
        return a[Math.floor(Math.random() * a.length)];
    }
    static getRandomlySeeded(length, min, max) {
        const array = [];
        for (let i = 0; i < length; i++) {
            const num = Numbers.getRandomInt(min, max);
            array.push(num);
        }
        return array;
    }
    static getSeeded(length, seedValue) {
        const array = [];
        for (let i = 0; i < length; i++) {
            array.push(seedValue);
        }
        return array;
    }
}
