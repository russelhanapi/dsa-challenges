/**
 * 📌 Problem Statement:
 * Write a function called power that takes a base and an exponent.
 * The function should return the result of raising the base to the given exponent using recursion.
 *
 * Examples:
 * power(2, 3) → 8  (2 * 2 * 2)
 * power(5, 0) → 1  (Any number to the power of 0 is 1)
 * power(3, 4) → 81 (3 * 3 * 3 * 3)
 *
 * 🏷️ Pattern Used: Recursion
 *      → Breaks the problem into smaller subproblems by reducing the exponent on each recursive call.
 *
 * 🕒 Time Complexity: O(N)
 *      → The function calls itself exponent times.
 *      → Each recursive call reduces the exponent by 1 until it reaches 0.
 *
 * 🗄️ Space Complexity: O(N)
 *      → Each recursive call adds a new frame to the call stack.
 *      → Maximum depth is equal to the exponent.
 */

function power(base, exponent) {
  if (exponent === 0) return 1; // Base case: Any number to the power of 0 is 1
  return base * power(base, exponent - 1); // Recursive case: Reduce exponent by 1
}

// ✅ Test Cases
console.log(power(2, 3)); // 8
console.log(power(5, 0)); // 1
console.log(power(3, 4)); // 81
