console.log("Hello World");

// *** G - TASK ***
// Shunday function tuzingki unga integerlardan iborat array pass 
// bolsin va function bizga osha arrayning eng katta qiymatiga tegishli 
// birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

const array = [5, 21, 12, 21, 8];

const max = Math.max(...array);
const min = Math.min(...array); // anyway

const indexMax = array.indexOf(max);
const indexMin = array.indexOf(min);

console.log("max.index:", indexMax);
console.log("min.index:", indexMin);