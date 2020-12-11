export class Calculator {
    divide(x: number, y: number) {
        if(y == 0) throw new Error("Dividend cannot be zero")

        return x / y;
    }
}

console.log("Hello Acklen")