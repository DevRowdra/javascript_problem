// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"

const name='hello world'

function reverse(string) {
    console.log(string)
    let newString=''
    for (let i = string.length -1; i>=0; i--) {
        const element = string[i];
        newString +=element
        
    }
    return newString
}


const result=reverse(name)
console.log(result)