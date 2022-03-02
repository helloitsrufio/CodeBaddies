// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//P: Given array A, and rando value X. Want to see if A has X in it. A can have numbers, strings. X can be a number or a string. Is it ever empty? Undefined? What do we do about special characters?
//R: True if x is in a, false if x is not. BUT TRUE, FALSE (boolean)
//E: Given [1,2,3] as A and 4 as X, should return FALSE
//   Given [7,6,3,2] as A and 6 as X, should return TRUE
//   Given [] as A and 5 as X, should return FALSE
//P: Make a function that takes in two parameters: an array, and a rando number.
function numInArray(arr,num){
    //look through the array and see if there are any elements that match num. 
    console.log(arr.map(elem=>elem === num ? true : false))
    //conditional: if they do, return TRUE, else, return FALSE
}

numInArray([1,2,3],4) //should return false
numInArray([7,6,3,2],6) //should return true

//second attempt and answer wooooo
function numInArray(arr,num){
    return arr.includes(num)
}
//So the way I was going about returned a new array with just falses and trues, and I needed just one. The new way is much less complicated.