var maxArray = [45,25,36,44,55,66,77,99];
var max = maxArray[0];
for( var i = 0 ; i<=maxArray.length;i++){
    var element = maxArray[i];
    if(element>max){
        max= element;
    }
    else{
        continue;
    }
}
console.log("The bigger element is ",max);