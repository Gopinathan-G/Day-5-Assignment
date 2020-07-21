// Using promise/async await/fetch get the random todos from from the json placeholder api. And log all the
// complete todos to the console.

console.log('Fetch API');

// https://jsonplaceholder.typicode.com/comments

// Making a get request
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>console.log(data))

let obj = {
    userId:240,
    title:"Raw Data",
    body:'Form',
}

// Make a post Request
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))


// jokes api

async function fetchJokes(){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();

    console.log(data);
}

fetchJokes();


let obj1 = {
    name:'Gopinathan',
    age:20,
    canDrive:true,
}

console.log(obj1);
let str = JSON.stringify(obj1);
console.log(str)

let strobj = JSON.parse(str);
console.log(strobj)

