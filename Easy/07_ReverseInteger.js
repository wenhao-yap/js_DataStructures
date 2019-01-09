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
// const reverse = (x) => {
//   //for single digits
//   if(-10<x && x<10) return x;
  
//   let numberArr = Math.abs(x).toString().split('').reverse();
//   if (numberArr[0] === '0') numberArr.shift();
//   let reverseNum = numberArr.join('');
//   reverseNum = (Math.sign(x)<0) ? (parseInt(reverseNum)*-1) : (parseInt(reverseNum));

//   //if reverse integer is outside of 32-bit signed range
//   if(reverseNum < Math.pow(-2,31) || reverseNum > Math.pow(2,31) - 1) return 0;  

//   return reverseNum;
// };

/*--------------------------- 
  Approach 2: Using math
---------------------------*/
const reverse = (x) => {
  let rev = 0;
  let limit = {
    min: Math.pow(-2,31),
    max: Math.pow(2,31) - 1
  }
  while(x!=0){
    //remove last digit
    let pop = x%10;
    //divide by 10 to check against limit
    x /= 10;
  }
  return rev;
};