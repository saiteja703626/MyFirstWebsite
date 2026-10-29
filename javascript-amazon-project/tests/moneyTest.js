import { formatCurrency } from '../scripts/utils/money.js';


console.log('Test Suite: Format currency');

console.log('converts cents to dollars');
if (formatCurrency(2098) === '20.98') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('works with 0');
if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('roundsup to nearest set');
if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed'); 
}