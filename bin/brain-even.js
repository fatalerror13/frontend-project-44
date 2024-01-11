#!/usr/bin/env node

import readline from 'readline-sync';
import getRandomInt from '../utils/getRandomInt.js';
import { ROUNDS } from '../utils/constants.js';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let counter = 1;

  while (counter <= ROUNDS) {
    const number = getRandomInt();
    const isEven = number % 2 === 0;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log('Question: ', number);
    const answer = readline.question('Your answer: : ');
    const correctAnswer = answer === 'yes' ? 'no' : 'yes';
    const condition = (isEven && answer === 'yes') || (!isEven && answer === 'no');

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

brainEven();
