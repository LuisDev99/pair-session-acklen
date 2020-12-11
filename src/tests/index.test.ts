import { expect } from 'chai';
import { Calculator } from "../index"

describe('Test Calculator class', () => { 

    it('Should divide correctly', () => {         
        const calculator = new Calculator()

        const result = calculator.divide(10, 2)

        expect(result).to.equal(5);
    });

    it('Should fail on invalid parameter', () => {
        const calculator = new Calculator()

        const result = calculator.divide(10, 0)

        expect(result).to.equal(0);
    });
});

