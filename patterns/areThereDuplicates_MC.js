/**
 * 📌 Problem Statement:
 * Write a function called areThereDuplicates that accepts a **sorted** variable number of arguments
 * and checks whether there are duplicates among the arguments.
 *
 * Examples:
 * areThereDuplicates(1, 2, 3)  → false
 * areThereDuplicates(1, 2, 2)  → true
 * areThereDuplicates('a', 'b', 'c', 'a')  → true
 *
 * 🏷️ Pattern Used: Multiple Pointers
 * 🕒 Time Complexity: O(N) → Since it only loop through the array once.
 * 🗄️ Space Complexity: O(1) → Since it's only using a few variables (i, j), no extra space is used.
 */

function areThereDuplicates(...input) {
  // Edge Case
  if (input.length <= 1) return false;

  let i = 0; // Pointer starts at index 0

  // Loop through the input array
  for (let j = 1; j < input.length; j++) {
    console.log(input[i], input[j]); // Debugging output

    // If a duplicate is found, return true
    if (input[i] === input[j]) return true;

    i++; // Move the pointer to the right
  }
  return false;
}

// ✅ Test Cases
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
