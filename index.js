import chalk from 'chalk';
import { formatLongDate, formatShortDate, formatRelativeDate } from './utils/formatDate.js';

// Sample ISO dates (Test with 5 different dates)
const dates = [
    "1990-09-25T10:00:00Z",
    "2007-05-27T14:30:00Z",
    "2021-04-21T08:15:00Z",
    "2002-06-03T19:45:00Z",
    "1983-01-20T03:00:00Z"
];

console.log(chalk.cyan.bgBlack(' Long dates: '));
dates.forEach(d => console.log(formatLongDate(d)));

console.log('\n' + chalk.cyan.bgBlack(' Short dates: '));
dates.forEach(d => console.log(formatShortDate(d)));

console.log('\n' + chalk.cyan.bgBlack(' Relative dates: '));
dates.forEach(d => console.log(chalk.yellow(formatRelativeDate(d))));