//create all variables and arrays 
let numStudents = 1;
let studentName;
let  studentAge;
let overAge = [];
let underAge = [];
const allStudents = [];

//in this for we add the name and age of the student´s number 
for (index = 0; index < numStudents; index += 1){
     studentName = 'andres';
     studentAge = 19

    let student = {
        studentName,
        studentAge
    } 

    allStudents.push(student)//add the results in the array 
}
//when you ask all info about students we do a for to see who were under an over age 
for (i = 0; i < allStudents.length; i += 1){
    if(allStudents[i].studentAge >= 18){
        overAge.push(allStudents[i]);//add the number of over age students 
    }else{
        underAge.push(allStudents[i]);//add the number of under age students 
    }
}

console.log(`number of students who are over age is ${overAge.length}, and under age is ${underAge.length}`);//when we print the length of each array
//we see how many students have the array and finish