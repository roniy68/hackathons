/*
Given an integer array `nums`, create a function that moves all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/

/* Pseudocode:
    1. funciton arrayManupilate(nums)
    2. In loop whenever i encounter integer 0 i will remove the element or shift the element to the end
    3. return the nums
*/

let nums = [0, 1, 0, 3, 12]
let nums1 = [0]

function arrayManupiate(nums) {
    let count = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {

        if (nums[i] != 0) {
            //do something
            nums[count++] = nums[i]
        }

    }

    while (count < n) nums[count++] = 0;

    return nums
}

console.log(arrayManupiate(nums))
console.