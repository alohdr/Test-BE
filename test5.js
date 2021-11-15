/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes("fl")) {
      console.log('fl')
    } 
  }
}

console.log(result(words));
