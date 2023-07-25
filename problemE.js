// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const nums=[23,23,34,22,35,23,123,5,3,2,,1]

function scSmall(number) {
    let lastNumber=Infinity
    let secLastNumber=Infinity;
    for (const num of number) {
        // console.log(num)
        if (num<lastNumber) {
            secLastNumber=lastNumber
            lastNumber=num
        } else if (num < secLastNumber && num !== lastNumber) {
            secLastNumber = num;
          }
    }
    return secLastNumber
   
}

const result=scSmall(nums)
console.log(result)

