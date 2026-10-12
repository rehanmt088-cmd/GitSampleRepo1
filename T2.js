// Given student data array
let students = [
  { name: "John", marks: 85, grade: "A" },
  { name: "David", marks: 72, grade: "B" },
  { name: "Peter", marks: 90, grade: "A+" },
  { name: "Sarah", marks: 65, grade: "C" }
];

// 1. forEach() 
console.log("All Students:");
students.forEach((student) => {
  console.log(student.name + " - " + student.marks + " - " + student.grade);
});

// 2. map() 
let studentNames = students.map((student) => {
  return student.name;
});
console.log("Student Names:");
console.log(studentNames);

// 3. filter() 
let topStudents = students.filter((student) => {
  return student.marks >= 80;
});
console.log("Students who scored 80 or above:");
console.log(topStudents);