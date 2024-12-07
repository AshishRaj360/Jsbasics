// singleton 
//Object.create  -- this is a constructor method aur isi ke andar singleton bnta h
// object literals

const mysym = Symbol("key1")
const user ={
    name :"ashish",
    fullname : "ashish raj",
    [mysym] : "key1", 
    age : 18,
    location : "jaipur",
    email :"hitesh@google.com",
    isloggedIn: false,
     loginDays: ["Mon","Tue"]
}

  console.log(user.email);          // this is how u can print Object
  console.log(user["email"]);
  console.log(user["fullname"]);
  console.log(user[mysym]);
  user.email ="ashish@gmail.com"

  // locking objects 
  Object.freeze(user)
  user.email ="bhavya@gmail.com"
  console.log(user);
  
  
  

 