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


// 13. Write a program to find cube of the given number using function
function cubeOfNum(num) {
     return num**3;
}
console.log(`1 in cube is: ${cubeOfNum(1)}`);
console.log(`3 in cube is: ${cubeOfNum(3)}`);
console.log(`4 in cube is: ${cubeOfNum(4)}`);