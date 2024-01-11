import readline from 'readline-sync';
import { ROUNDS } from './utils/constants.js';
import getRandomInt from './utils/getRandomInt.js';
import getOperationResult from './utils/getOperationResult.js';

export const game = {
  calc: () => {
    const firstNumber = getRandomInt(1, 10);
    const secondNumber = getRandomInt(1, 10);
    const operationIndex = getRandomInt(0, 2);
    const operations = ['+', '-', '*'];
    const operation = operations[operationIndex];
    const correctAnswer = getOperationResult(firstNumber, secondNumber, operation);
    const condition = (answer) => Number.parseInt(answer, 10) === correctAnswer;

    return {
      questionText: 'What is the result of the expression?',
      questionParam: `${firstNumber} ${operation} ${secondNumber}`,
      correctAnswer,
      condition,
    };
  },

  even: () => {
    const number = getRandomInt();
    const isEven = number % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    const condition = (answer) => answer === correctAnswer;

    return {
      questionText: 'Answer "yes" if the number is even, otherwise answer "no".',
      questionParam: number,
      correctAnswer,
      condition,
    };
  },

  gcd: () => {
    const firstNumber = getRandomInt(1, 10);
    const secondNumber = getRandomInt(1, 10);

    let result = 1;

    for (let i = secondNumber; i > 0; i -= 1) {
      if (secondNumber % i === 0 && firstNumber % i === 0) {
        result = i;
        break;
      }
    }
    const condition = (answer) => Number.parseInt(answer, 10) === result;

    return {
      questionText: 'Find the greatest common divisor of given numbers.',
      questionParam: `${firstNumber} ${secondNumber}`,
      correctAnswer: result,
      condition,
    };
  },
};

export const makeGame = (type) => {
  console.log('Welcome to the Brain Games!');
  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let counter = 1;

  while (counter <= ROUNDS) {
    const {
      questionText, questionParam, condition, correctAnswer,
    } = game[type]();

    console.log(questionText);
    console.log('Question: ', `${questionParam}`);
    const answer = readline.question('Your answer: : ');

    if (condition(answer)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
