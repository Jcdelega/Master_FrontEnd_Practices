/* 
Create a program in JavaScript that evaluates a student's grade and show a personalized message depending on the grade as follows:

If the grade is 90 or greater It shows “excellent”
If the grade is greater than 75 and less than 89, It shows “Good”
If the grade is greater than 60 and less than 75, It shows “Enough”
Otherwise the student is not approved.

*/

let grade = prompt("Type a note")
if( grade >= 0 && grade <= 100 ){
    if( grade >= 90 && grade <= 100  ){
        alert("Excellent");
    }
    else if( grade > 75 && grade < 89 ){
        alert("Good");
    }
    else if( grade > 60 && grade < 75 ){
        alert("Enough");
    }
    else{
        alert("Not approved");
    }
}else
alert("Please enter a valid rating");