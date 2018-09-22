'use strict';

export class TripleStack {
  constructor() {
    this._array = [];
    this._lengths = [0, 0, 0];
  }

  _getLength(stack) {
    return this._lengths[stack - 1];
  }

  push(stack, val) {
    let index = stack * 3 * (this._getLength(stack) + 1);
    this._array[index] = val;
    this._lengths[stack - 1]++;
  }

  pop(stack) {
    let index = stack * 3 * (this._getLength(stack));
    this._lengths[stack - 1]--;
    return this._array[index];
  }

  peek(stack) {
    let index = stack * 3 * (this._getLength(stack));
    return this._array[index];

  }

  isEmpty(stack) {
    return this._getLength(stack) === 0;
  }
}