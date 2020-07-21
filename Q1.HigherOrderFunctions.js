// 1.Take a positive number from the user.
let users = [{"user": "1"},{"user": "2"},{"user": "3"},{"user": "4"},{"user": "5"},{"user": "6"},{"user": "7"},{"user": "8"},{"user": "9"}];
// 2.Makes an array of numbers till the number given from user. 
let arr = [1,2,3,4,5,6,7,8,9];

// 3.User higher order function to filter the odd numbers.
let odd = arr.filter(el=>el%2==1);

console.log(odd);

// 4.Generate array of the cubes of the filter number in javascript.
let oddcubes = arr.filter(el=>el%2==1).map(el=>el**4);

console.log(oddcubes);



