import { getUserInput } from './userInput.js';
import { getResultText } from "./resultText.js";
import { getResult } from './result.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();
  
  const numberInputs = getUserInput(form)

  const result = getResult(numberInputs)

  output.textContent = getResultText(result);
}

form.addEventListener('submit', formSubmitHandler);
