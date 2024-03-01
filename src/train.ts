console.log("Hello World");

/* Project Standards:
  - Logging standards 
  - Naming standards:
      function, method, variable => CAMEL     
      class => PASCAL             MemberService        
      folder => KEBAB             
      css => SNAKE                button_style         
  - Error handling
  
*/

// *** I - TASK ***
// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib,
//  faqat positive qiymatlarni olib string holatda return qilsin.
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

const array = [1, -4, 2];
const posArr = array.filter(getPositive);

function getPositive(array: number) {
    return array > -1;
}

const joinStr = posArr.join('');
console.log(joinStr);


// // *** H - TASK ***
// // Shunday function tuzing, u string qabul qilib teskari qilib return qilsin
// // MASALAN: gerReverse("hello") return qiladi "olleh"
// function getReverse(text: string) {

//     const Text = text.split('').reverse().join('');
//     return Text;
// }
    
// console.log(getReverse("hello"));

// // *** G - TASK ***
// // Shunday function tuzingki unga integerlardan iborat array pass 
// // bolsin va function bizga osha arrayning eng katta qiymatiga tegishli 
// // birinchi indexni qaytarsin.
// // MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// const array = [5, 21, 12, 21, 8];

// const max = Math.max(...array);
// const min = Math.min(...array); // anyway

// const indexMax = array.indexOf(max);
// const indexMin = array.indexOf(min);

// console.log("max.index:", indexMax);
// console.log("min.index:", indexMin);