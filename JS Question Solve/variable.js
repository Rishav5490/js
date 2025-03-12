 // ! variable Declaration
// var a = 10;    // Function-scoped
// let b = 20;    // Block-scoped
// const c = 30;  // Immutable
// console.log(a, b, c);

// ! Swap Two Variable Without a third Variable

// let x = 5, y= 10;
// x= x+y;
// y=x-y;
// x=x-y;
// console.log(x,y);

// ! Check if a Number is Odd or Even

// function isEvenOrOdd(num){
//     return num%2 ===0 ? "Even":"Odd";
// }
// console.log(isEvenOrOdd(9)); //odd
// console.log(isEvenOrOdd(10)); //even

//! Reverse a String Without reverse()

// function reverseString(str) {
//     let reversed = "";
//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed; 
// }
//     console.log(reverseString("Hellow")); //wolleH
    
//! Find the largest number in an array
// function findLargest(arr){
//     let largest = arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(findLargest([1,2,3,4,5,6,7,8,9,10,10,111,111,111])); //10
// //----------------OR------------------
//   function largest(arr){
//     return Math.max(...arr);
//   }
//     console.log(largest([1,2,3,4,5,6,7,8,9,10,10,112,121,])); //121

// //! Find the Smallest Number in an Array
// function findSmallest(arr){
//     let smallest = arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]<smallest){
//             smallest = arr[i];
//         }
//     }
//     return smallest;
// }
// console.log(findSmallest([1,2,3,4,5,6,7,8,9,10,10,111,111,111])); //1
// //----------------OR------------------
//   function smallest(arr){
//     return Math.min(...arr);
//   }
//     console.log(smallest([0,2,3,4,5,6,7,8,9,10,10,112,121,])); //0

//!Remove Duplicates from an Array
// function removeDuplicates(arr){
//     return[...new Set(arr)];
// }
// console.log(removeDuplicates([1,2,3,4,5,6,7,8,9,10,10,111,111,111])); //[1,2,3,4,5,6,7,8,9,10,111]

//!Remove Duplicates from an string 
// function Duplicate(str){
//     return [...new Set(str)];

// }
// console.log(Duplicate("Hellow", )); //["H", "e", "l", "o", "w"]
// console.log(Duplicate("Rishavv")); //["R", "i", "s", "h", "a", "v"]
