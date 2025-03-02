/**
 * 📌 Problem Statement:
 * Write a function called linearSearch that takes an array and a target value.
 * The function should return the index of the target if found, otherwise return -1.
 *
 * Examples:
 * linearSearch([10, 15, 20, 25, 30], 15)  → 1
 * linearSearch([5, 8, 1, 100, 12], 100)  → 3
 * linearSearch([1, 2, 3, 4, 5], 6)  → -1
 *
 * 🕒 Time Complexity: O(N)
 *      → In the worst case, we iterate through the entire array.
 *      → Best case (if found early) is O(1).
 *
 * 🗄️ Space Complexity: O(1)
 *      → Only a few variables are used, so space usage is constant.
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i; // Return index if found
  }
  return -1; // Return -1 if not found
}

// ✅ Test Cases
console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([5, 8, 1, 100, 12], 100)); // 3
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([], 3)); // -1
