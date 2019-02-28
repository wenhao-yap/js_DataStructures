/*-----------------------------------------------------------------------------------------
35. Search Insert Position

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.

Example 1:
Input: [1,3,5,6], 5
Output: 2

Example 2:
Input: [1,3,5,6], 2
Output: 1
--------------------------------------------------------------------------------------*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*--------------------------- 
  Approach 1: 
	Runtime: 76 ms
---------------------------*/
// var searchInsert = function(nums, target) {
//   if(nums.includes(target)) return nums.indexOf(target);
//   let newArr = nums;
//   newArr.push(target);
//   return newArr.sort((a,b)=>{return a-b;}).indexOf(target);
// };

/*--------------------------- 
  Approach 2: Binary Search
	Runtime: 76 ms
---------------------------*/
const searchInsert = (nums, target) => {
  return binarySearch(nums,target,0,nums.length);
};

const binarySearch = (nums,target,left,right) => {
  if(right>left){
    let mid = Math.floor(left + (right-left)/2);
    //if the element is present in the middle itself
    if(nums[mid] === target) return mid;
    //if the element is smaller than mid, then look at left subarray
    if(nums[mid] > target) return binarySearch(nums,target,left,mid);
    //if the element is larger than mid, then look at right subarray
    return binarySearch(nums,target,mid+1,right);
  }
  
  //We reach here when element is not present in array
  return left;
}

console.log(searchInsert([3,5,7,9,10],8)); //3
console.log(searchInsert([1,3,5,6], 2)); //1
console.log(searchInsert([1,3,5,6], 7)); //4
console.log(searchInsert([1,3],2)); //1
