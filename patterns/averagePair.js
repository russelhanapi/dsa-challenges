/**
 * 📌 Problem Statement:
 * Write a function called averagePair that takes a sorted array and a target average.
 * The function should return true if there is a pair of numbers in the array whose average equals the target, otherwise false.
 *
 * Examples:
 * averagePair([1, 2, 3], 2.5)  → true
 * averagePair([1, 2, 4], 2.5)  → false
 * averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)  → true
 * averagePair([], 4) → false
 *
 * 🏷️ Pattern Used: Multiple Pointers
 *
 * 🕒 Time Complexity: O(N)
 *      → The while loop runs at most N times.
 *      → No nested loops, so overall O(N).
 *
 * 🗄️ Space Complexity: O(1)
 *      → Uses only a few variables (leftPointer, rightPointer, average).
 *      → No extra data structures, so constant space.
 */

function averagePair(arr, target) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let average = (arr[leftPointer] + arr[rightPointer]) / 2;
    if (average === target) return true;
    else if (average < target) leftPointer++; // Move left pointer to the right to increase sum
    else rightPointer--; // Move right pointer to the left to decrease sum
  }
  return false;
}

// ✅ Test Cases
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 2, 4], 2.5)); // false
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([], 4)); // false
