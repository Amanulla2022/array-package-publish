# array_packages

A collection of array utility functions for common operations.

## Usage

const arrayUtilsFunctions = require("arrays_packages");

const arr = [1, 2, 3, 4, 5];

console.log(arrayUtilsFunctions.minValue(arr)); // 1
console.log(arrayUtilsFunctions.maxValue(arr)); // 5
console.log(arrayUtilsFunctions.averageValue(arr)); // 3
console.log(arrayUtilsFunctions.firstNElement(arr, 2)); // [1,2]
console.log(arrayUtilsFunctions.lastNElements(arr, 2)); // [4,5]
console.log(arrayUtilsFunctions.reverseArray(arr)); // [5,4,3,2,1]
console.log(arrayUtilsFunctions.removeAtIndex(arr, 2)); // [1,2,4,5]
console.log(arrayUtilsFunctions.insertAtIndex(arr, 4, 6)); // [1,2,3,4,5,6]
console.log(arrayUtilsFunctions.sumArray(arr)); // 18
console.log(arrayUtilsFunctions.shuffleArray(arr)); // [2,6,1,5,4]
arrayUtilsFunctions.mapWithIndex(arr, (val, index) => {
console.log(`${index}: ${val}`);
}); // 0: 2, 1: 6, 2: 1, 3: 5, 4: 4

console.log(arrayUtilsFunctions.countOccurrences(arr)); //{ '1': 1, '2': 1, '4': 1, '5': 1, '6': 1 }

### Reference

minValue(arr): Returns the minimum value from an array.
maxValue(arr): Returns the maximum value from an array.
averageValue(arr): Calculates the average value of elements in an array.
firstNElement(arr, n): Returns the first N elements of an array.
lastNElements(arr, n): Returns the last N elements of an array.
reverseArray(arr): Reverses the elements of an array.
removeAtIndex(arr, index): Removes an element from an array at a specified index.
insertAtIndex(arr, index, value): Inserts an element into an array at a specified index.
sumArray(arr): Calculates the sum of all elements in an array.
shuffleArray(arr): Shuffles the elements of an array randomly.
mapWithIndex(arr, callback): Applies a function to each element of an array along with its index.
countOccurrences(arr): Counts the occurrences of each element in an array and returns an object with counts.
