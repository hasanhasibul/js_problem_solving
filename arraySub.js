//sum of array using for loop
var maxArray = [45,25,36,44,55,66,77,99];
var max = 0;
for( var i = 0 ; i<maxArray.length;i++){
    var element = maxArray[i];
    max = element+max;
    
}
console.log("sum of array is  ",max);

//sum of array using function

function arraySum(elements){
    var sum = 0;
    for( var i=0; i < elements.length;i++){
        var element = elements[i];
        sum = element + sum ;
    }
    return sum;
}

var arrayElements = [45,25,36,44,55,66,77,99];
var result = arraySum(arrayElements);
console.log("the result is ",result);