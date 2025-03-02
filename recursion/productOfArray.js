/**
 * 📌 Problem Statement:
 * Write a function called productOfArray that takes an array of numbers.
 * The function should return the product of all the numbers using recursion.
 *
 * Examples:
 * productOfArray([1, 2, 3, 4]) → 24  (1 * 2 * 3 * 4)
 * productOfArray([3, 5, 2])    → 30  (3 * 5 * 2)
 * productOfArray([7])          → 7   (Only one number)
 * productOfArray([])           → 1   (Empty array returns 1)
 *
 * 🏷️ Pattern Used: Recursion
 *      → The function reduces the array on each recursive call until it reaches an empty array.
 *
 * 🕒 Time Complexity: O(N)
 *      → The function calls itself once per element.
 *      → It processes each element exactly once.
 *
 * 🗄️ Space Complexity: O(N)
 *      → Each recursive call adds a new frame to the call stack.
 *      → Maximum depth is equal to the number of elements in the array.
 */

function productOfArray(arr) {
  if (arr.length === 0) return 1; // Base case: return 1 for an empty array
  return arr[0] * productOfArray(arr.slice(1));
  // Multiply first element by recursive call on the rest of the array
}

// ✅ Test Cases
console.log(productOfArray([1, 2, 3, 4])); // 24
console.log(productOfArray([3, 5, 2])); // 30
console.log(productOfArray([7])); // 7
console.log(productOfArray([])); // 1
