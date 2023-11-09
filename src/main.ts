import './style.css' //Imports my style.css file, so that i can style my index.html file.

console.log("Code is running") // To test if the code is running, adn if the console.log is working.

interface CalculatorNumbers{ //Interface that tells that the data should be read as a number, not a string.
  numA: number;
  numB: number;
}

interface Calculator { //Interface that makes sure that the data inserted is read as a number, not a string. So that we can calculate on the numbers.
  calcAdd(numbers: CalculatorNumbers): number;
  calcSub(numbers: CalculatorNumbers): number;
  calcMul(numbers: CalculatorNumbers): number;
  calcDiv(numbers: CalculatorNumbers): number;
}

export const calculator: Calculator = { //Exports the fuctions to be used in my index.html.
  calcAdd(numbers: CalculatorNumbers): number {
    return numbers.numA + numbers.numB;
  },
  calcSub(numbers: CalculatorNumbers): number {
    return numbers.numA - numbers.numB;
  },
  calcMul(numbers: CalculatorNumbers): number {
    return numbers.numA * numbers.numB;
  },
  calcDiv(numbers: CalculatorNumbers): number {
    return numbers.numA / numbers.numB;
  }
}


const numAInput = document.getElementById('numA') as HTMLInputElement; // Takes whatever the user put in the input fields and adds it to a variable, so that it can be used in the functions to calculate on.
const numBInput = document.getElementById('numB') as HTMLInputElement;
const addButton = document.getElementById('add') as HTMLButtonElement;
const subButton = document.getElementById('sub') as HTMLButtonElement;
const mulButton = document.getElementById('mul') as HTMLButtonElement;
const divButton = document.getElementById('div') as HTMLButtonElement;
const result = document.getElementById("result") as HTMLOutputElement


addButton.addEventListener('click', () => { //Adds listening to the buttons aka the event listeners, so that when the user clicks on the button, the function will run.
  const numA = Number(numAInput.value); //Takes the value of the input field (numA) and adds it to a variable.
  const numB = Number(numBInput.value);
  result.innerHTML = String(calculator.calcAdd({ numA, numB })); //Uses the function to calculate a result of the two numbers (numA and numB), and in this case it adds theem together.
});

subButton.addEventListener('click', () => {
  const numA = Number(numAInput.value);
  const numB = Number(numBInput.value);
  result.innerHTML = String(calculator.calcSub({ numA, numB }));
});

mulButton.addEventListener('click', () => {
  const numA = Number(numAInput.value);
  const numB = Number(numBInput.value);
  result.innerHTML = String(calculator.calcMul({ numA, numB }));
});

divButton.addEventListener('click', () => {
  const numA = Number(numAInput.value);
  const numB = Number(numBInput.value);
  result.innerHTML = String(calculator.calcDiv({ numA, numB }));
});