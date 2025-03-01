/**
 * 📌 Problem Statement:
 * Write a function called isSubsequence that checks if one string is a subsequence of another.
 * The function should return true if all characters of the first string appear in order in the second string, otherwise false.
 *
 * Examples:
 * isSubsequence("hello", "hello world") → true
 * isSubsequence("sing", "sting") → true
 * isSubsequence("abc", "acb") → false
 *
 * 🏷️ Pattern Used: Multiple Pointers
 *
 * 🕒 Time Complexity: O(N)
 *      → The while loop iterates through str2 at most once.
 *      → No nested loops, so overall O(N).
 *
 * 🗄️ Space Complexity: O(1)
 *      → Uses only a few variables (i, j), no extra data structures.
 */

function isSubsequence(str1, str2) {
  // Initialize Pointers
  let i = 0;
  let j = 0;

  // Move pointers based on condition
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++; // Move i if a match is found
    j++; // Always move j
  }
  return i === str1.length; // If i reached the end of str1, it's a subsequence
}

// ✅ Test Cases
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'acb')); // false
