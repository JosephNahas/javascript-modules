import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
import { addAndLogUpper } from './mathModule.js';
import { findMaxMultiplyAndLog } from './arrayModule.js';

console.log('Add: ', add(6, 11));
console.log('Uppercase: ', toUpperCase('modules are awesome'));
console.log('Lowercase: ', toLowerCase('NOT AS AWESOME AS ME'));
console.log('Multiply: ', multiply(2,8));

console.log('Max: ', findMax([2,4,6,8,10]));
console.log('Reversed: ', reverseArray([4,8,15]));

addAndLogUpper(5, 11);  

findMaxMultiplyAndLog([3,5,7,9,15], 2);
