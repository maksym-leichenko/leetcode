/**
 https://leetcode.com/problems/valid-parentheses/


 Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

 An input string is valid if:

 Open brackets must be closed by the same type of brackets.
 Open brackets must be closed in the correct order.
 Note that an empty string is also considered valid.

 Example 1:

 Input: "()"
 Output: true
 Example 2:

 Input: "()[]{}"
 Output: true
 Example 3:

 Input: "(]"
 Output: false
 Example 4:

 Input: "([)]"
 Output: false
 Example 5:

 Input: "{[]}"
 Output: true
*/


/**
 * @param {string} str
 * @return {boolean}
 */
var isValid = function(str) {
  const openArr = [ '(', '{', '[' ];
  const closeArr = [ ')', '}', ']' ];

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const symb = str[i];
    if (openArr.includes(symb)) {
      stack.push(symb);
    }
    else {
      const index = closeArr.indexOf(symb);
      const open = openArr[index];
      if (stack[stack.length - 1] === open) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
