var name1 = "ayman";
var pass = "123456";
var birth = "23/1/1996";

var YourName = prompt("what is your name");
var PassWord = prompt("Password ?");
var birthday = prompt("What's your birthday date ?");
var sure = confirm ("Are you sure ? ");
if (YourName === name1) {
    console.log ("you have a nice name lol !");
} else {
    console.log ("naah not that name");
}

if (pass === PassWord ) {
    console.log ("correct Password");
} else {
    console.log ("wrong , try again");
}

if (birth === birthday ) {
    console.log ("Have a nice day");
} else {
    console.log ("wrong input");
}

var legalAge = 18;
var yourAge = prompt("how old are you ?");

if (yourAge >= legalAge ) {
    console.log ("succsesfully done");
} else {
    console.log ("under age");
}
var color = "blue";
var pagecolor = prompt("what do you think the page color is ?")

if (color === pagecolor ) {
    console.log ("I guess you like blue color too");
} else {
    console.log ("Hint: the sky look beauty")
}