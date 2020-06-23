// Question no: 1 
var number = prompt("Enter a Number (floating point) : ");
number = Number(number);
if(number > 0)
{
    document.write("Number : " + number + "<br>");
    document.write("Round off value : " + Math.round(number) + "<br>");
    document.write("Floor value : " + Math.floor(number) + "<br>");
    document.write("Ceil value : " + Math.ceil(number)  + "<br>");
}
else {
    alert("Number should be non-negative.");
}


// Question no: 2 
var number = prompt("Enter a Number (floating point) : ");
number = Number(number);
if(number <= 0)
{
    document.write("Number : " + number + "<br>");
    document.write("Round off value : " + Math.round(number) + "<br>");
    document.write("Floor value : " + Math.floor(number) + "<br>");
    document.write("Ceil value : " + Math.ceil(number)  + "<br>");
}
else {
    alert("Number is non-negative.");
}

// Question no: 3 
var number = prompt("Enter a Number (positive or negative: " + "<br>");

document.write("The absolute value of : " + Math.abs(number)  + "<br>");


// Question no: 4 
document.write("random dice value : " + Math.floor(Math.random() * 11)  + "<br>");

document.write("random dice value : " + Math.floor(Math.random() * 11)  + "<br>");


// Question no: 5 
var coin = Math.floor(Math.random() * 2) + 1;
if(coin == 2)
{
    document.write(coin  + "<br>");
    document.write("random coin value : Heads"  + "<br>");
}
else if(coin == 1)
{
    document.write(coin );
    document.write("random coin value : Tails"  + "<br>");
}


// Question no: 6 
document.write("random number between 1 and 100 is : " + Math.floor(Math.random() * 101)  + "<br>");


// Question no: 7 
var weight = prompt("Enter your weight in kilograms : ");
weight = weight.split("kgs" || "kilograms");
weight = parseInt(weight);
document.write("The weight of user is : " + weight + " kilograms " + "<br>");


// Question no: 8 
var secretNumber = Math.floor(Math.random() * 11) + 1;

while(userChoice != secretNumber)
var userChoice = prompt("Enter a number between 1 and 10 : ");
{
    if(parseInt(userChoice) == parseInt(secretNumber))
    {
        alert("Congrats! You guessed it right.");
    }
    else{
        alert("Sorry! Try again.");
    }
}