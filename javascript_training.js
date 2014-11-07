/*
In the oldFaithful.js file:
1. Build a variable for daily-average eruption height called avgHeight and set it to 145 feet. 
2. Build a variable for today’s number of eruptions called numEruptions and set it to 4 eruptions.  
*/

var avgHeight = 145;
var numEruptions = 4;

/*
In the oldFaithful.js file, write a single statement that prints the following string to the browser console, using just ONE string and the existing variables to produce the correct format:
*/

var avgHeight = 145;
var numEruptions = 4;
console.log("\"Old Faithful\" at Yellowstone National Park\nAverage eruption height today: " + avgHeight + "Number of eruptions: " + numEruptions);

/*


Now, say that Old Faithful’s eruptions are kept as separate variables in oldFaithful.js, as you can see in the file.

Print the message below to the console using the existing variable names to access all values in the printout. Additionally, use one console.log() statement PER LINE of the output.

We’ve also given you a variable name for the average; but to succeed at this challenge, you’ll need to think of how to calculate the average using only the variable names and operation syntax.

< and > indicate where our variable’s actual value should be placed. There should be no < > in your output, however. Be attentive to spacing as well.

"Old Faithful" at Yellowstone National Park
Eruption 1: <first eruption amount goes here>
Eruption 2: <second eruption amount goes here>
Eruption 3: <third eruption amount goes here>
Average eruption height today: <average value goes here>


*/

var eruption1 = 112;
var eruption2 = 148;
var eruption3 = 160;
var numEruptions = 3;
var avg = (eruption1 + eruption2 + eruption3) / numEruptions;
console.log("\"Old Faithful\" at Yellowstone National Park");
console.log("Eruption 1: " + eruption1);
console.log("Eruption 2: " + eruption2);
console.log("Eruption 3: " + eruption3);
console.log("Average eruption height today: " + avg);


/*  JavaScript Road Code Academy  */

confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');
confirm("I feel awesome!");
confirm("I am ready to go.");


/* To do any of these actions, the program needs an input. You can ask for input with a prompt.  */
prompt("What is your name?");
prompt("What is Ubuntu?");

/* 
    Write a string with at least 3 words. Check out the examples of strings above.

    Find the length of the string by writing a period (full stop) and the word length, like this:

    "string".length

Length counts every character in the string - including spaces!

*/

"Who are you ? "
"Who are you ? ".length

/*

    First, write the string "I'm coding like a champ"
    Next, find the length of the string using .length
    Then, compare the string's length to see if it is greater than 10


*/

var string1 = "I'm coding like a champ";
var string1Len = string1.length;
string1Len > 10


/*
Please print the following two console.log statements at the same time. Type one on line 1 and the other on line 2. Then press Save & Submit Code.

console.log(2 * 5)
console.log("Hello")
*/



/*
Check out the if statement in the editor.

    On line 1, add a condition inside the parentheses ( ).
    If the answer to the condition is yes, the code inside the curly braces will run. So on line 2, use console.log to print out a string.

*/

if ( 4 > 2 ) {
    console.log( " 4 is greater than 2 " );
}

/*

    In line 1, fill in a condition that will evaluate to false
    Fill in some code to run in the else portion (this will run if the condition is false). Use console.log for this part.

*/
if ( "First Road".length < 20 ) 
{
    console.log("Let's go down the first road!");
}
else 
{
    // What should we do if the condition is false? Fill in here:
    console.log("Let's go down the second road!");
    
}