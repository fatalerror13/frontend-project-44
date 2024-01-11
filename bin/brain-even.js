#!/usr/bin/env node

import readline from 'readline-sync';
import getRandomInt from '../utils/getRandomInt.js';

const TRIES = 3;

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let counter = 1;

  while (counter <= TRIES) {
    const number = getRandomInt();
    const isEven = number % 2 === 0;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log('Question: ', number);
    const answer = readline.question('Your answer: : ');

    if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`"${answer}"' is wrong answer ;(. Correct answer was "${answer === 'yes' ? 'no' : 'yes'}".!`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  if (counter === TRIES) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainEven();
