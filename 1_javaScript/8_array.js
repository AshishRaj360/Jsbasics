  //array 
  const myAry = [9,0,1,2,4,5,6,"ashish",true] 
 // console.log(myAry[0]);
  
 const myHero = ["saktiman","Bhavya"]
 const myArry2 =new Array(1,2,3,4,5)
 //console.log(myArry2[4]);

 //-----------Array Method----------------------

 
/*

 myAry.push(7)
 console.log(myAry);    //output - [ 9, 0, 1, 2, 4, 5, 6, 'ashish', true, 7 ]
 myAry.pop ()  // remove last value from an aarry
  myAry.unshift(9)// add 9 as frist valuue in array
  myAry.shift () // remove last value from an aarry
  console.log(myAry.includes(9));
  console.log(myAry.indexOf(19));
  
  const sarry = myAry.join ()
  console.log(sarry); // make array into string 

  */

//-------------------Slice/Splice--------------------  
 
console.log("a", myAry);


const myn1 =myAry.slice(1,4)  // 1,4 means position  of string present in array- print postion 1to 4 whatever 
  console.log(myn1);
  console.log("b", myAry);


const myn2 =myAry.splice(1,4) //// splice sirf range include he nhi array ko manupulate v krta h
console.log(myn2);
  
  console.log("c", myAry);

  
  