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

/* API turlari:

  Traditinal Api (form POST) 
  Rest Api => frtEnd - BackEnd (data_JSON)
  GraphQL Api
  ...
*/

/** FrontEnd quriwning 2xil usuli: 
 
 * - Traditional FD  => BSSR (adminka) => EJS
 * - Modern FD       => SPA  (users`)  => REACT libr.
 
 * **/ 

/*
  Cookie ni hislatlari:
  
  - request join,
  - self destroy
*/


/** Validation:
 * Frontend validation
 * Backend validation
 * Database validation
 */

// *** S - TASK ***
// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin
// va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2
function missingNumber(arr: any, n: number) {
  let missingNumber = [];
  for (let i = 1; i <= n; i++) if (!arr.includes(i)) missingNumber.push(i);
  return missingNumber;
}
console.log(missingNumber([3, 0, 1], 3));



// // *** R - TASK ***
// // Shunday function yozing, u string parametrga ega bolsin.
// // String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// // MASALAN: calculate("1+3") return 4;

// function calculate(str: string) {
//   // '+' belgisi orqali stringni bo'lib alohida qilamiz
//   const parts = str.split('+');

//   // Har bir qiymatni raqamga keltirib, ularni yig'indisini hisoblaymiz
//   const sum = parts.reduce((acc, val) => acc + parseInt(val), 0);

//   // return parts;
//   return sum; 

// }

// console.log(calculate("1+3"));


// // *** Q - TASK ***
// // Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. 
// // Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// // MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") 
// // return true; hasProperty({name: "BMW", model: "M3"}, "year") return false
// function hasProperty(obj: any, str: string) {
//   return obj.hasOwnProperty(str);
// }

// console.log(hasProperty({name: "BMW", model: "M3"}, "model"));
// console.log(hasProperty({name: "BMW", model: "M3"}, "year"));



// // *** P - TASK ***
// // Shunday function yozing, u object qabul qilsin va
// // arrayni object arrayga otkazib arrayni qaytarsin.
// // MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray( obj: any) {
//   return Object.entries(obj) // Returns an array of key/values of the enumerable properties of an object
// }

// const natija = objectToArray( {a: 10, b: 20});
// console.log("natija:", natija);

// // *** O - TASK ***
// // Shunday function yozing, u har xil valuelardan iborat array qabul qilsin
// // va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// // MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(array: any[]): number {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//       sum += array[i];
//       // quyidagi mantiq ma'lum bir elementning son emasligini aniqlaydi.
//     } else if (typeof array[i] !== "string" && !isNaN(parseFloat(array[i]))) {
//       sum += parseFloat(array[i]);
//     }
//   }
//   return sum;
// }

// const array_list = [10, "10", {son: 10}, true, 35];
// const result = calculateSumOfNumbers(array_list);

// console.log(result);

 


// // *** N - TASK ***

// // Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham,
// // orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// // MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
// // *** A palindrome is a value that reads the same from backward or forward.

// function palindromCheck(str: string) {
//   let revText = str.split("").reverse().join("");

//   if(revText === str) {
//     return true
//   }  return false;
// }

// let str1 = "dad";
// let str2 = "son";

// console.log("natija1:", palindromCheck(str1));
// console.log("natija2:", palindromCheck(str2));




// // *** M - TASK ***
// // Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin
// // va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib,
// // hosil bolgan objectlarni array ichida qaytarsin.
// // MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(array: number[]){
//   let newArray = [];

//   for(let i = 0; i < array.length; i++) {
//    newArray.push({number: array[i], square: array[i]*array[i]});
//   }

//   return newArray;
// }

// console.log(getSquareNumbers([1,2,3]));

// // *** L - TASK ***
// // Shunday function yozing, u string qabul qilsin va string ichidagi 
// // hamma sozlarni chappasiga yozib va sozlar ketma-ketligini 
// // buzmasdan stringni qaytarsin.
// // MASALAN: reverseSentence("we like coding") return "ew ekil gnidoc";


// function reverseSentence(sentence: string) {

//   return sentence.split(' ').map(arrayWord => arrayWord.split('').reverse().join('')).join(' ');
  
// }

// const origSentence = "we like coding";
// const natija = reverseSentence(origSentence);

// console.log("natija:", natija);






// // *** K - TASK ***
// // Shunday function yozing, u string qabul qilsin va string ichidagi unli 
// // harflar sonini qaytarsin.
// // MASALAN: countVowels("string") return 1;

// function countVowels(str: string) {
//   let vowel_list = "aeiouAEIOU";
//   let vcount = 0;

//   for(let i=0; i < str.length; i++) {
//     if(vowel_list.indexOf(str[i]) !== -1) {
//       vcount += 1; 
//     }
//   }
//   return vcount;
// }
// const natija = countVowels("string");
// console.log("natija:", natija);

// // *** J - TASK ***
// // Shunday function yozing, u string qabul qilsin va string ichidagi eng
// // uzun sozni qaytarsin.
// // MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// function findLongestWord(text: string) {

//   const Text = text.split(" ");      // natija: [ 'I', 'come', 'from', 'Uzbekistan' ]
//   let longest = "";                  // empty string hosil qivolyapmiz

//   // for-loop ni iteration methodini iwga tuwiramiz
//   for (let i = 0; i < Text.length; i++) {

//     // agar "i"ning uzunligi longest text.ning uzunligidan katta bolsa "i"ni longestga tenglab olyapmiz 
//     if(Text[i].length > longest.length) {
//       longest = Text[i];
//     }
//   }
//   return longest;
// }

// console.log(findLongestWord("I come from Uzbekistan"));



// // *** I - TASK ***
// // Shunday function tuzing, unga string argument pass bolsin.
// // Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// // MASALAN: getDigits("m14i1t") return qiladi "141"
//  function getDigits(str: string) {
      
//   const digitMatches = str.match(/\d/g);  // Regex syntax in JavaScript "/\d" matches a decimal digit character (i.e. 0-9). "g" - globally

//   // Berilgan string ichidan raqamlar bor yoqligini check qilamiz
//   if (digitMatches) {
//     //  
//     return digitMatches.join('');
//   } else {
//     // Agar raqam topolmasang, return 0
//     return 0;
//   }
// }
    
//   const str = "m14i1t";
//   const onlyNumbers = getDigits(str);
//   console.log(`natija: ${onlyNumbers}`);



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