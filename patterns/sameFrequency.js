/**
 * 📌 Problem Statement:
 * Write a function called sameFrequency that takes two numbers.
 * The function should return true if both numbers have the same frequency of digits.
 * Otherwise, it should return false.
 *
 * Examples:
 * sameFrequency(182, 281)  → true
 * sameFrequency(34, 14)    → false
 * sameFrequency(3589578, 5879385) → true
 * sameFrequency(22, 222)   → false
 *
 * 🏷️ Pattern Used: Frequency Counter
 * 🕒 Time Complexity: O(N)
 * 🗄️ Space Complexity: O(N)
 */

function sameFrequency(int1, int2) {
  // Convert number to array
  const arr1 = Array.from(String(int1), Number);
  const arr2 = Array.from(String(int2), Number);

  // Edge case: If their length is not the same, return false
  if (arr1.length !== arr2.length) return false;

  const freqCount1 = {};
  const freqCount2 = {};

  // Count the occurrences of each number inside the array
  // If the number already exists, keep its current value then add 1.
  // If the number does not exist, initialize to 1
  for (let num of arr1) freqCount1[num] = freqCount1[num] ? freqCount1[num] + 1 : 1;
  for (let num of arr2) freqCount2[num] = freqCount2[num] ? freqCount2[num] + 1 : 1;

  // Check if each key (number) exists in the second array and they have the same frequent
  for (let key in freqCount1) {
    if (freqCount1[key] !== freqCount2[key]) return false;
  }
  return true;
}

// ✅ Test Cases
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
