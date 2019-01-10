/*-----------------------------------------------------------------------------------------------------------------
9. Palindrome Number (Easy)
Determine whether an integer is a palindrome. 
An integer is a palindrome when it reads the same backward as forward.
Could you solve it without converting the integer to a string?

Example 1:
  Input: 121
  Output: true
Example 2:
  Input: -121
  Output: false
  Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:
  Input: 10
  Output: false
  Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
-----------------------------------------------------------------------------------------------------------------*/

/**
 * @param {number} x
 * @return {boolean}
 */

/*--------------------------- 
  Approach 1: Using Math
  Status: Success
		Runtime: 220 ms
---------------------------*/
const isPalindrome = (x) => {
	//Note that 0 is a palindrmoe
	if(0<=x&&x<10) return true;
	//negative number/multiple of 10/single digit are not palindrome. 
	if(x<0 || Math.floor(x%10)===0 && x!=0) return false;

	//check reverse
	let rev = 0;let copyOfX = x;
	while(copyOfX!=0){
		let pop = ~~(copyOfX%10);
		copyOfX = ~~(copyOfX/10);//better replacement for Math.floor()
		rev = rev*10 + pop;
		if(x===rev) return true;//check after changing
		if(x<rev) return false;//stop if reverse number become larger than original
	}
	return false;
};
/*--------------------------- 
  Approach 2: Converting via string
  Status: Success
		Runtime: 256 ms
---------------------------*/
// const isPalindrome = (x) => {
// 	const rev = parseInt(x.toString().split('').reverse().join(''));
// 	return (rev === x) ? true: false;
// };

console.log(isPalindrome(121));//true
console.log(isPalindrome(-121));//false
console.log(isPalindrome(10));//false
console.log(isPalindrome(1));//true
console.log(isPalindrome(11));//true
console.log(isPalindrome(0));//true
