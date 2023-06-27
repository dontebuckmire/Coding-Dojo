//arrays (index based starting at 0)

var arr = [1,2,3,4,5]; 
console.log(arr[0]);
console.log(arr)




//objects made up of key value pairs

var juli = {
    name: 'Juli',
    age: 25,
    location: 'Burbank',
    favoriteLanguage: 'Javascript',
    isCool: true,
}

console.log(juli.name);
console.log(juli.age);


function squareNums(arr){
    for (var idx = 0; idx <arr.length; idx++){
        arr[idx] = arr[idx] * arr[idx]
    }
    return arr
}

console.log(squareNums([1,2,3,4]))


//square only even nums in an array

function squareEvenNums(arr){
    for(var idx =0; idx <arr.length; idx++)
        if(arr[idx] % 2 === 0){
            arr[idx] = arr[idx] * arr[idxx]
        }

        return arr
}
console.log(squareEvenNums([1,2,3,4]));
