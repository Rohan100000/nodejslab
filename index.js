// const number = 1;
// console.log(number);

// let num = 1;
// num = 2;
// console.log(num);

// const myFunction = () => {
//     // Logic goes here 
//     console.log("From myFunction");
// }

// myFunction();

// const studentObject = {
//     NAME: "Vaibhav",
//     CGPA: 0,
//     address: {
//         city: "Ranchi",
//         state: "Jharkhand",
//         region: "Diptih"
//     },
//     "favourite hobby": "Painting"
// }


// const { NAME } = studentObject;

// console.log(studentObject.NAME);
// console.log(studentObject.CGPA);
// console.log(studentObject.address.city);
// console.log(studentObject.address.region);
// console.log(studentObject.address.state);
// console.log(studentObject["favourite hobby"]);
// console.log(NAME);

// Reading an excel file.
const parser = require('simple-excel-to-json');
const doc = parser.parseXls2Json("./Example.xlsx")[0];
const json2xls = require('json2xls');
const fs = require('fs');
console.log(doc);

// map, reduce, filter
const totalCgpa = doc.reduce((prevValue, currentValue) => {
    prevValue += currentValue.CGPA;
    return prevValue;
}, 0);

const averageCgpa = totalCgpa / doc.length;

console.log(totalCgpa);
console.log(averageCgpa);

// A+ = 9.5, A = 9 and above , B = 8.5, C = 8.0
const gradedDocument = doc.map((student) => {
    if(student.CGPA >= 9.5){
        student.GRADE = "A+";
    }
    else if(student.CGPA < 9.5 && student.CGPA >= 9){
        student.GRADE = "A";
    }
    else if(student.CGPA < 9 && student.CGPA >= 8.5){
        student.GRADE = "B";
    }
    else{
        student.GRADE = "C";
    }

    return student;
});

// Filtering students who have a CGPA above 8
const filterDocument = gradedDocument.filter((student) => {
    return student.CGPA > 8
});

gradedDocument.push({CGPA: averageCgpa,NAME: "Average Grades"});
const excelDocument = json2xls(gradedDocument);

fs.writeFileSync("Grades.xlsx", excelDocument, "binary");


// sort that sheet based on CGPA
// each subject will only have 50 seats available
// Assign electives to each student
// Create an excel sheet of those electives