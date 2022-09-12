function isPalindrome(word) {
  // Write your algorithm here
   
  for (i of word){
    if (word[i] !== word[word.length-i]) {
      console.log(false)
      return false
    } else {
      console.log(true)
      return true
    }
  }

}

/* 
  Add your pseudocode here
  if string === palindrome
    return true
  else 
    return false

  itereate over the string, let n equal the length of the string. for each letter, i, i should equal n-i  

  racecar
  n=7
  when i = 1, 1 = 7, 2 = 6, 3 = 5, 4 = 4

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
