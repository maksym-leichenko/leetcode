/**
 https://leetcode.com/problems/majority-element/


 169. Majority Element

 Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

 You may assume that the array is non-empty and the majority element always exist in the array.

 Example 1:

 Input: [3,2,3]
 Output: 3
 Example 2:

 Input: [2,2,1,1,1,2,2]
 Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const all = nums.reduce((acc, num) => {
    if (!acc[num]) acc[num] = 0;
    acc[num]++;
    return acc;
  }, {});

  const { key } = Object.entries(all).reduce((acc, [key, value]) => {
    if(value > acc.value) {
      return { key, value };
    }
    return acc;
  }, { key: -Infinity, value: -Infinity });

  return key;
};
