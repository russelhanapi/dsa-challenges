/**
 * 📌 Problem Statement:
 * Write a function called areThereDuplicates that accepts a variable number of arguments
 * and checks whether there are duplicates among the arguments using a **one-liner** approach.
 *
 * Examples:
 * areThereDuplicates(1, 2, 3)  → false
 * areThereDuplicates(1, 2, 2)  → true
 * areThereDuplicates('a', 'b', 'c', 'a')  → true
 *
 * 🏷️ Pattern Used: Set
 * 🕒 Time Complexity: O(N) → Creating a Set requires iterating through the input.
 * 🗄️ Space Complexity: O(N) → The Set stores unique elements, potentially all of them.
 */

const areThereDuplicates = (...input) => new Set(input).size !== input.length;

// ✅ Test Cases
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
