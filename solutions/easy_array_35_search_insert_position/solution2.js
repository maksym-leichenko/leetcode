/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let insertPosition = nums.length;

  const search = (left, right) => {
    if (left > right) {
      return insertPosition;
    }

    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      insertPosition = mid;
      return search(left, mid - 1);
    } else {
      return search(mid + 1, right);
    }
  };

  return search(0, nums.length - 1);
};
