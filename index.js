// Release 0
const student = {};
student.firstName = `Petr`;
student.lastName = `Perviy`;
student.firstName = `Petya`;
delete student.firstName;

console.log(student);
// Release 1
let group = [];
group.push(student);
let student2 ={
    firstName:`Sasha`,
    lastName: `Dergunov`
}
let student3 ={
    firstName: `Kolia`,
    lastName: `Ivanov`
}
group.push(student2,student3)
console.log(group);
