/**
 * 📌 Problem Statement:
 * Write a function called fibonacci that takes a number `num` and returns the `num`th Fibonacci number.
 * The Fibonacci sequence is defined as:
 *   - fib(1) = 1
 *   - fib(2) = 1
 *   - fib(n) = fib(n-1) + fib(n-2) for n > 2
 *
 * Examples:
 * fibonacci(4)  → 3   (1, 1, 2, 3)
 * fibonacci(6)  → 8   (1, 1, 2, 3, 5, 8)
 * fibonacci(10) → 55  (1, 1, 2, 3, 5, 8, 13, 21, 34, 55)
 *
 * 🏷️ Pattern Used: Recursion
 *      → The function breaks the problem into smaller Fibonacci calls until reaching the base cases.
 *
 * 🕒 Time Complexity: O(2^N)
 *      → Each call results in two additional recursive calls.
 *      → This leads to exponential growth.
 *
 * 🗄️ Space Complexity: O(N)
 *      → The recursion depth reaches `num`, requiring O(N) space in the call stack.
 */

function fibonacci(num) {
  if (num <= 2) return 1; // Base case: first two Fibonacci numbers are 1
  return fibonacci(num - 1) + fibonacci(num - 2);
  // Recursive case: Sum of the two preceding Fibonacci numbers
}

// ✅ Test Cases
console.log(fibonacci(4)); // 3
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
