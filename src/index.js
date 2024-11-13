import Calculator from './components/calculator';
import { setupThemeToggle } from './components/themetoggle'; 
import './styles.css';

const calculator = new Calculator();

const app = document.createElement('div');
app.className = 'calculator';
document.body.appendChild(app);

const display = document.createElement('div');
display.className = 'display';
app.appendChild(display);

const buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';
app.appendChild(buttonContainer);

const themeToggleButton = document.createElement('button');
themeToggleButton.textContent = 'Сменить тему';
themeToggleButton.className = 'theme-toggle';
app.appendChild(themeToggleButton);

const buttons = [
    'C', '+/-', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '+',
    '1', '2', '3', '-',
    '0', '=' 
];

buttons.forEach(button => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = button;

    if (['+', '-', '*', '/', '+/-', '%'].includes(button)) {
        buttonElement.classList.add('operation');
    } else if (button === 'C') {
        buttonElement.classList.add('clear');
    } else if (button === '+/-') {
        buttonElement.classList.add('toggle-sign');
    } else if (button === '%') {
        buttonElement.classList.add('percent');
    } else if (button === '0') {
        buttonElement.classList.add('zero'); 
    } else if (button === '=') {
        buttonElement.classList.add('equal'); 
        buttonElement.classList.add('operation'); 
    } else {
        buttonElement.classList.add('number');
    }

    buttonElement.addEventListener('click', () => handleButtonClick(button));
    buttonContainer.appendChild(buttonElement); 
});

setupThemeToggle(themeToggleButton); 

function handleButtonClick(button) {
    if (button === 'C') {
        calculator.clear();
    } else if (button === '=') {
        calculator.compute();
    } else if (button === '+/-') {
        calculator.toggleSign();
    } else if (button === '%') {
        calculator.percent(); 
    } else {
        if (['+', '-', '*', '/'].includes(button)) {
            calculator.chooseOperation(button);
        } else {
            calculator.appendNumber(button);
        }
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = calculator.getDisplay(); 
}

updateDisplay();
