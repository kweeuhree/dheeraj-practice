// 12. Write a program to display factorial number using 
// recursive function. 

//declare a function displayFactorialNumber that takes one parameter num
// function displayFactorialNumber(num) {
//     // if number is less than zero - reject it
//     if(num < 0) {
//         return -1;
//     }

//     // if number equals zero return 1
//     else if(num === 0) {
//         return 1;
//     }

//     // else call displayFactorialNumber with num - 1
//     else {
//         return (num * displayFactorialNumber(num - 1));
//     }
// }

// console.log(`Factor of 0 is: ${displayFactorialNumber(0)}`);
// console.log(`Factor of 5 is: ${displayFactorialNumber(5)}`);
// console.log(`Factor of 10 is: ${displayFactorialNumber(10)}`);
// console.log(`Factor of 20 is: ${displayFactorialNumber(20)}`);

// --------------------------------------------------------------------------------------//

// 13. Write a program to find cube of the given number using function
// function cubeOfNum(num) {
//      return num**3;
// }
// console.log(`1 in cube is: ${cubeOfNum(1)}`);
// console.log(`3 in cube is: ${cubeOfNum(3)}`);
// console.log(`4 in cube is: ${cubeOfNum(4)}`);

// --------------------------------------------------------------------------------------//

// 14. Write a program to convert Celsius to Fahrenheit using function
// function convertCelsiusToFahrenheit(temp) {
//     let result;

//     const conversionFormula = (temp * 9/5) + 32; // (0°C × 9/5) + 32
//     result = `Given temperature is Celsius (${temp}) equals ${conversionFormula} in Fahrenheit.`
//     return result;
// }

// console.log(convertCelsiusToFahrenheit(5));
// console.log(convertCelsiusToFahrenheit(-10));
// console.log(convertCelsiusToFahrenheit(25));

// --------------------------------------------------------------------------------------//

// 15. Write a JavaScript program that accept two integers and display the larger using if and else if
// function findLargerIntOfTwoInts(num1, num2) {
//     if(num1===num2) {
//         console.log(`Numbers and even: ${num1}`)
//     } else if(num1 > num2) {
//         console.log(`${num1} is larger than ${num2}`);
//     } else if (num2 > num1) {
//         console.log(`${num2} is larger than ${num1}`)
//     }
// }
// findLargerIntOfTwoInts(1, 9);
// findLargerIntOfTwoInts(90, 90);
// findLargerIntOfTwoInts(200, 2);

// --------------------------------------------------------------------------------------//

// 16. Write a program to find Armstrong number of 3 digits using for loop

//Armstrong number of 3 digits is a number that is equal to the sum of three
// its digits that have been risen to the power of the number of the digits, 
// which is going to be 3 in this case.

// initialize variables to store number, sum of numbers, and digit

// let num, sum, digit;

// // loop through all three digit numbers
// for(num = 100; num <= 999; num++) {

//     sum = 0;
//     // initialize a temporary variable
//     let tempNum = num;

//    while (tempNum > 0) {
//     digit = tempNum%10; // extract the last digit
//     sum += digit ** 3; // add cubed digit
//     tempNum = Math.floor(tempNum/10) //remove last digit by rounding down decimal part
//    }

//    // check if the number is an Armstrong number
//    if (sum === num) {
//     console.log(`${num} is an Armstrong number.`)
//    }
// }

// --------------------------------------------------------------------------------------//

// 18. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers using while loop

// After exploring, I have found out that there are three ways to find the gcd:
// - recursive (elegant, but costly);
// - iterative (more efficient than recursive);
// - binary (most efficient, requiring up to 60% less bit operations.).

//This is the recursive Euclidean Algorithm:
   // Function to return gcd of a and b 
// function gcdRecursive(a, b) { 
//     if (a == 0) 
//         return b; 
//     return gcdRecursive(b % a, a); 
// } 
// console.log("Gcd of given numbers is "+ gcdRecursive(34, 17));

// This is iterative Euclidean Algorithm: 
function gcdIterative(a, b) {
    while (a !== 0) {
        const temp = a;
        console.log(`${a} is a before calculating remainder`);
        console.log(`${b} is b before calculating remainder`);
        a = b % a;
        console.log(`${a} is a after calculating remainder`);
        b = temp;
        console.log(`${b} is b after assigning temp to b`);
    }
    return b;
}
console.log("Gcd of given numbers is "+ gcdIterative(34, 17));

// This is the Binary Euclidean Algorithm implementation and I don't understand it just yet.

// function gcdBinaryIterative( a,  b)
// {
//     // GCD(0, b) == b; GCD(a, 0) == a, GCD(0, 0) == 0 
//     if (a == 0)
//         return b;
//     if (b == 0)
//         return a;
 
//     // Finding K, where K is the greatest power of 2 that divides both a and b. 
//     let k;
//     for (k = 0; ((a | b) & 1) == 0; ++k) 
//     {
//         a >>= 1;
//         b >>= 1;
//     }
 
//     // Dividing a by 2 until a becomes odd 
//     while ((a & 1) == 0)
//         a >>= 1;
 
//     // From here on, 'a' is always odd. 
//     do
//     {
//         // If b is even, remove all factor of 2 in b */
//         while ((b & 1) == 0)
//             b >>= 1;
 
//         // Now a and b are both odd. Swap if necessary so a <= b,
//         // then set b = b - a (which is even).
//         if (a > b){
//         let t = a;
//         a = b;
//         b = t;
//         }
 
//         b = (b - a);
//     }while (b != 0);
 
//     /* restore common factors of 2 */
//     return a << k;
// }

// console.log("Gcd of given numbers is "+ gcdBinaryIterative(34, 17));

