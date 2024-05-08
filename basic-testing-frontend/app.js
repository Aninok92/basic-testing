import { getUserInput } from './userInput.js';
import { getResultText } from "./resultText.js";
import { calculateResult } from './src/math.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();
  
  const numberInputs = getUserInput(form)

  const result = calculateResult(numberInputs)

  output.textContent = getResultText(result);
}

form.addEventListener('submit', formSubmitHandler);
