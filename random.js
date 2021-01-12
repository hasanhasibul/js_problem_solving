//floor,ceil,roundoff

var num = 2.2;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//random numbur 



for(var i = 1 ;i<=6;i++){

    var random = Math.random();
    random = random*6;
    var roundOff = Math.round(random);
    console.log(roundOff);
}