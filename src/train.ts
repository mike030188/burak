console.log("Hello World");

/* Project Standards:
  - Logging standards 
  - Naming standards:
      function, method, variable => CAMEL     
      class => PASCAL             MemberService        
      folder, file => KEBAB             
      css => SNAKE                button_style         
  - Error handling
  
*/

/*
  Traditinal Api
  Rest Api
  GraphQL Api
  ...
*/


// *** I - TASK ***
// Shunday function tuzing, unga string argument pass bolsin.
// Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"
 function getDigits(str: string) {
      
  const digitMatches = str.match(/\d/g);  // Regex syntax in JavaScript "/\d" matches a decimal digit character (i.e. 0-9). "g" - globally

  // Berilgan string ichidan raqamlar bor yoqligini check qilamiz
  if (digitMatches) {
    //  
    return digitMatches.join('');
  } else {
    // Agar raqam topolmasang, return 0
    return 0;
  }
}
    
  const str = "m14i1t";
  const onlyNumbers = getDigits(str);
  console.log(`natija: ${onlyNumbers}`);



/**** 2nd Challenge task *****/
// // SEZAR SECRET MESSAGING
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// // console.log(alphabet.length);
// let code: number = 2;
// // let code: number = 5;

// function shiftLetter(letter: string, shift: number) {
//   const index: number = alphabet.indexOf(letter.toLowerCase());
//   if (index === -1) {
//     // bu yerda agar "character" - alphabetga tegishli bolmasa uni prosto tawab ket...
//     return letter; 
//   }
//   // bu yerda yangi indexni aniqlaymiz
//   const newIndex: number = (index + shift + alphabet.length) % alphabet.length;
//   return alphabet[newIndex];

//  }

// function decodeMessage(message: string, secret: any) {
//  return message.split("").map((char) => shiftLetter(char.toLowerCase(), secret)).join("");

// }

// const message = "hello, how are you doing, my general?";
// // const message = "yes, hello, how are you doing, my general?";
// const secret_msg = decodeMessage(message, code);
// console.log("Secret => ", secret_msg);

// setTimeout( () => {
//   code *= -1;
//   const message_encoded = decodeMessage(secret_msg, code);
//   console.log("Original => ", message_encoded);
// }, 5000);



// // *** I-0 - TASK ***
// // shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib,
// //  faqat positive qiymatlarni olib string holatda return qilsin.
// // MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// const array = [1, -4, 2];
// const posArr = array.filter(getPositive);

// function getPositive(array: number) {
//     return array > -1;
// }

// const joinStr = posArr.join('');
// console.log(joinStr);


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