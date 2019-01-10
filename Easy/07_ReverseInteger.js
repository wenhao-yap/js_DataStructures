/*-----------------------------------------------------------------------------------------------------------------
7. Reverse Integer (Easy)
Given a 32-bit signed integer, reverse digits of an integer.
  Note: 
    Assume we are dealing with an environment which could only store integers within 
    the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, 
    assume that your function returns 0 when the reversed integer overflows.

Example 1: 
  Input: 123
  Output: 321
Example 2:
  Input: -123
  Output: -321
Example 3:
  Input: 120
  Output: 21
-----------------------------------------------------------------------------------------------------------------*/

/**
 * @param {number} x
 * @return {number}
 */

/*--------------------------- 
  Approach 1: Using stack or array
  Status: Success
		Runtime: 76 ms, faster than 56.13% of JavaScript online submissions for Reverse Integer.
---------------------------*/
const reverse = (x) => {
  //for single digits
  if(-10<x && x<10) return x;
  let rev = parseInt(Math.abs(x).toString().split('').reverse().join(''))*Math.sign(x);
  //if reverse integer is outside of 32-bit signed range
  if(rev < Math.pow(-2,31) || rev > Math.pow(2,31) - 1) return 0;  
  return rev;
};

/*--------------------------- 
  Approach 2: Using math
  Status: Success
		Runtime: 76 ms
---------------------------*/
// const reverse = (x) => {
//   let output = 0;
//   const limit = {
//     min: Math.pow(-2,31),
//     max: Math.pow(2,31) - 1
//   }
//   const sign = Math.sign(x);
//   x = Math.abs(x);
//   while(x!=0){
//     //pop operation
//     let pop = Math.floor(x%10);
//     x = Math.floor(x/10);
//     //push operation
//     output = output * 10 + pop;
//   }
//     //check against limit
//     if(output < limit.min || output > limit.max) return 0;
//   return output*sign;
// };

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1147483649));
