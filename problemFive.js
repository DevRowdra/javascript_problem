// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


function calculator(first,operator,sec) {
    let result
    if (operator == '+') {
        result=first+sec
    }
    else if(operator == '-'){
        result=first-sec

    }
    else if(operator == '*'){
        result=first*sec

    }
    else if(operator == '/'){
        result=first/sec

    }
    return result
}

const final= calculator(4,"-",2)
console.log(final)


