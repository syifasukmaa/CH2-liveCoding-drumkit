// let student1 = {
//   name: 'Ale',
//   age: 28,
//   programmingLanguage: ['PHP', 'C++', 'C#', 'Golang', 'JavaScript', 'Java'],
// };
// let student2 = {
//   name: 'Yoga',
//   age: 55,
//   programmingLanguage: ['Love', 'JavaScript'],
// };
// let student3 = {
//   name: 'Fadhlan',
//   age: 8,
//   programmingLanguage: ['India', 'JavaScript'],
// };

//constructor function
function StudentFSW(name, age, programmingLanguage) {
  this.name = name;
  this.age = age;
  this.programmingLanguage = programmingLanguage;
}

var student1 = new StudentFSW('Hafizh', 20, ['java']);
var student2 = new StudentFSW('Adrian', 40, ['javascript']);
var student3 = new StudentFSW('Diki', 18, ['javascript']);

console.log(student2.name);
