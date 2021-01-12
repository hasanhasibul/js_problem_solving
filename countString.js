// count string in js 
var speech = "i want to  be a web developer.";
var count = 0;
for(var i = 0 ; i<speech.length;i++){
    var char = speech[i];
     console.log(char);
     if(char == " " && speech[i-1]!=" "){
         count++;
     }
}
count++;
console.log("word count",count);

// reverse string 

function reverString(talk){
    var reverse = "";
    for(var i=0;i<talk.length;i++){
        var char = talk[i];
        reverse =char + reverse;
    }
    return reverse;
}

var say=" hello bangladesh";
var reverseSay = reverString(say);
console.log(reverseSay); 