/*-----------------------------------------------------------------------------------------
20. Remove Element
Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.
--------------------------------------------------------------------------------------*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
  for (let i = nums.length - 1; i >= 0; i--){
    if (nums[i] === val) nums.splice(i, 1);
  }
  return nums.length;
};

let nums = [2,2,2];
// let nums = [0,1,2,2,3,0,4,2];
const len = removeElement(nums,2);
for (let i = 0; i < len; i++) {
  console.log(nums[i]);
}