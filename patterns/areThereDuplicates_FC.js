/**
 * 📌 Problem Statement:
 * Write a function called areThereDuplicates that accepts a sorted variable number of arguments
 * and checks whether there are duplicates among the arguments using the Frequency Counter pattern.
 *
 * Examples:
 * areThereDuplicates(1, 2, 3)  → false
 * areThereDuplicates(1, 2, 2)  → true
 * areThereDuplicates('a', 'b', 'c', 'a')  → true
 *
 * 🏷️ Pattern Used: Frequency Counter
 * 🕒 Time Complexity: O(N)
 *      → The first loop iterates through input
 *      → O(n) The second loop iterates through lookup (which has at most n keys) → O(n)
 *      Overall: O(n) + O(n) = O(n)
 * 🗄️ Space Complexity: O(N) → The lookup object stores at most n unique keys, requiring O(n) space.
 */

function areThereDuplicates(...input) {
  if (input.length <= 1) return false; // Edge case

  // initialize a variable that will contain the occurrence of each argument
  let lookup = {};

  // count the occurrences of each arg
  for (let arg of input) lookup[arg] = lookup[arg] ? lookup[arg] + 1 : 1;

  // if there is an argument with greater than 1, return true
  for (let arg in lookup) {
    if (lookup[arg] > 1) return true;
  }
  return false;
}

// ✅ Test Cases
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
