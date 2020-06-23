// Question no: 1
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

var fullName = firstName + " " + lastName;

alert(" Hello! Welcome " + fullName);


// Question no: 2
var favPhone = prompt("What is your favorite Mobile Phone?");
document.write("<h2>My favorite Phone is : " + favPhone + "</h2>");
document.write("<h2>Length of the String : " + favPhone.length + "</h2>");

// Question no: 3
var myCountry = "Pakistan";
document.write("<h2>String : " + myCountry + "</h2>");
document.write("<h2>Index of 'n' : " + myCountry.indexOf('n') + "</h2><br>");


// Question no:4
var greetings = "Hello World";
document.write("<h2>String : " + greetings + "</h2>");
document.write("<h2>Last Index of 'l' : " + greetings.lastIndexOf('l') + "</h2><br>"); 


// Question no: 5 
var myNationality = "Pakistani";
document.write("<h2>String : " + myNationality + "</h2>");
document.write("<h2>Character at Index 3 : " + myNationality.charAt(3) + "</h2><br>");

// Question no: 6 
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

var fullName =  firstName.concat(" ", lastName);

alert("Welcome " + fullName);


// Question no: 7 
var city = "Karachi";
document.write("<h2>City : " + city + "</h2>");
document.write("<h2>After Replcement : " + city.replace("Hyder","Islam") + "</h2><br>");

// Question no: 8 
var message = "Quyyum and Amir are best friends. They play cricket together.";
document.write("<h2>After Replcement : " + message.replace(/and/g, "&") + "</h2><br>");


// Question no: 9 
var num = "472";
document.write("<h2>Value : " + num + "</h2>");
document.write("<h2>Type : " + typeof(num) + "</h2><br>");
num = Number(num);
document.write("<h2>Value : " + num + "</h2>");
document.write("<h2>Type : " + typeof(num) + "</h2><br>");


// Question no: 10 
var str = prompt("Enter something : ");
document.write("<h2>User Input : " + str + "</h2>");
document.write("<h2>Upper Case : " + str.toUpperCase() + "</h2><br>");

// Question no: 11 
var str = prompt("Enter something : ");
document.write("<h2>User Input : " + str + "</h2>");
document.write("<h2>Title Case : " + str[0].toUpperCase() + str.substring(1) + "</h2><br>");

// Question no: 12 
var num = 35.36 ;
document.write("<h2>Number : " + num + "</h2>");
num = num.toString();
document.write("<h2>Result : " + num.replace('.',"") + "</h2><br>");


// Question no: 13 
var userName=prompt("Enter your Username : ");
var message;
var split=[];
var arr=[];
for(var i = 0;i < userName.length; i++)
{
    split[i]=userName.split("&nbsp;");
    arr[i]=userName.charCodeAt(i);
    if(arr[i]!=33 || arr[i]!=44 || arr[i]!=46 || arr[i]!=64)
    {
            message="Username is correct!";
    }
    while(arr[i]==33 || arr[i]==44 || arr[i]==46 || arr[i]==64)
    {
        alert("please enter a valid userName");                                                                                                                   
        userName=prompt("Enter your Input: ");
        for(var i=0;i<userName.length;i++)
        {
            split[i]=userName.split("&nbsp;");
            arr[i]=userName.charCodeAt(i);
            if(arr[i]!=33 || arr[i]!=44 || arr[i]!=46 || arr[i]!=64)
            {
                break;
            }
        }
    }
}
alert(message);


// Question no: 14 
var dishes = ["gulab jamun ", "apple pie", "biscuit", "rusk", "chicken patties"]; 
var searchDish = prompt("Hello! Welcome to Khalid Bakery, what do you want to order sir/mam? ");
var found = dishes.includes(searchDish);
if(found)
{
    document.write(searchDish + " is available at index " + dishes.indexOf(searchDish) + " in our bakery <br>");
}
else
{
    document.write("We are sorry. " + searchDish + " is not available in our bakery <br>");
}

// Question no: 15 
var password = prompt("Please enter your password : ");
if (isNaN(parseInt(password[0])))
{
    if (password.length < 6) {
        alert("Your password must be at least 6 characters"); 
    }
    if (password.search(/[a-z]/i) < 0) {
        alert("Your password must contain at least one letter.");
    }
    if (password.search(/[0-9]/) < 0) {
        alert("Your password must contain at least one digit."); 
    }
}
else  {
    alert("Password cannot begin with a number."); 
}


// Question no:16 
var university = "Sir syed University";
university = university.replace(/\s/g, "");
university = university.split('');
for (var i = 0; i < university.length; i++)
{
    document.write(university[i] + "<br>");
}


// Question no: 17 
var userInput = prompt("Please enter something : ");
document.write("User Input : " + userInput + "<br>");
document.write("Last character of input : " + userInput.charAt(userInput.length-1)+ "<br>");


// Question no: 18 
var str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase();
var count = str.split("the").length - 1;
document.write("Text : " + str + "<br>");
document.write("There are " + parseInt(count) + " occurrence(s) of the word " + "'the'" + "<br>");