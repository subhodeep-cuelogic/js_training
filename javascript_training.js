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

/* Date : Nov 10, 2014 */
/*
Write an if/else statement, just like we did in the last exercise. Here's what the outline of the code looked like:

if (condition) 
{
    // if condition is true
    // do this code
}
else // "otherwise"
{
    // do this code instead
}
If your condition is true, use console.log to print "The condition is true".

Otherwise (else) when it is false, use console.log to print "The condition is false".

Make sure your condition evaluates to false, so that your program prints out "The condition is false".

*/

if(10 > 5) {
        console.log("The condition is true");
    }
else {
        console.log("The condition is false");
    }


  /*
There are many mistakes in this code. Find them and fix them all.

You are doing what's called "debugging," a term popularized by Grace Hopper when she literally removed a moth from her computer.
  */

  if (10 == 10) {
    console.log("You got a true!");
} else {
    console.log("You got a false!");
}

/*
Complete the missing bits of code to construct the if / else statement. Make the condition evaluate to true.
Finish the else statement by printing out the string "Error Error Error" to the console.
*/

if ("Jon".length * 2 / (2+1) === 2)
{
    console.log("The answer makes sense!");
} 
else 
{
    console.log("Error Error Error");
}

/*
Use console.log and modulo three times to print the remainder of the following equations:

a. 14 / 3
b. 99 / 8
c. 11 / 3
*/
console.log(14 % 3);
console.log(99 % 8);
console.log(11 % 3);

/*
Let's get the if/else" statement to display "The first number is even".

Edit line 5 by adding a comparison that evaluates to true.
In the comparison, use a modulo and an even number, like we did in the example above.
*/
if( 10 % 2 === 0 ) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}

/*
Substrings
We've learned a few ways to manipulate numbers. What about manipulating strings?

Sometimes you don't want to display the entire string, just a part of it. For example, in your Gmail inbox, you can set it to display the first 50 or so characters of each message so you can preview them. This preview is a substring of the original string (the entire message).

Code:

"some word".substring(x, y) where x is where you start chopping and y is where you finish chopping the original string.

The number part is a little strange. To select for the "he" in "hello", you would write this:

"hello". substring(0, 2);
Each character in a string is numbered starting from 0, like this:

0 1 2 3 4
 | | | | | 
 h e l l o
The letter h is in position 0, the letter e is in position 1, and so on.

Therefore if you start at position 0, and slice right up till position 2, you are left with just he

More examples:

1. First 3 letters of "Batman"
"Batman".substring(0,3);

2. From 4th to 6th letter of "laptop"
"laptop".substring(3,6);

Instructions
Find the 4th up to and including the 7th letter of the string "wonderful day".
*/
"wonderful day".substring(3,7);

/*
More substring practice
Getting the positioning of substring letter positions is tricky! Let's make sure we really have it nailed down.

Remember that each character in a string is numbered starting from 0. So for the word "hello", The letter h is in position 0, the letter e is in position 1, and so on.

Instructions
Using console.log, on three separate lines, print out the substrings for the following strings.

a. "Jan" in "January"
b. "Melbourne is" in "Melbourne is great" (note the space!)
c. "burgers" in "Hamburgers"
*/
console.log("Jan".substring(0,3));
console.log("Melbourne is great".substring(0,13));
console.log("Hamburgers".substring(3,11));

/*
Variables
We have learned how to do a few things now: make strings, find the length of strings, find what character is in the nth position, do basic math. Not bad for a day's work!

To do more complex coding, we need a way to 'save' the values from our coding. We do this by defining a variable with a specific, case-sensitive name. Once you create (or declare) a variable as having a particular name, you can then call up that value by typing the variable name.

Code:

var varName = data;

Example:

a. var myName = "Leng";
b. var myAge = 30;
c. var isOdd = true;
*/

var myAge = 28;
console.log(myAge);

/*
More Variable Practice
We have seen how to create a variable. But how do we use it? It is useful to think that any time you type the variable's name, you are asking the computer to swap out the variable name and swap in the value of the variable.

For example:

var myName = "Steve Jobs";

myName.substring(0,5)

Look at the second line above. You have asked the computer to swap out myName and swap in Steve Jobs, so

myName.substring(0,5)

becomes

"Steve Jobs".substring(0,5)

which evaluates to Steve.

Another example

var myAge = 120;

What is

myAge % 12 ? See the hint to check your answer.

So the variable stores the value of the variable, whether that is a number or a string. As you will see soon, this makes writing long programs much easier!

Instructions
Follow the instructions in the comments in the code to continue.
*/

// Declare a variable on line 3 called
// myCountry and give it a string value.
var myCountry = "India";

// Use console.log to print out the length of the variable myCountry.
console.log(myCountry.length);

// Use console.log to print out the first three letters of myCountry.
console.log(myCountry.substring(0,3));

/*
Change variable values
So far, we've seen
a. how to create a variable
b. how to use a variable

Let's now see how to change a variable's value. A variable's value is easily changed. Just pretend you are creating a new variable while using the same name of the existing variable!

Example:

var myAge = "Thirty";
Say I had a birthday and I want to change my age.
myAge = "Thirty-one";

Now the value of myAge is "Thirty-one"!

Instructions
Follow the instructions on line 1, line 3, line 5 and line 8. We're using this method to show you the order in which you tell the computer what to do is very important.
*/

// On line 2, declare a variable myName and give it your name.
var myName = "Subhodeep Majumder";
// On line 4, use console.log to print out the myName variable.
console.log(myName);
// On line 7, change the value of myName to be just the first 2 
// letters of your name.
myName = myName.substring(0,2);
// On line 9, use console.log to print out the myName variable.
console.log(myName);


/*
Conclusion: Part 1
Let's do a quick review!

Data types

strings (e.g. "dogs go woof!")
numbers (e.g. 4, 10)
booleans (e.g. false, 5 > 4)
Variables
We store data values in variables. We can bring back the values of these variables by typing the variable name.

Manipulating numbers & strings

comparisons (e.g. >, <=)
modulo (e.g. %)
string length (e.g. "Emily".length;)
substrings (e.g. "hi".substring(0, 1);)
console.log( ) 
Prints into the console whatever we put in the parentheses.

Instructions
On line 1, create a variable myColor and give it a string value.
On line 2, print the length of myColor to the console.
*/
myColor = "green";
console.log(myColor.length);	

/*
Conclusion: Part 2
Congratulations on making it this far. You have learned a lot! Just one more exercise before a big pat on the back!

The last tricky thing we learned was about if / else statements.

If / else statements are conditional statements. Under different conditions, the computer will output different things.

Instructions
Write your own if / else statement.
The only instruction is that the result of evaluating the statement is a log to the console of "I finished my first course!".
?

*/

// Not sure where to begin? Check the Hint!

if(10 % 3 == 1) {
    console.log( "I finished my first course!");
} else {
    console.log("I did n't finish my first course!");
}


/* ----------------------- Choose Your Own Adventure! ----------------------------------*/

/*Confirm
You have some programming skills. Time to make something you can show people! We're going to show you how to program a 'choose your own adventure' game. It'll have a basic story line, have the user make some choices, and have a happy ending. Then you can modify it as you wish and show off your creative talents!

One note before we begin. Each of the following exercises will ask you to add on to your previous code. Make sure not to delete or change anything that you did in a previous exercise. Good luck!


It's always polite to ask your user if they are ready to play.
Using the confirm command, make sure your user is ready to play. For example, I would use the sentence "I am ready to play!". Add whatever phrase you would like in the confirm.

*/

confirm("Yeah !! Gotta Play .. Dude !!")

/*
Old enough to play?
This will involve two pieces of code:

First we will use prompt to ask a user for their age, like this:

var age = prompt("What's your age");
The variable age will hold the user's response.

Then we will use an if/else statement based on the age of the user. Here's an outline of the code, similar to what we've seen before:

if(age is less than 13) 
{
    // do this code
}
else   // "otherwise"
{
    // do this code
}
Instructions
Under the existing code, declare a variable age.
Make age equal to prompt("What's your age");. See the example above.
Then write an if/else statement. If age is less than 13, use console.log to tell the user that they're allowed to play but you take no responsibility.
Else, use console.log and give them an encouraging message to play on!
?

*/

confirm("Yeah !! Gotta Play .. Dude !!")
var age = prompt("What's your age ?");
if( age < 13 ) {
    console.log("You can play at your own risk");
} else {
    console.log("Welcome Bro !!")    
}

/*
Adding some story
Let's set up the scene for your story. Under all your previous code, print out the following introduction, exactly as it is written.

"You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'"

Instructions
Print the introduction using console.log. Remember that the introduction is a string, so make sure to keep it between quotes.
*/

// Check if the user is ready to play!
confirm("Yeah !! Gotta Play .. Dude !!")
var age = prompt("What's your age ?");
if( age < 13 ) {
    console.log("You can play at your own risk");
} else {
    console.log("Welcome Bro !!")    
}

console.log("You are at a Justin Bieber concert, and you hear this lyric \'Lace my shoes off, start racing.\'");

/*
First move!
Next, your user is about to talk to Justin Bieber.

Instructions
Under your existing code, print out the storyline: "Suddenly, Bieber stops and says, 'Who wants to race me?'"
Then declare a variable userAnswer. Make it equal a prompt that asks the user "Do you want to race Bieber on stage?". This will be the question that you ask your user.
*/
confirm("Yeah !! Gotta Play .. Dude !!")
var age = prompt("What's your age ?");
if( age < 13 ) {
    console.log("You can play at your own risk");
} else {
    console.log("Welcome Bro !!")    
}

console.log("You are at a Justin Bieber concert, and you hear this lyric \'Lace my shoes off, start racing.\'");
console.log("Suddenly, Bieber stops and says, \'Who wants to race me?\'");
var userAnswer = prompt("Do you want to race Bieber on stage ?");

/*
The story heats up!
Now you have to create different scenarios. Good thing we know how to do that using if / else statements.

If userAnswer is "yes", print out: "You and Bieber start racing. It's neck and neck! You win by a shoelace!"

Otherwise, print out: "Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'"

Remember: = is for assignment, and === is to check if things are equal!

Instructions
Use an if / else statement to write out the last part of this game!

Make sure to check the console for error messages and suggestions for how to fix them.
*/

// Check if the user is ready to play!
confirm("Yeah !! Gotta Play .. Dude !!")
var age = prompt("What's your age ?");
if( age < 13 ) {
    console.log("You can play at your own risk");
} else {
    console.log("Welcome Bro !!")    
}

console.log("You are at a Justin Bieber concert, and you hear this lyric \'Lace my shoes off, start racing.\'");
console.log("Suddenly, Bieber stops and says, \'Who wants to race me?\'");
var userAnswer = prompt("Do you want to race Bieber on stage ?");
if( userAnswer === "yes") {
    console.log("You and Bieber start racing. It\'s neck and neck! You win by a shoelace!");
} else {
     console.log("Oh no! Bieber shakes his head and sings \'I set a pace, so I can race without pacing.\'");
}

/*
Asking for feedback
It is worthwhile asking your user for feedback!

Instructions
Create a variable called feedback and prompt the user to rate your game out of 10.

If feedback is greater than 8, print out: "Thank you! We should race at the next concert!"

Otherwise, print out:
"I'll keep practicing coding and racing."
*/

// Check if the user is ready to play!
confirm("Yeah !! Gotta Play .. Dude !!")
var age = prompt("What's your age ?");
if( age < 13 ) {
    console.log("You can play at your own risk");
} else {
    console.log("Welcome Bro !!")    
}

console.log("You are at a Justin Bieber concert, and you hear this lyric \'Lace my shoes off, start racing.\'");
console.log("Suddenly, Bieber stops and says, \'Who wants to race me?\'");
var userAnswer = prompt("Do you want to race Bieber on stage ?");
if( userAnswer === "yes") {
    console.log("You and Bieber start racing. It\'s neck and neck! You win by a shoelace!");
} else {
     console.log("Oh no! Bieber shakes his head and sings \'I set a pace, so I can race without pacing.\'");
}
var feedback = prompt("How do you rate my game in 1 to 10 ?");
if (feedback > 8 )
{
    console.log("Thank you! We should race at the next concert!");
}
else
{
    console.log("I\'ll keep practicing coding and racing.");
}

/* Choose Your Own Adventure! 
Next steps!
Congratulations! You have just programmed your first game. That is incredibly impressive.

Instructions
Hit Save & Submit Code to finish this course!
*/

/* ------------------------------------   Introduction to Functions in JS ---------------------------  */

/*

Introduction
Programming is simply a way to give instructions to the computer.

In Getting Started, we learned about if / else statements.

We want to keep learning ways to instruct the computer to perform repeatable tasks efficiently.

Instructions
Let's briefly review! Use an if / else to check how fast you're driving.

If speed is greater than 80, use console.log to print "Slow down"
Otherwise (else), use console.log to print "Drive safe"
?

*/

var speed = 65;

// Complete the condition in the ()s on line 4
if (speed > 80 ) {
	// Use console.log() to print "Slow down"
	console.log("Slow down");
} 
else {
	// Use console.log() to print "Drive safe"
    console.log("Drive safe");
}


/*
Introducing Functions
Programming is similar to baking cakes. Seriously! Imagine you are trying to teach your friend Jane how to bake many different types of cakes.

Each cake takes in different ingredients (ie. inputs). But the 'bake' instructions are always the same. For example:

Pre-heat the oven at 300 degrees
Mix all the ingredients in a bowl
Put contents into oven for 30 mins
And the output will be a different cake each time.

It is tedious to have to repeat to Jane the same 'bake' instructions every time. What if we could just say 'bake' and Jane would know to execute those three steps? That is exactly what a function is!

Instructions
Line 3 declares the function and gives it a name.
Focus on line 4 and line 5. The code within the curly brackets { } is the code we want to use again and again. (i.e. the 'bake' instructions)
Line 4 declares a variable called val. Line 5 prints the value of that variable.
On line 8-11, we explain what calling a function means.
On line 12, replace the 6 with any number and press Save & Submit Code. Do this a few times to see the beauty of functions!
*/

// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(6);

/*
Function syntax
A function takes in inputs, does something with them, and produces an output.

Here's an example of a function:

var sayHello = function(name) {
    console.log('Hello ' + name);
};
First we declare a function using var, and then give it a name sayHello. The name should begin with a lowercase letter and the convention is to use lowerCamelCase where each word (except the first) begins with a capital letter.
Then we use the function keyword to tell the computer that you are making a function
The code in the parentheses is called a parameter. It's a placeholder word that we give a specific value when we call the function. Click "Stuck? Get a hint!" for more.
Then write your block of reusable code between { }. Every line of code in this block must end with a ;.
You can run this code by "calling" the function, like this:

sayHello("Emily");
Calling this function will print out Hello Emily.

Instructions
On line 11, call the greeting function and put in a name that you want the greeting function to include.
Press "Save & Submit Code" and see the function get into action! Saves you so much time.
*/

// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!
greeting("Subhodeep Majumder");


/*
How does a function work?
Let's break down exactly how a computer thinks when it sees the code for a function.

var functionName = function( ) {
    // code code code
    // code code code
    // (more lines of code)
};
The var keyword declares a variable named functionName.
The keyword function tells the computer that functionName is a function and not something else.
Parameters go in the parentheses. The computer will look out for it in the code block.
The code block is the reusable code that is between the curly brackets { }. Each line of code inside { } must end with a semi-colon.
The entire function ends with a semi-colon.
To use the function, we call the function by just typing the function's name, and putting a parameter value inside parentheses after it. The computer will run the reusable code with the specific parameter value substituted into the code.

Instructions
Let's make a function that tells the world what you want to eat.

Declare your function and call it foodDemand.
You can call the parameter anything you like. But we'll call it food because that is the thing that is going to change each time we call the function.
Your reusable block of code follow this. Surround it with the right brackets. The code you want to repeat is: console.log("I want to eat" + " " + food);
Call the function and put in a specific food you want!
*/

// Write your foodDemand function below.
// Last hint: In your reusable block of code, end each line
// with a semicolon (;)
var foodDemand = function(food) {
        console.log("I want to eat" + " " + food);
    };
foodDemand("Fuchka");

/*
Tying it all together
Why is the code organized like it is on lines 2-5?

The computer can understand the code without such spacing. But it makes editing a lot easier and is best practice.

Do I have to put a semi-colon at the end of each line of code in the reusable block? And at the end of the entire function?

Yes. At the end of each line of code (within the { }) and after the entire function (after the { }), please put a semi-colon. The semi-colon acts like a period in a sentence. It helps the computer know where there are stopping points in the code.

Instructions
A big part of programming is debugging. That just means figuring out what the heck went wrong with your code. Why didn't it run?

Look at line 9. It has many syntax errors. See how lack of spacing makes debugging hard?
Fix the function on line 9. Make sure the syntax is right. Make sure it looks nice.
Call the greeting function once it is fixed! Don't forget to pass in a specific name.

*/

// Nicely written function:
var calculate = function (number) {
    var val = number * 10;
    console.log(val);
};

// Badly written function with syntax errors!

var greeting =  function (name) {
    console.log("Hi " + name);
    }
greeting("Subho");

/*
Don't Repeat Yourself (D.R.Y)
The D.R.Y. principle is really important in programming. No repeating!

Any time you find yourself typing the same thing, but modifying only one small part, you can probably use a function.

The 'small part' that you find yourself modifying will be the parameter. And the part that you keep repeating will be the code in the reusable block - the code inside { }.

Instructions
You are a creature of habit. Every week you buy 5 oranges. But orange prices keep changing!

You want to declare a function that calculates the cost of buying 5 oranges.
You then want to calculate the cost of the 5 all together.
Write a function that does this called orangeCost().
It should take a parameter that is the cost of an orange, and multiply it by 5.
It should log the result of the multiplication to the console.
Call the function where oranges each cost 5 dollars.
*/

var orangeCost = function (orangePrice) {
    var totalCost = orangePrice * 5;
    return totalCost;
    };


console.log("Total cost for 5 oranges = " + orangeCost(5));