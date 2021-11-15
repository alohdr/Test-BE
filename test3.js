/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  {
    session_name: "first test",
    classes: [{ class_name: undefined, students: [{ student_name: "budi" }] }],
  },
  {
    session_name: null,
    classes: [
      { class_name: "second class", students: [{ student_name: "adi" }] },
    ],
  },
];

function result(data) { 

  if (data[0].classes[0].class_name === undefined) {
    delete data[0].classes[0].class_name
  } 
  
  if (data[1].session_name === null) {
    delete data[1].session_name
  }

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element)
  }

}

// console.log(delete data[1].session_name);
console.log(result(data));
