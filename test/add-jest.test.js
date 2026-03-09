import { add } from '../src/chest/testing/testing.js';
import { test, expect } from '@jest/globals';

test('throw when inputs are not numbers', async () => {

    expect(() => add('5', '5')).toThrowError(
        Error('inputs must be numbers')
    );

    expect(() => add(5, '5')).toThrowError(
        Error('inputs must be numbers')
    );

    expect(() => add('5', 5)).toThrowError(
        Error('inputs must be numbers')
    );

    expect(() => add({}, null)).toThrowError(
        Error('inputs must be numbers')
    );

});


test('adds two numbers', async () => {

    expect(add(5,5)).toStrictEqual(10);
    expect(add(-5, 5)).toStrictEqual(0);

})