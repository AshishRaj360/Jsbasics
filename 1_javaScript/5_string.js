const name = "Ashish"
const repoCount = 50 

// consol.log ( name + repoCount )


console.log(`hello my Name is ${name }and my repo count is ${repoCount}`);



// ------------------Example of Few String Method --------------------------



const bookName = new String ('Ashish')

console.log(bookName);
console.log(bookName.__proto__);

console.log(bookName.length);
console.log(bookName.toUpperCase());
console.log(bookName.charAt(2));
console.log(bookName.indexOf('t'));
console.log(bookName);


//---------------------Substring and Slice Method ------------------------------




 const newString = bookName.substring(0,5)  //// substring sirf positive value he print krega  
 console.log(newString);

 const Oldstring = bookName.slice(-5,3 )   // slice me negetive value v de skte hain 
 console.log(Oldstring);



 //----------------trime and Replace method ----------------------------------------
 
 const newString1 = "  Ashish  "
console.log(newString1);
console.log(newString1.trim()); // trim method aage and piche ke space ko ignore krta h 


const url = "https://ashish.com/ashish80%choudhary"
console.log(url.replace('80','Bhavya')); 
 //url.replace is used to replace sringe --as u have seen 80 is replaced with Bhavya 

console.log(url.includes('Bhavya')); // using inludes method u can find term is avl in url string 
console.log(bookName.split('-'));// through split method u can split/break string into Arrays [ashish,dog,kutta]







