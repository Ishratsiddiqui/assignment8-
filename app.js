alert("wellcome to assignment-8");


//assignment-8 FUNCTION//
//question 1. Write a function that displays current date & time in your
// browser.//
  
//    function myFun(){
//     x = document.getElementById("dttime").innerHTML = Date();
//    }

// question 2. Write a function that takes first & last name and then it
// greets the user using his full name.


// function greethUser(fristName, lastName){
//    var fuulName = fristName + " " + lastName;
//    alert("Hello, " + fuulName + "");
// }
//  greethUser("Ishrat", "Siddiqui" );


// question 3 Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

//  function addTwoNumbers() {
      
//       let num1 = parseFloat(prompt("Enter first number:"));
//       let num2 = parseFloat(prompt("Enter second number:"));

//       if (isNaN(num1) || isNaN(num2)) {
//         alert("Please enter valid numbers!");
//         return;
//       }

//       let sum = num1 + num2;
//       return sum;
//     }

//       let result = addTwoNumbers();
//     if (result !== undefined) {
//       alert("The sum is: " + result);
//     }

//  question 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

//  var num1 = prompt("please enter 1st number");
//  var num2 = prompt("plaese enter 2nd number ");
//  var opr = prompt("plaese select among +,-,x,/");
//   switch(opr)
//   {
//     // if(opr == "+")
//     case "+":
//         var res = parseFloat(num1) + parseFloat(num2);
//       document.write(`${num1} + ${num2} = ${res}`);
//         break;
//   // if(opr == "-")
//         case "-":
//         var res = parseFloat(num1) - parseFloat(num2);
//      document.write(`${num1} + ${num2} = ${res}`);
//         break;
//   // if(opr == "x")
//         case "x":
//         var res = parseFloat(num1) * parseFloat(num2);
//      document.write(`${num1} + ${num2} = ${res}`);
//         break;
// // if(opr == "/")
//         case "/":
//         var res = parseFloat(num1) / parseFloat(num2);
//         document.write(`${num1} + ${num2} = ${res}`);
//         break;
//         default:
//             document.write('Invalid operator');
// }

//  question 5. Write a function that squares its argument.

//  function square(num) {
//   return num * num;
//  }
//  console.log(square(5)); // Output: 25

// question 6. Write a function that computes factorial of a number.

 
// function factorial(n) {
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers.";
//     }

//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
//  console.log(factorial(5));  
// console.log(factorial(0));  
// console.log(factorial(-3)); 

// question 7. Write a function that take start and end number as inputs 
// & display counting in your browser.

 
//  function displayCounting(start, end) {
      
//       const div = document.querySelector('body div');
//       div.innerHTML = ''; 
//       if (isNaN(start) || isNaN(end)) {
//         div.innerHTML = 'Please enter valid numbers.';
//         return;
//       }

//       if (start > end) {
//         div.innerHTML = 'Start number should be less than or equal to end number.';
//         return;
//       }

//       for (let i = start; i <= end; i++) {
//         const p = document.createElement('p');
//         p.textContent = i;
//         div.appendChild(p);
//       }
//     }

//    displayCounting(5, 15); 

// question 8. Write a nested function that computes hypotenuse of a 
// right angle triangle.  
// Hypotenuse2 = Base2 + Perpendicular2

// function startCalculation() {
//       function getInputs() {
//         const base = parseFloat(prompt("Enter Base:"));
//         const perpendicular = parseFloat(prompt("Enter Perpendicular:"));

        
//         function calculateHypotenuseSquared(b, p) {
//           return b * b + p * p; // Hypotenuse² = Base² + Perpendicular²
//         }

//         const hypotenuseSquared = calculateHypotenuseSquared(base, perpendicular);
//         alert("Hypotenuse² = " + hypotenuseSquared);
//       }

//       getInputs();
//     }


// question 9. Write a function that calculates the area of a rectangle. 
// A = width * height 
// Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables

// function calculateRectangleAreaValue( width, height){
//   var A = width * height;
//   return A;

// }
// console.log(calculateRectangleAreaValue(5, 10));


// question 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?   
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam. 

// function isPalindrome(str) {
//   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   const reversedStr = cleanedStr.split('').reverse().join('');
//   return cleanedStr === reversedStr;
// }
//  console.log(isPalindrome("A man, a plan, a canal, Panama")); 


//---------10 answer
//  function checkPalindrome() {
//       function isPalindrome(str) {
//         const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//         const reversedStr = cleanedStr.split('').reverse().join('');
//         return cleanedStr === reversedStr;
//       }

//       const userInput = prompt("Enter a word or phrase to check if it's a palindrome:");
//       if (userInput === null || userInput.trim() === "") {
//         alert("You didn't enter anything.");
//       } else {
//         const result = isPalindrome(userInput);
//         alert(`"${userInput}" is ${result ? '' : 'not '}a palindrome.`);
//         console.log(`Checked: "${userInput}" => ${result}`);
//       }
//     }

//  question 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  
// EXPECTED OUTPUT : 'The Quick Brown Fox'

//   function capitalizeWords(str){
//   var words = str.split( ' ');
//   for (var i = 0; i < words.lenght; i++){
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//   }
//   return words.join( ' ' );
//   }
//   var exampleString = 'the quick brown fox';
//   var expectedOutput = capitalizeWords(exampleString);
//   console.log(expectedOutput);

// question 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string.  
// EXAMPLE STRING : 'Web Development Tutorial'  
// EXPECTED OUTPUT : 'Development'


function findLongestWord(str) {
  const words = str.split(' '); 
  var longestWord = '';
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    const currentWord = words[i];
    if (currentWord.length > maxLength) {
      maxLength = currentWord.length;
      longestWord = currentWord;
    }
  }

  return longestWord;
}

const exampleString = 'web Development Tutorial';
const expectedOutput = findLongestWord(exampleString);
console.log(expectedOutput); 


// question 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 

//  occurrences of the specified letter within the string.  
// Sample arguments : 'JSResourceS.com', 'o' 

//  function countLetterOccurrences(str, letter) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

//  const SampleString = ' JSResources.com';
//  const SampleLetter = 'o';
//   const occurrences = countLetterOccurrences(SampleString, SampleLetter);
//   console.log(`The letter '${SampleLetter}' appears ${occurrences} times in '${SampleString}'.`);


//   question 14. The Geometrizer 
// Create 2 functions that calculate properties of a circle, using 
// the definitions here. 
// Create a function called calcCircumference: 
// • Pass the radius to the function. 
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN". 
// Create a function called calcArea: 
// • Pass the radius to the function. 
// • Calculate the area based on the radius, and output "The area 
// is NN". 
// Circumference of circle    =     2πr 
// Area of circle       
// =     
// πr2
//no answer