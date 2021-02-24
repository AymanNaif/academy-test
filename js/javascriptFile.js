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


function yourAge1(currentYear,birthYear){
    var old=parseInt(currentYear)-parseInt(birthYear);
    alert("Your Age is "+old);
}
var coun=0;
var currentYear=0;
var birthYear=0;

while (coun<2){
    if (coun==0){
        currentYear=prompt("calculate your Age , please enter current year:");

    } else {
        birthYear=prompt("please enter year that you born:");

    }
    coun+=1;
}
yourAge1(currentYear,birthYear);

for (var i = 0; i < 4; i++) {
    document.write('<img src="aymanimage.jpg">');
  }

var frequantcounter =prompt(" how many image do you want to see ?  ");

if(frequantcounter >0 && frequantcounter<4){
    for(var i=1;i<=frequantcounter;i++){
   
    document.write('<img src="aymanimage.jpg" />');
  
   
    }
}else{
    var frequantcounter =prompt("note you can only choice from 1 to 3 ");
    for(var i=1;i<=frequantcounter;i++){
   
        document.write('<img src="aymanimage.jpg" />');
      
       
        }
}
