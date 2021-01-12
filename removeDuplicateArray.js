var array = [45,45,22,333,66,55,,55,22,33,11,33,77,66,55];
var newArray =[];
for(var i = 0;i<array.length;i++){
    var element = array[i];
    var index = newArray.indexOf(element);
    if(index==-1){
        newArray.push(element);
    }
}
console.log(newArray);