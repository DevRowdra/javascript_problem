// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function numberSum(number) {
    const sums= number.reduce((total,current)=>{
        return current > 0 ? total + current : total },0)
    return sums
}

const mainNumber=[2, -5, 10, -3, 7]
const result= numberSum(mainNumber)
console.log(result)
