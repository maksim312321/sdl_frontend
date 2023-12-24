export default class RandomManager {
    static getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    static getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    static getRandomNumber() {
        return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    static getRandomSymbol() {
        const symbols = '!@#$%^&*(){}[]=<>/,.';
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
}
