/*-----------------------------------------------------------------------------------------------------------------
14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
-----------------------------------------------------------------------------------------------------------------*/

/**
 * @param {string[]} strs
 * @return {string}
 */

/*--------------------------- 
  Approach 1: Horizontal Scanning
  Status: Success
		Runtime: 72 ms
---------------------------*/
const longestCommonPrefix = (strs) => {
  if(strs.length == 0) return "";

  let prefix = strs[0];
  strs.forEach((s,i) => {
    while(s.indexOf(prefix) != 0){
      prefix = prefix.substring(0,prefix.length-1);
      if(prefix === "" || prefix.length == 0) return "";
    }    
  })
  return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));