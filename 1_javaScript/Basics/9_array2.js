const marval_h = ["thor","Ironman","Sman"]
const dc =["superman","flash","batman"]
marval_h.push(dc)
// console.log(marval_h);
const allHeros = marval_h.concat(dc)
console.log(allHeros);
const hero = [...marval_h,...dc]
console.log(hero);

const  anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = anotherarray.flat(Infinity)   // [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5 ]
console.log(real_another_array);

// const array = [1,2,3,[4,5,6],7,[6,7,],'Ashish']
console.log(Array.isArray("Ashish"));   // false
console.log(Array.from("Ashish"));    //    [ 'A', 's', 'h', 'i', 's', 'h' ]
console.log(Array.from({name:"ashish"}));  // intresting 

let s =100
let b =200
let c =300
console.log(Array.of (s,b,c));  // [ 100, 200, 300 ]


