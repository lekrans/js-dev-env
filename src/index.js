import './index.css';
import numeral from 'numeral';
import chalk from 'chalk';

const courseValue = numeral(1000).format('$0,0.00');
console.log(chalk.red(`I would pay ${courseValue} for this awesome course!`)); // eslint-disable-line no-console
