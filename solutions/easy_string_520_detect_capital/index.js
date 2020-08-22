/**
 https://leetcode.com/problems/detect-capital/


 520. Detect Capital

 Given a word, you need to judge whether the usage of capitals in it is right or not.

 We define the usage of capitals in a word to be right when one of the following cases holds:

 All letters in this word are capitals, like "USA".
 All letters in this word are not capitals, like "leetcode".
 Only the first letter in this word is capital, like "Google".
 Otherwise, we define that this word doesn't use capitals in a right way.


 Example 1:

 Input: "USA"
 Output: True


 Example 2:

 Input: "FlaG"
 Output: False


 Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
 */


/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
  if(word.length < 2) return true;

  const isUpperCase = index => word.charCodeAt(index) <= 90;

  let checkCorrect;
  if(isUpperCase(0)) {
    if (isUpperCase(1)) {
      checkCorrect = (index) => isUpperCase(index);
    } else {
      checkCorrect = (index) => !isUpperCase(index);
    }
  } else {
    checkCorrect = (index) => !isUpperCase(index);
  }
  for (let i = 1; i < word.length; i++) {
    if (!checkCorrect(i)) {
      return false;
    }
  }
  return true;
};
