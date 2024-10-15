export function findMax(arr) {return Math.max(...arr)}
export function reverseArray(arr) {return arr.reverse()}

import multiply from "./mathModule.js";
import { toUpperCase } from "./stringModule.js";

export function findMaxMultiplyAndLog(arr, b){
    const result = multiply((Math.max(...arr)), b);
    console.log(toUpperCase(result.toString())); 
}