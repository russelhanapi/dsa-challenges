/**
 * 📌 Problem Statement:
 * Write a function called factorial that takes a number.
 * The function should return the factorial of the given number using recursion.
 * Factorial (n!) is the product of all positive integers from 1 to n.
 *
 * Examples:
 * factorial(5) → 120 (5 * 4 * 3 * 2 * 1)
 * factorial(3) → 6   (3 * 2 * 1)
 * factorial(0) → 1   (By definition, 0! = 1)
 * factorial(-3) → 0  (Handles negative input)
 *
 * 🏷️ Pattern Used: Recursion
 *      → Breaks the problem into smaller subproblems by reducing the number on each recursive call.
 *
 * 🕒 Time Complexity: O(N)
 *      → The function calls itself num times.
 *      → Each recursive call reduces num by 1 until it reaches 0.
 *
 * 🗄️ Space Complexity: O(N)
 *      → Each recursive call adds a new frame to the call stack.
 *      → Maximum depth is equal to num.
 */

function factorial(num) {
  if (num < 0) return 0; // Prevents invalid calculations for negative numbers
  if (num === 0) return 1; // Base case: 0! is 1
  return num * factorial(num - 1); // Recursive case: Reduce num by 1
}

// ✅ Test Cases
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
console.log(factorial(-3)); // 0
