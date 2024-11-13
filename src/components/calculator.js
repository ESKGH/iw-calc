
class Calculator {
    constructor() {
        this.currentInput = ''; 
        this.previousInput = ''; 
        this.operation = null; 
    }

    appendNumber(number) {
        this.currentInput += number;
    }

    chooseOperation(operation) {
        if (this.currentInput === '') return; 
        if (this.previousInput !== '') {
            this.compute(); 
        }
        this.operation = operation;
        this.previousInput = this.currentInput; 
        this.currentInput = ''; 
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);
        if (isNaN(prev) || isNaN(current)) return; 

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentInput = computation; 
        this.operation = null;
        this.previousInput = ''; 
    }

    clear() {
        this.currentInput = '';
        this.previousInput = '';
        this.operation = null;
    }

    toggleSign() {
        if (this.currentInput !== '') {
            this.currentInput = (parseFloat(this.currentInput) * -1).toString(); 
        }
    }

    percent() {
        if (this.currentInput !== '') {
            this.currentInput = (parseFloat(this.currentInput) / 100).toString();
        }
    }

    getDisplay() {
        const prev = this.previousInput ? `${this.previousInput} ${this.operation}` : '';
        return `${prev} ${this.currentInput}`;
    }
}

export default Calculator;
