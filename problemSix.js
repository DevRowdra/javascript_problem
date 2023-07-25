// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


function generatePassword(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*_-+=?/";
  
    const allCharactres = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const indexRan = Math.floor(Math.random() * allCharactres.length);
      password += allCharactres.charAt(indexRan);
    }
  
    return password;
  }
  
  const passLength = 12;
  const password = generatePassword(passLength);
  console.log(password);
  