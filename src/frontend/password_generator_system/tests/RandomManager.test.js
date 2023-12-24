import { describe, expect, test } from '@jest/globals';
import RandomManager from '../RandomManager.js';

describe('RandomManager module', () => {
    test('RandomManager.getRandomLower', () => {
        const lowerLetterRegex = /[a-z]/;
        expect(RandomManager.getRandomLower()).toMatch(lowerLetterRegex);
    });
    test('RandomManager.getRandomUpper', () => {
        const upperLetterRegex = /[A-Z]/;
        expect(RandomManager.getRandomUpper()).toMatch(upperLetterRegex);
    });
    test('RandomManager.getRandomUpper', () => {
        const number = RandomManager.getRandomNumber();
        expect(Number.isInteger(number)).toBeTruthy();
        expect(number >= 0).toBeTruthy();
        expect(number <= 9).toBeTruthy();
    });
    test('RandomManager.getRandomSymbol', () => {
        const symbolRegex = '!@#$%^&*(){}[]=<>/,.';
        expect(symbolRegex.includes(RandomManager.getRandomSymbol())).toBeTruthy();
    });
});
