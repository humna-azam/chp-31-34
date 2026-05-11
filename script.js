// // Problem 1
// let currentDate = new Date();
// document.writeln(`Current Date: ${currentDate} <br>`);

// // Problem 2
// let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
// let now = new Date();
// let currentMonth = monthNames[now.getMonth()];
// document.writeln(`Current Month: ${currentMonth} <br>`)

// Problem 3
// let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// let today = new Date();
// let currentDay = days[today.getDay()];
// alert("Today is " + currentDay);

// Problem 4
// let dayIndex = 6;
// if(dayIndex === 0 || dayIndex === 6) {
//     alert("It's Fun day");
// }
// Problem 5
// let todayDate = new Date().getDate();
// let message5 =""
// if(todayDate < 16){
//     message5 = "First fifteen days of the month";
// }else{
//     message5 = "Last fifteen days of the month"
// }
// alert(message5);

// Problem 6
// let current = new Date();
// let msSince1970 = current.getTime();
// let minSince1970 = msSince1970 / (1000 *60); 
// document.writeln(`Current Date: ${current}<br>`);
// document.writeln(`Elapsed millisecond since January1,1970: ${msSince1970}<br>`);
// document.writeln(`Elapsed minutes since January1,1970: ${minSince1970}<br>`);

// Problem 7
// let currentHours = new Date().getHours();
// period = "";
// if(period < 12){
//     period = "Its AM"
// }else{
//     period = "Its PM"
// }
// alert(`${period}`);

// Problem 8
// let laterDate = new Date();
// document.writeln(`${laterDate}`)

// Problem 9
// let ramadanDate = new Date(`June 18,2015`);
// let currentDate = new Date();
// let diffTime = currentDate - ramadanDate;
// let daysPassed = Math.floor(diffTime/(1000*60*60*24));
// alert(`${daysPassed} days have been passed since 1st Ramadan,2015`);

// Problem 10
// let referenceDate = new Date();
// let beginning2015 = new Date("January1,2015");
// let diffMilliseconds =referenceDate - beginning2015;
// let secondsPassed = Math.floor(diffMilliseconds/1000);
// document.writeln(`On reference date ${referenceDate}<br>`);
// document.writeln(`${secondsPassed} seconds had passed since beginning of 2015`);

// Problem 11
// let currentDate1 = new Date();
// document.writeln(`Current date1 ${currentDate} <br>`);
// currentDate.setHours(currentDate1.getHours()-1);
// document.writeln(`1 hour ago it was ${currentDate1}`);

// Problem 12
// let currentDate2 = new Date();
// document.writeln(`Current date2 ${currentDate2} <br>`);
// currentDate2.setFullYear(currentDate2.getFullYear() - 100);
// document.writeln(`100 years ago it was ${currentDate2}`);

// Problem 13
// let age = Number(prompt("Enter you age"));
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;
// document.writeln(`Your age is ${age}<br>`);
// document.writeln(`Your birth Year is ${birthYear}`);

// Problem 14
let customerName = "ABC Customer";
let currentMonth = "February";
let numberOfUnits = 410;
let chargesPerUnit = 16;
let latePaymentSurcharge = 350;

let netAmount = numberOfUnits * chargesPerUnit;
let grossAmount = netAmount + latePaymentSurcharge;

document.write("<h1>K-Electric Bill</h1>");

document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + currentMonth + "<br>");
document.write("Number of units: " + numberOfUnits + "<br>");
document.write("Charges per unit: " + chargesPerUnit + "<br><br>");

document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
document.write("Late payment surcharge: " + latePaymentSurcharge + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount);