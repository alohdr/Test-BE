/**
 * Direction:
 * Remove duplicated data from array
 *
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  const unik = new Set(data);
  const array = [...unik];
  console.log(array.sort());
}

console.log(result(data));
