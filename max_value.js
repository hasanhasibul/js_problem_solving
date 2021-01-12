//find the max value in js 
var a = 50;
var b = 44;
var c = 100;

if(a>b){
    if (a>c) {
        console.log("a is bigger");
    } else {
        console.log("c is bigger");
    }
}
else{
    if (b>c) {
        console.log("b is bigger");
    } else {
        console.log( "c is bigger");
    }
}

// max value using js max method

var result = Math.max(a,b,c);
console.log("result",result);