/*-----------------------------------------------------------------------------------------
38. Count and Say

The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1 
2.     11 
3.     21 
4.     1211 
5.     111221
6.     312211

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
Note: Each term of the sequence of integers will be represented as a string.
--------------------------------------------------------------------------------------*/

/**
 * @param {number} n
 * @return {string}
 * Runtime: 60 ms
 */
var countAndSay = function(n) {
  let prev = "1";
  if(n===1) return prev;
  for(let i=2;i<=n;i++){
    let curr = "";
    let count = 0;
    //loop through the previous term of the sequence
    for(let j=0;j<prev.length;j++){
      const char = prev.charAt(j);
      //increment count for each occurence
      count += 1;
      //if no more repeated digits
      if(char != prev.charAt(j+1)){
        curr += count + char;
        count = 0;
      }
    }
    //reset the prev as the current term in after every iteration
    prev = curr;
  }
  return prev;
};

console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));