/**
 https://leetcode.com/problems/pascals-triangle/

 118. Pascal's Triangle
 Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


 In Pascal's triangle, each number is the sum of the two numbers directly above it.

 Example:

 Input: 5
 Output:
 [
 [1],
 [1,1],
 [1,2,1],
 [1,3,3,1],
 [1,4,6,4,1]
 ]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const arr = [];
  if (numRows === 0) return arr;

  arr.push([1]);
  if (numRows === 1) return arr;

  arr.push([1, 1]);
  if (numRows === 2) return arr;

  for (let i = 2; i < numRows; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      row.push(arr[i-1][j-1] + arr[i-1][j]);
    }
    row.push(1);
    arr.push(row);
  }
  return arr;
};

