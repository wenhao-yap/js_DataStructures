/*-----------------------------------------------------------------------------------------
26. Remove Duplicates from Sorted Array

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Given nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the returned length

Example 2:
Given nums = [0,0,1,1,1,2,2,3,3,4],
Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
It doesn't matter what values are set beyond the returned length.
--------------------------------------------------------------------------------------*/

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 84 ms
 */

const removeDuplicates = (nums) => {
  for(let i=nums.length-1;i>=0;i--){
    if(nums[i-1]===nums[i] && i!=0) nums.splice(i,1);
  }
  return nums.length;
};

let nums = [1,1,1,1];
const len = removeDuplicates(nums);
for (let i = 0; i < len; i++) {
  console.log(nums[i]);
}