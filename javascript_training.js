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

/*
Return keyword
Nice job! Now, when we call a function, we don't always want to just print stuff. Sometimes, we just want it to return a value. We can then use that value (ie. the output from the function) in other code. Let's learn about the return keyword, then we'll see how to use functions with an if / else statement in the next exercise!

The return keyword simply gives the programmer back the value that comes out of the function. So the function runs, and when the return keyword is used, the function will immediately stop running and return the value.

Instructions
In our example we have a function called timesTwo() that takes in a number and returns the number multiplied by two.

On line 7, after the equals sign, call the function timesTwo with any parameter you want
Line 8 prints out newNumber. Notice how the value we return from timesTwo() is automatically assigned into newNumber.
*/

// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(4)
console.log(newNumber);

/*
Functions, return and if / else
When we call a function, its return value is just the result from running the function. That value can then be used just like any other value in JavaScript!

Look at the if statement starting on line 7. The if statement is checking whether the result of calling the function named quarter is divisible by 3.

Instructions
Define a function called quarter which has a parameter called number.
This function returns a value equal to one quarter of the parameter. (i.e. number / 4;)
Call the function inside the if statement's condition (and put in a parameter value!) such that "The statement is true" is printed to the console.
*/

// Define quarter here.
var quarter = function (number) {
  var result = number / 4;
  return result;
};




if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}


/*
Functions with two parameters
So far we've only looked at functions with one parameter. But often it is useful to write functions with more than one parameter. For example, we can have the following function:

var areaBox = function(length, width) {
    return length * width;
};
With more than one parameter, we can create more useful functions

To call a function with more than one parameter, just enter a value for each parameter in the parentheses. For example, areaBox(3,9); would return the area of a box with a length of 3 and a width of 9.

Instructions
Write a function called perimeterBox that returns the perimeter of a rectangle.
It should have two parameters.
One formula for perimeter is length + length + width + width;
Call the function and pass in any value for length and width you like.
*/

// Write your function starting on line 3

var perimeterBox = function(length,breadth) {
        return 2*(length + breadth);
};

var areaRectangle = perimeterBox(20,25);
console.log(areaRectangle);


/*
Global vs Local Variables
Let's talk about an important concept: scope. Scope can be global or local.

Variables defined outside a function are accessible anywhere once they have been declared. They are called global variables and their scope is global.

For example:

var globalVar = "hello";

var foo = function() {
    console.log(globalVar);  // prints "hello"
}
The variable globalVar can be accessed anywhere, even inside the function foo.

Variables defined inside a function are local variables. They cannot be accessed outside of that function.

For example:

var bar = function() {
    var localVar = "howdy";
}

console.log(localVar);  // error
The variable localVar only exists inside the function bar. Trying to print localVar outside the function gives a error.

Check out the code in the editor. Until now you've been using the var keyword without really understanding why. The var keyword creates a new variable in the current scope. That means if var is used outside a function, that variable has a global scope. If var is used inside a function, that variable has a local scope.

On line 4 we have not used the var keyword, so when we log my_number to the console outside of the function, it will be 14.

Instructions
Change line 4 to use the var keyword. Notice that the value of my_number in the function is now 14 and outside the function is 7.

Using my_number without the var keyword refers to the global variable that has already been declared outside the function in line 1. However, if you use the var keyword inside a function, it declares a new local variable that only exists within that function.
*/

var my_number = 7; //this has global scope

var timesTwo = function(number) {
    my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);

var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);

/*
Functions recap
Okay let's review. You have learned a lot about functions today. We better not forget it all!

We first discovered how to use functions to perform the same piece of logic repeatedly, without having to type the same code again. This saves you time!

Instructions
Write a function called nameString()
It should take name as a parameter.
The function returns a string equal to "Hi, I am" + " " + name.
Call nameString() by passing it your name, and use console.log to print the output.
*/

var nameString = function (name) {
    return "Hi, I am" + " " + name;	
	
};

console.log(nameString("Subhodeep Majumder"));

/*
The Game
Rock paper scissors is a classic 2 player game. Each player chooses either rock, paper or scissors. The possible outcomes:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
Our code will break the game into 3 phases:
a. User makes a choice
b. Computer makes a choice
c. A compare function will determine who wins

User Choice
We start by first asking the user which option they want to pick. We will later use this choice in the compare function to determine the winner.

Instructions
Declare a variable called userChoice.
Make the variable equal to the answer we get by asking the user "Do you choose rock, paper or scissors?"
?

Computer Choice: Part 1
Awesome! We now need the computer to make a choice. The game is only going to be fun if the computer chooses randomly. Luckily JavaScript has something that can help with this.

If we declare a variable and make it equal to Math.random(), that variable will equal a number between 0 and 1.

Instructions
Under your previous code, declare a variable called computerChoice and make it equal to Math.random().
Print out computerChoice so you can see how Math.random() works. This step isn't needed for the game - just useful for learning!

Computer Choice: Part 2
We have computerChoice but it now equals a random number between 0 and 1. We need to somehow translate this random number into a random choice of rock, paper, or scissors. How do we do this?!

If computerChoice is between 0 and 0.33, make computerChoice equal to "rock".
If computerChoice is between 0.34 and 0.66, make computerChoice equal to "paper".
If computerChoice is between 0.67 and 1, make computerChoice equal to "scissors".
But there are three outcomes! Using if / else only lets us have two outcomes. What now?! We need to use if / else if / else. See the hint for the full syntax. You will laugh at how easy it is.

Instructions
Under your existing code, write out the if / else if / else statement.
In the respective code blocks, change the value of computerChoice based on the rules stated above. Remember, you do NOT have to use var when changing the value of a variable that already exists.

*/

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if ( computerChoice >= 0 ) && ( computerChoice <= 0.33 ) {
    computerChoice = "rock";
}
else if ( computerChoice >= 0.34 ) && ( computerChoice <= 0.66 ) {
    computerChoice = "paper";
}
else {
    computerChoice = "scissors";
}


var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
/* 
Both choices are the same!
Now comes the fun part! We need to create a function. It will take two parameters (ie. the two choices made) and then return the winning choice.

When programming a game like this, you have to first figure out all the various outcomes. One outcome is that the choice the user makes is equal to the choice the computer makes.

Instructions
We carried over the code from the previous section, but it is a comment. Leave it there for now.
Below the comment, declare a function called compare.
It takes two parameters, choice1 and choice2.
Inside the function, write an if statement. If choice1 === choice2, then return "The result is a tie!"
*/

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);


var compare = function ( choice1, choice2 ) {
    if(choice1 === choice2)
    {
       return ("The result is a tie!");
    }
};

console.log(compare(userChoice, computerChoice));

/*
What if choice1 is rock?
You're doing great! Now we consider the other scenarios. Let's break the problem down a little. What if choice1 is "rock"? Given choice1 is "rock",

a. if choice2 === "scissors", then "rock" wins.
b. if choice2 === "paper", then "paper" wins.

How do we structure this? It's a bit different from what we have already seen. We will first have an if statement. And then the code inside that if statement will be... another if statement!

Instructions
Let's code our outline from above:

Inside the compare() function under the existing code, write an else if statement where the condition is choice1 === "rock".
Inside this else if statement, write an if / else statement. If choice2 === "scissors", return "rock wins". Else, return "paper wins".
*/

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);


var compare = function ( choice1, choice2 ) {
    if(choice1 === choice2)
    {
       return ("The result is a tie!");
    }
    if(choice1 === "rock")
    {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
};

console.log(compare(userChoice, computerChoice));

/*
What if choice1 is scissors?
Lastly, what if choice1 is "scissors"? Given choice1 is "scissors",

a. if choice2 === "rock", then "rock" wins.
b. if choice2 === "paper", then "scissors" wins.

Instructions
Under your old code, use the same structure as the past two exercises and finish off your function.
We need to use the variables userChoice and computerChoice. Uncomment the first lines of the code by deleting  on line 1 and  on line 9, the variables are now active and can be called.
Call your function and pass in userChoice and computerChoice as your two arguments.
Press Save & Submit Code and your game should work! Congratulations!
*/

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);


var compare = function ( choice1, choice2 ) {
    if(choice1 === choice2)
    {
       return ("The result is a tie!");
    }
    if (choice1 === "rock")
    {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    else if (choice1 === "scissors")
    {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
};

console.log(compare(userChoice, computerChoice));

/*
Next Steps
Congratulations on making your awesome game! But now comes the best bit. You have the skills to build a game of your own design! Below are some ideas:

What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that?

What if players in the game could also choose Rope in this game?

In this version, if both players make the same choice, the game returns a tie. What if the game didn't end there but instead asked both players for new choices?

Instructions
Why not put the skills you've learned in this project to make your own game? Enjoy!
*/

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);


var compare = function ( choice1, choice2 ) {
    if(choice1 === choice2)
    {
       return ("The result is a tie!");
    }
    if (choice1 === "rock")
    {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    else if (choice1 === "scissors")
    {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
    else if (choice1 === "paper")
    {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    else
    {
        return("You have chosen a wrong choice");
    }
};

console.log(compare(userChoice, computerChoice));

/*

Why use for loops?
We are learning how to program because we don't want to do boring, repetitive work! The computer should do that.

This first exercise is a good example of exactly why you want to learn for loops.

Use five console.log statements to print out the numbers 1 to 5.
Try not getting angry at me for this annoying exercise.
Head over to the next exercise to see how we can use for loops to do this task more efficiently.

*/

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

/*
First for loop
Instead of manually typing in console.log five times, we can use a for loop to do this. The aim of this exercise is just to show you how a for loop looks, and demonstrate how useful it is. Subsequent exercises will

a. walk you through the syntax bit by bit
b. explain how the computer thinks as it executes a for loop.

We initially focus on using for loops just to count numbers to keep things simple. But by section 3, we will show you how to do more fancy things!

Instructions
The for loop in the code will print out 1 to 5 and use far less code than you used in the previous exercise.
Change the 6 to 11 and press Save & Submit Code. This will see the computer print out 1 to 10!

*/

// Example of a for loop:

 // Example of a for loop:
    
    for (var counter = 1; counter < 11; counter++) {
    	console.log(counter);
    }

/*
Starting the for loop
Congratulations! You've just run your first for loop. But what you're probably really keen to do is write your own for loop. Below is the general syntax of the for loop. We want to focus on the first line in the next few exercises.

Syntax

for (var i = 1; i < 11; i = i + 1) {
     your code here 
}
Every for loop makes use of a counting variable. Here, our variable is called i (but it can have any name). The variable has many roles. The first part of the for loop tells the computer to start with a value of 1 for i. It does this by declaring the variable called i and giving it a value of 1.

When the for loop executes the code in the code block—the bit between { }—it does so by starting off where i = 1.

Instructions
This for loop starts off at 1 and will end at 10.
Change the for loop such that it will start off at 5!
*/


/*
Ending the for loop
We know how to control where the for loop starts. How do we control where it ends? Well, the second part of the for loop determines that.

Syntax

    for (var i = 1; i < 11; i = i + 1) {
        code code code; 
    }
Here, this for loop will keep running until i = 10 ( i.e. while i < 11). So when i = 2, or i = 9, the for loop will run. But once i is no longer less than 11, the loop will stop.

Instructions
We know this for loop counts from 1 to 10.
Change this for loop such that it starts at 4.
Change this for loop such that it counts up to and including 23. ( i.e. we do NOT want 24 to be printed out!)
Run your for loop and see it count from 4 to 23!
?

*/

// Edit this for loop

for (var i = 4; i <= 23; i = i + 1) {
	console.log(i);
}

/*
Controlling the for loop
We can now control where the for loop starts and ends. What about controlling what happens in between?

The examples we've looked at have used i = i + 1. This has meant we have incremented (increased) the variable i by 1 each time.

Rules to learn

a. A more efficient way to code to increment up by 1 is to write i++.
b. We decrement down by 1 by writing i--.
c. We can increment up by any value by writing i += x, where x is how much we want to increment up by. e.g., i += 3 counts up by 3s.
d. We can decrement down by any value by writing i -= x. (See the Hint for more.)
e. Be very careful with your syntax—if you write a loop that can't properly end, it's called an infinite loop. It will crash your browser!

Instructions
This code counts every number from 0 to 35.
Make it start counting from 5. Please!
Stop the counting when it prints out 50.
Only count every fifth number. So we want to increment i by 5.
*/

// Edit this for loop!

for (var i = 5; i <= 50; i+=5) {
	console.log(i);
}

 /*
How does it work?
We've gone through the three bits of syntax for a for loop. But how exactly does it work? Let's imagine the steps the computer takes to run the for loop on the right.

It starts off with i = 2
It then asks: Is i currently less than 13? Because i = 2, this is true and we continue.
We do NOT increment now. Instead, if the condition is met, we run the code block.
Here, the code block prints out the value of i. It is currently 2 so 2 will be printed out.
Once the code block is finished, the for loop then increments / decrements. Here, we add 1.
Now i = 3. We check if it is less than 13. If it is true, we run the code block.
The code block runs, and then we increment.
We repeat these steps until the condition i < 13 is no longer true.
Instructions
Make the computer start counting at 8.
Keep counting while i < 120.
Count up by increments of 12.
Remember, if you accidentally make a loop that never ends, your browser will crash!
 */

 // Example for loop

for (var i = 8 ; i < 120; i+=12) {
	console.log(i);
}

/*
Practice counting down
for loops only run when the condition is true.

Do not run the code without changing it!

It is important that there is a way for the for loop to end. If the for loop is always going to be true, then you will be stuck in an infinite loop and your browser will crash! Look at the code. It is bad.

a. It begins at i = 1. 
b. It will keep going as long as i >= 1.
c. Because now i = 1, the code will run.

d. We increment i by 1 and now i = 2. This satisfies the condition. We run the code. 
e. Increment i by 1 and now i = 3. This satisfies the condition that i >= 1. We run the code.
f. We will keep incrementing the code up by 1. It will always satisfy the condition. The loop NEVER ends. This will crash your computer!

Instructions
Change this code such that it starts counting from 10.
We want it to stop once it gets to 0.
We want it to count down by 1.
In the end, the numbers 10..0 inclusive, should be printed.
*/

// Example of infinite loop. THIS WILL CRASH YOUR
// BROWSER. Don't run the code without changing it!

for (var i = 1; i >= 1; i++) {
	console.log(i);
}



for (var i = 10; i >= 0; i--) {
	console.log(i);
}

/*
Last practice for loop
You have a great handle on for loops now! This will be the last practice one before we look at cool ways to use them.

The next exercise introduces you to arrays. So instead of just counting numbers up and down, we can make the computer do many more interesting things with loops.

Instructions
Once more, for practice: write a for loop that gets the computer to count down from 100 until 0 by 5. This time, make sure not to print 0.
*/

// Write your very own for loop!
for (var i=100; i>0; i-=5)
{
    console.log(i);
}

/*
Meet arrays
Variables can store numbers or strings. But so far, we've only been able to store ONE number or ONE string. Good thing we have arrays. Arrays:

a. store lists of data
b. can store different data types at the same time
c. are ordered so the position of each piece of data is fixed

Example:

var names = ["Mao","Gandhi","Mandela"];

var sizes = [4, 6, 3, 2, 1, 9];

var mixed = [34, "candy", "blue", 11];
Syntax:
var arrayName = [data, data, data];

Any time you see data surrounded by [ ], it is an array.

Instructions
Make your own array called junk. Put 4 bits of data in it (first 2 strings, then 2 numbers).

Declare it using var.
Put [ ] around your data.
Separate each bit of data with a comma.
End it with a semi-colon.
Use console.log to print out junk.
*/

var junk = ["five","two",5,2];
console.log(junk);

/*
Array positions
It's nice that we can put a list of data into an array. But now we need to learn how to get access to the data inside the array.

The position of things in arrays is fixed. So we just need to know the array name (here, it is junkData), and the position of the data we want, and we're done.

Small complication: the position (or the index) of each bit of data is counted starting from 0, not 1.

First element in the array: junkData[0]
Third element in the array: junkData[2]
Arrays have 0-based indexing, so we start counting the positions from 0.

Instructions
Print out the fourth element of the array. 
1. Start with figuring out how to express what the fourth element in the array is.
2. Then use console.log() to print things out!
*/

// Practice array!

var junkData = ["Eddie Murphy", 49, "peanuts", 31];
console.log(junkData[3]);	

/*
Loops and arrays I
Awesome job! You've now learned about arrays, and how to access one element of the array. But what if there were 100 elements in the array?

For arrays, a useful way to systematically access every element in the array is to use a for loop!

How does it work?

1. Line 3 declares the array. It has 4 elements.
2. We then start the for loop on line 5.
3. We see i starts off at value 0. 
4. The for loop runs until i < 4 (because cities.length equals 4. The array cities has 4 elements in it; see the Hint for more.)
5. We will increment i by 1 each time we loop over.
6. We print out cities[0], which is "Melbourne".
7. We then start the loop again. Except now i = 1. 
8. It will print out cities[1], which is "Amman". 
9. This continues until i is no longer less than cities.length.

Instructions
Change the elements in the cities array. You can put in as many elements as you like.
Run the for loop and see them all printed out!
*/

// Let's print out every element of an array using a for loop

var cities = ["Melbourne", "Amman", "Helsinki", "NYC"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

// Let's print out every element of an array using a for loop

var cities = ["Melbourne", "Amman", "Helsinki", "NYC","Kolkata","MUmbai"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

/*
Loops and arrays II
It's time for you to write your own array and loop over the array. Remember to:

Put commas between each element in the array.
Put semi-colons between each bit of the for loop.
We suggest you use i as the iterator.
Beware of infinite loops!
Enjoy yourself while smashing through this coding!
Instructions
Create an array called names filled with 5 names.
Write a for loop that prints "I know someone called " followed by names[i]. Make sure there's a space between "called" and the name!
Run your code and the five sentences should print out.
Click "Stuck? Get a hint!" for an example of how to write a for loop.
*/

/*
Loops and arrays II
It's time for you to write your own array and loop over the array. Remember to:

Put commas between each element in the array.
Put semi-colons between each bit of the for loop.
We suggest you use i as the iterator.
Beware of infinite loops!
Enjoy yourself while smashing through this coding!
Instructions
Create an array called names filled with 5 names.
Write a for loop that prints "I know someone called " followed by names[i]. Make sure there's a space between "called" and the name!
Run your code and the five sentences should print out.
Click "Stuck? Get a hint!" for an example of how to write a for loop.
*/

// Click on "Stuck? Get a hint!" if you get stuck!

var names = ["Ram","Krishna","Parashuram","Buddha","Baman"];

for (var i=0; i<names.length; i++)
{
    console.log("I know someone called " + names[i]);
}


/* -------------------  Search Text for Your Name -----------------------*/

/*
What you'll be building
In this project, you'll be writing a short program that checks a block of text for your name.

Specifically, it will check the text for the first letter of your name, then push (add) the number of characters equal to your name's length to an array. By inspecting the array, you'll be able to see if your name was mentioned!

Once you've got the hang of loops, arrays, and if statements, we'll talk about ways this project could be improved.

Instructions
Some of this code will be new to you, but don't worry—we'll go through it step-by-step. Ready? Click Save & Submit Code to begin!
*/

/*jshint multistr:true */

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}

/*
Declare your variables
We'll start by declaring the three variables we'll be using: text, myName, and hits.

Since text could be quite long, you can use a backslash (\) at the end of each line to make your string "wrap" to the next line, like this:

var text = "Hey, how are you \
doing? My name is Emily.";
In this way, using backlashes (\) is useful because you can avoid really long lines!

You can ignore the /*jshint... line for now. All that does is tell the console to stop worrying about our use of backslash characters for wrapping long lines of text.

Instructions
Declare and set the following three variables:

text, and make it a string containing some text. Place your name in there a couple of times!
myName, and make it a string containing just your name.
hits, and make it an empty array.
Click "Stuck? Get a hint!" if you want to look at examples for declaring and setting variables.

Your second "for" loop
Okay! Last loopy step: add another for loop, this time inside the body of your if statement (between the if's {}s).

This loop will make sure each character of your name gets pushed to the final array. The if statement says: "If we find the first letter of the name, start the second for loop!" This loop says: "I'm going to add characters to the array until I hit the length of the user's name." So if your name is 11 letters long, your loop should add 11 characters to hits if it ever sees the first letter of myName in text.

For your second for loop, keep the following in mind:

First, you'll want to set your second loop's iterator to start at the first one, so it picks up where that one left off. If your first loop starts with

for(var i = 0; // rest of loop setup
your second should be something like

for(var j = i; // rest of loop setup
Second, think hard about when your loop should stop. Check the Hint if you get stuck!

Finally, in the body of your loop, have your program use the .push() method of hits. Just like strings and arrays have a .length method, arrays have a .push() method that adds the thing between parentheses to the end of the array. For example,

newArray = [];
newArray.push('hello');
newArray[0];   // equals 'hello'
Instructions
Okay! Go ahead and add that second for loop inside the body of your if statement.
*/

var text = "Hi This is Subhodeep Majumder. I have my name Subhodeep Majumder from my father. The name Subhodeep is the actual name" ;

var myName = "Subhodeep Majumder";
var hits = [];

for( var i = 0; i < text.length; i++)
{
    if(text[i] === "S")
     {
        for(var j=i; j < (myName.length + i); j++)
         {
             hits.push(text[j]);
         }
         
      }
}

/*
Log it!
Perfect! You've now got the engine of your search program running. It will:

Loop through the array,
Compare each letter to the first letter of your name, and if it sees that letter:
It will push that letter and all the letters that follow it to an array, stopping when the number of letters it pushes are equal to the number of letters in your name.
*/

/*jshint multistr:true */

var text = "Hi This is Subhodeep Majumder. I have my name Subhodeep Majumder from my father. The name Subhodeep is the actual name" ;

var myName = "Subhodeep";
var hits = [];

for( var i = 0; i < text.length; i++)
{
    if(text[i] === "S")
     {
        for(var j=i; j < (myName.length + i); j++)
         {
             hits.push(text[j]);
         }
         
      }
}

if(hits.length == 0)
{
    console.log("Your name wasn't found!");
}
else
{
    console.log(hits);    
}

/*
While we're at it
Great work with for loops! As a reminder, for loop syntax looks like this:

for (var i = start; i < end; i++) {
  // do something
}
The counter variable i starts at "start", and stops looping when it reaches "end."

But what if you didn't know ahead of time when to stop looping? Say, for example, you wanted to keep choosing playing cards from a deck until you get a spade. You don't know how many cards you'll need to choose, so a for loop won't work.

In situations like these where you don't know in advance when to stop looping, we can use a while loop.

Instructions
Check out the while loop in the editor. Can you guess what it will do? Hit "Save & Submit Code" when you think you know! (The answer is in the Hint.)

Don't worry about the Math.floor bit for now—we'll explain it soon!

?

*/

var coinFace = Math.floor(Math.random() * 2);
console.log(coinFace);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");

/*
While we're at it
Great work with for loops! As a reminder, for loop syntax looks like this:

for (var i = start; i < end; i++) {
  // do something
}
The counter variable i starts at "start", and stops looping when it reaches "end."

But what if you didn't know ahead of time when to stop looping? Say, for example, you wanted to keep choosing playing cards from a deck until you get a spade. You don't know how many cards you'll need to choose, so a for loop won't work.

In situations like these where you don't know in advance when to stop looping, we can use a while loop.

Instructions
Check out the while loop in the editor. Can you guess what it will do? Hit "Save & Submit Code" when you think you know! (The answer is in the Hint.)

Don't worry about the Math.floor bit for now—we'll explain it soon!
*/

var coinFace = Math.floor(Math.random() * 2);
console.log(coinFace);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");

/*
While syntax
The while loop is ideal when you want to use a loop, but you don't know how many times you'll have to execute that loop.

In the example you just saw, the computer was randomly flipping a coin: while the coin came up heads (when coinFace equalled 0), it would flip again, and it would stop flipping once it got tails (when coinFace was 1). Since the flip was random, we didn't know ahead of time how many loops we'd need.

The syntax looks like this:

while(condition){
    // Do something!
}
As long as the condition evaluates to true, the loop will continue to run. As soon as it's false, it'll stop. (When you use a number in a condition, as we did earlier, JavaScript understands 1 to mean true and 0 to mean false.)

Since you've already mastered for loops, this simpler syntax should be a breeze for you.

Instructions
Try it yourself—complete the while loop in the editor so it will print out "I'm learning while loops!". Do this by adding the condition between the parentheses—don't change line 5, or you could get an infinite loop!
*/

var understand = true;

while( understand ){
	console.log("I'm learning while loops!");
	understand = false;
}

/*
Practice makes perfect
Okay. Time for you to create a while loop from scratch!

We've set up a function, loop, for you to write your while loop in, as well as created the empty loop.

Remember to set up the condition you're checking outside the loop—if you do it in the loop, it will keep resetting and the loop could go on forever!

Instructions
Write a while loop that logs "I'm looping!" to the console three times. You can do this however you like, but NOT with three console.log calls. Check the Hint if you need help!
*/

//Remember to set your condition outside the loop!


var loop = function(num){
	while(num){
		//Your code goes here!
		console.log("I'm looping!");
		num--;
	}
};

loop(3);

/*
Solo flight
Great work! Let's try another. This time, no help at all! (Well, some help—check the Hint if you get stuck.)

Instructions
Inside the soloLoop function, write a while loop that takes an initial condition that's true. Your loop should log "Looped once!" to the console, then change that initial condition to false.

MAKE SURE to set your condition to false in the body of your loop. Otherwise, you'll loop forever!
*/

//Remember to make your condition true outside the loop!

var soloLoop = function(){
  //Your code goes here!
  var value = true;
  while(value)
  {
      console.log("Looped once!");
      value = false;
    }
  
};

soloLoop();

/*
When to 'while' and when to 'for'
As we mentioned, for loops are great for doing the same task over and over when you know ahead of time how many times you'll have to repeat the loop. On the other hand, while loops are ideal when you have to loop, but you don't know ahead of time how many times you'll need to loop.

As you saw, however, you can combine a while loop with a counter variable to do the same kind of work a for loop does. In these cases, it's often a matter of preference.

Instructions
Write two loops in the editor: one while, one for. No restrictions on this one; just make sure your loops are syntactically correct, and be careful to avoid infinite loops!
*/

var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);

/* --------------------------------   Dragon Slayer!    ----------------------------------  */

/*
What you'll be building
Now that you know how to use while loops, we'll combine them with some other control flow statements (like if/else) to create a dragon slaying mini game.

In this game, you’ll battle a dragon. It will take 4 hits to slay the dragon, and if you miss even one hit, the dragon will defeat you!

Instructions
Check out the code in the editor. Do you understand how it works? (No worries if not—we'll go through it step-by-step!)

Run it a few times to see how you fare against the dragon!

*/

var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
console.log(youHit);
console.log(damageThisRound);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}

/*
Declare your variables
All right! Let's start by declaring the variables we'll be using. We'll need:

a variable to check if we're still slaying
a variable to check if we hit the dragon
a variable to keep track of how much damage we've dealt the dragon this round
a variable to keep track of total damage
Instructions
Declare and set the following variables:

slaying equal to true
youHit to Math.floor(Math.random() * 2). This sets youHit to a random number that's either 0 (which JavaScript reads as false) or 1 (which JavaScript reads as true).
damageThisRound to Math.floor(Math.random()*5 + 1). This sets damageThisRound to a random number that's between 1 and 5 (up to and including 5).
totalDamage to 0
Click on "Stuck? Get a hint!" for more details on how Math.floor(Math.random()*5 + 1) works.

?
Hint
How does this code work?

Math.floor(Math.random() * 5 + 1);
First we use Math.random() to create a random number from 0 up to 1. For example, 0.5
Then we multiply by 5 to make the random number from 0 up to 5. For example, 0.5 * 5 = 2.5
Next we use Math.floor() to round down to a whole number. For example, Math.floor( 2.5 ) = 2
Finally we add 1 to change the range from between 0 and 4 to between 1 and 5 (up to and including 5)
*/

var slaying = true;
var myHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;


/*
The 'while' loop
Awesome! Now let's add in our while loop. We want to run the whole game as long as we're trying to kill the dragon—that is, while slaying is true.

When checking variables like slaying that are set to true, you don't need to write something like:

while(slaying === true)
You can just write

while(slaying)
It also helps to give your variables names that make the code look more like regular English. while(slaying) { Do this } is easy to remember because it's so close to everyday speech!

Instructions
Create a while loop that only executes when slaying is true. For this exercise, set slaying to false in the body of the loop. (We want to make sure the loop can exit—no infinite loops for us!)
*/

var slaying = true;
    var myHit = Math.floor(Math.random() * 2);
    var damageThisRound = Math.floor(Math.random() * 5 + 1);
    var totalDamage = 0;
    
    while (slaying)
    {
        slaying = false;    
    }



    var slaying = true;
    var myHit = Math.floor(Math.random() * 2);
    var damageThisRound = Math.floor(Math.random() * 5 + 1);
    var totalDamage = 0;
    
    while (slaying)
    {
        if (myHit) {
            console.log("Congratulation you have hit the dragon");
            slaying = false;
        }
        else  {
           console.log("Dragon beat you");
           slaying = false;
        }    
        
         
    }
