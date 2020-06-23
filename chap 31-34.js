// Question no: 1
var currentdate = new Date();
document.write(currentdate + "<br>");


// Question no: 2
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentmonth = currentdate.getMonth();
document.write(months[currentmonth] + "<br>");

// Question no: 3
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var currentday = currentdate.getDay();
document.write("Today is " + days[currentday] + "<br>");


// Question no: 4
if( currentday == 0 || currentday == 6){
document.write("Today is a funday" + "<br>")
}


// Question no: 5
if(currentdate.getDate() <=15){
    document.write("first fifteen days of the month" + "<br>");
}else if(currentdate.getDate() <=16){
    document.write("16th day of the month" + "<br>");
}else{
    document.write("last 16 days of the month" + "<br>");
}


// Question no: 6
document.write("milliseconds: " + currentdate.getTime() + "<br>")
var minutes = currentdate.getTime()/(1000*60);
document.write("minutes" + minutes + "<br>");

// Question no: 7
var hour = currentdate.getHours();
if(hour < 12){
    document.write("Its AM" + "<br>");
}else{
    document.write("Its PM" + "<br>");
    
}


// Question no: 8
var laterDate = new Date("2020/12/31");
document.write(laterDate + "<br>");


// Question no: 9
var startingdate = new Date("2020/6/18");
var daysgone = parseInt((currentdate.getTime() - startingdate.getTime())/(1000*60*60*24));
document.write(daysgone + " days have passed since ramazan 1st" + "<br>")


// Question no: 10
var startingdate = new Date("2015/1/1");
var daysgone = parseInt((currentdate.getTime() - startingdate.getTime())/(1000*60));
document.write(daysgone + " seconds have passed since 2015" + "<br>")


// Question no: 11
document.write("current date" + currentdate + "<br>")
var hourago = new Date( currentdate.getTime() - (1000* 60 *60));
document.write("an hour ago it was " + hourago + "<br>")


// Question no: 12
document.write("current date" + currentdate + "<br>")
var centuryago = new Date( currentdate.getTime() - (1000* 60 * 60 *24 * 365.25 *100));
document.write("100 years ago it was " + centuryago + "<br>")

// Question no: 13
var age =prompt ("enter your age")
var birthyear = new Date( currentdate.getTime() - (1000* 60 * 60 *24 * 365.25 *age));
document.write("your birth year is " + birthyear.getFullYear() + "<br>");

// Question no: 14
document.write("<h2>K-Electric Bill</h2>")
document.write("customer name : Arsalan Mirza" + "<br>");
document.write("Month : August"  + "<br>");
document.write("Number of units : 615" + "<br>");
document.write("Charges per unit : 13" + "<br>");
document.write("net amount payable with in due date : " + 410*16 + "<br>");
document.write("late payment surcharge : 475" + "<br>");
document.write("payment after due date : " + ((615*13)+475)  + "<br>");