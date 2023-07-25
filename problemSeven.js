// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romantoNumer(romanNume) {
    const romanCol = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNume.length; i++) {
      const currentVal = romanCol[romanNume[i]];
      const nextVal = romanCol[romanNume[i + 1]];
  
      if (currentVal < nextVal) {
        result -= currentVal;
      } else {
        result += currentVal;
      }
    }
  
    return result;
  }
  const final = romantoNumer('IX')
  console.log(final); 
  
  