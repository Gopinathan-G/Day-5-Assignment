console.log("Promises");

let users = [
    {
        name :'Gopinathan',
        email:'Gopinathan@gmail.com',
    },
    {
        name :'Deepan',
        email:'Deepanz@gmail.com',
    },
    {
        name :'kishore',
        email:'kishorekumar@gmail.com',
    },
    {
        name :'karan',
        email:'karankumar@gmail.com',
    }
]

function getUsers(){
    setTimeout(()=>{
        let result = '';
        users.forEach(user=>{
            result += `The user is ${user.name} \n`;
        });
        console.log(result);
    },1000);
}
function createUser(user, callback){
         setTimeout(()=>{
             users.push(user);
             callback();
         },3000);
     }
    
      getUsers();

// Using promise

const userData = new Promise ((resolve,reject)=>{
    const error =false;
    if (error){
        reject("an error occured");

    }
    else{
        resolve({
            fristname:"Gopinathan",
            age:20,
            course:"BCA",

        })
    }
});

userData
     .then(data=>console.log(data))
     .catch(error=>console.log(error))

// async await

async function firstAsync() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 1000)
    });

    // wait until the promise returns us a value
    let result = await promise; 
  
    // "Now it's done!"
    alert(result); 
    }

firstAsync();