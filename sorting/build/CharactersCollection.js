"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const charsArray = this.data.split('');
        const leftHand = charsArray[leftIndex];
        charsArray[leftIndex] = charsArray[rightIndex];
        charsArray[rightIndex] = leftHand;
        this.data = charsArray.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
