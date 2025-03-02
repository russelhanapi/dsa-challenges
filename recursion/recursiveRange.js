/**
 * 📌 Problem Statement:
 * Write a function called recursiveRange that takes a number `num`.
 * The function should return the sum of all numbers from 0 to `num` using recursion.
 *
 * Examples:
 * recursiveRange(6)  → 21  (6 + 5 + 4 + 3 + 2 + 1 + 0)
 * recursiveRange(10) → 55  (10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0)
 *
 * 🏷️ Pattern Used: Recursion
 *      → The function reduces the number by 1 on each recursive call until it reaches 0.
 *
 * 🕒 Time Complexity: O(N)
 *      → The function makes `num` recursive calls.
 *      → Each call performs a single addition.
 *
 * 🗄️ Space Complexity: O(N)
 *      → Each recursive call adds a new frame to the call stack.
 *      → Maximum depth is equal to `num`.
 */

function recursiveRange(num) {
  if (num === 0) return 0; // Base case: return 0 when num reaches 0
  return num + recursiveRange(num - 1);
  // Add current number to recursive call on (num - 1)
}

// ✅ Test Cases
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
console.log(recursiveRange(0)); // 0
