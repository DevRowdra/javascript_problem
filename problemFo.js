// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)


function findTwoNumbera(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sume = arr[left] + arr[right];
  
      if (sume === target) {
        return [left, right];
      } else if (sume < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return "No found any numbers";
  }
  
  
  const sortedArr = [1, 3, 6, 8, 11, 15];
  const tarValue = 9;
  const result = findTwoNumbera(sortedArr, tarValue);
  console.log(result);
  