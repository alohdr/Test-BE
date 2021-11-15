/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  let newnumbers = numbers.sort()

  for (let i = 0; i < newnumbers.length; i++) {
    if (i !== newnumbers[i]) {
      console.log(i)
    }    
  }
}

console.log(result(numbers));
