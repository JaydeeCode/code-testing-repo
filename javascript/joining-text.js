/*
Activity: Student Grades Report

1. Create variables for student names and their scores.
2. Join texts to make a report line for each student.
3. Calculate the average score.
4. Compare each score to the average.
5. Use a function to generate a report for each student.
6. Store students in a list and go through it to print the report.
*/

// 1. Variables for names and scores
const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 72 },
    { name: "Charlie", score: 90 },
    { name: "Diana", score: 78 }
];

// 2. Function to calculate average score
function getAverageScore(list) {
    let total = 0;
    for (let student of list) {
        total += student.score;
    }
    return total / list.length;
};

// 3. Function to generate report line
function studentReport(student, average) {
    let comparison = student.score >= average ? "above" : "below";
    return student.name + " scored " + student.score + ", which is " + comparison + " average.";
};

// 4. Calculate average
const averageScore = getAverageScore(students);

// 5. Go through list and print report
for (let student of students) {
    console.log(studentReport(student, averageScore));
};
console.log("Class average score is: " + averageScore);