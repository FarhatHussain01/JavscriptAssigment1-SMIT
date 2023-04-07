//(1) Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let num1 = Number(prompt("enter first Number"));
let num2 = Number(prompt("enter Second Number"));


if (num1 > num2) {
    console.log(num1 + " " + "is a larger number");
}

else if (num2 > num1) {
    console.log(num2 + " " + "is a larger number");
}
else {
    console.log("Sorry Your Numbers are Equal");
}


/*
2. Write a JavaScript conditional statement to find the sign of a number. Display
an alert box with the specified sign.
Sample: 3
Output : The sign is +
Sample: -5
Output : The sign is -
*/

let number = Number(prompt("Enter a number either positive or negative of your choice"));

if (number > 0) {
    alert("The Sign is + ")
} else if (number < 0) {
    alert("The Sign is - ")
}
else {
    alert("The number have 0 Value")
}


// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.


let numb1 = Number(prompt("Enter First Number"));
let numb2 = Number(prompt("Enter Second Number"));
let numb3 = Number(prompt("Enter Third Number"));
let numb4 = Number(prompt("Enter Fourth Number"));
let numb5 = Number(prompt("Enter Fifth Number"));

if (numb1 > numb2 && numb1 > numb3 && numb1 > numb4 && numb1 > numb5) {
    console.log(`${numb1} is the largest number.`);
} else if (numb2 > numb1 && numb2 > numb3 && numb2 > numb4 && numb2 > numb5) {
    console.log(`${numb2} is the largest number.`);
} else if (numb3 > numb1 && numb3 > numb2 && numb3 > numb4 && numb3 >= numb5) {
    console.log(`${numb3} is the largest number.`);
} else if (numb4 > numb1 && numb4 > numb2 && numb4 > numb3 && numb4 > numb5) {
    console.log(`${numb4} is the largest number.`);
} else if (numb5 > numb1 && numb5 > numb2 && numb5 > numb3 && numb5 > numb4) {
    console.log(`${numb5} is the largest number.`);
} else {
    console.log(`They are all equal`);
}




// 4 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"


for (let i = 0; i < 15; i++) {

    if (i % 2 === 0) {
        console.log(i + " " + "is even");
    }
    else if (i % 2 !== 0) {
        console.log(i + " " + "is odd");
    }

}


// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.


const MarksOfSubject1 = Number(prompt("Enter the first mark:"));
const MarksOfSubject2 = Number(prompt("Enter the second mark:"));
const MarksOfSubject3 = Number(prompt("Enter the third mark:"));
const MarksOfSubject4 = Number(prompt("Enter the fourth mark:"));
const MarksOfSubject5 = Number(prompt("Enter the fifth mark:"));

const sum = mark1 + mark2 + mark3 + mark4 + mark5;
const avg = sum / 5;

let grade;
if (avg < 60) {
    grade = 'F';
} else if (avg < 70) {
    grade = 'D';
} else if (avg < 80) {
    grade = 'C';
} else if (avg < 90) {
    grade = 'B';
} else {
    grade = 'A';
}

console.log(`The average mark is ${avg} and the grade is ${grade}.`);


// // 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".




for (let i = 1; i < 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }
}


// Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// **
// *
// * * *
// * * * *
// * * * * *


let n = 5;

for (let i = 0; i < n; i++) {
    let star = " ";
    for (let j = 0; j < i; j++) {
        star += "*"
    }
    console.log(star);

}













