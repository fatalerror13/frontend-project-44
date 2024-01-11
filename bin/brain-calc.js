#!/usr/bin/env node

import readline from 'readline-sync';
import getRandomInt from '../utils/getRandomInt.js';
import { ROUNDS } from '../utils/constants.js';
import getOperationResult from '../utils/getOperationResult.js';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let counter = 1;

  while (counter <= ROUNDS) {
    const firstNumber = getRandomInt(1, 10);
    const secondNumber = getRandomInt(1, 10);
    const operationIndex = getRandomInt(0, 2);
    const operations = ['+', '-', '*'];
    const operation = operations[operationIndex];

    console.log('What is the result of the expression?');
    console.log('Question: ', `${firstNumber} ${operation} ${secondNumber}`);
    const answer = readline.question('Your answer: : ');
    const correctAnswer = getOperationResult(firstNumber, secondNumber, operation);
    const condition = Number.parseInt(answer, 10) === correctAnswer;

    if (condition) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`"${answer}"' is wrong answer ;(. Correct answer was "${correctAnswer}".!`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

brainCalc();
