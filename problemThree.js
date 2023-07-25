// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3



function mostFrequent(arr) {
    const frequencyMap = {};
    let maxElement = arr[0];
    let maxCount=1;
  
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // console.log(element)
        if (frequencyMap[element]) {
            frequencyMap[element]++
        }else{
            frequencyMap[element]=1
        }
        if (frequencyMap[element]>maxCount) {
            maxElement=element
            maxCount=frequencyMap[element]
        } 
        
    }
    return maxElement
    // console.log(maxElement)
  
  }
    const inputArr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result = mostFrequent(inputArr);
  console.log(result);
  