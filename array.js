// denoted by [] square bractes    
// collections of multiple datatypes. 
  //we can excess an array by [].


  //Methods of array:-
  //1. push- value add krta h last m  
  //2. pop- value ko remove krta h last m se

  //3.unshift- value add at first
  //4.shift- value removes from first

  //5.join- removes bractes but it will be typed in string

  let arr1 = [1,2,3,4,5,6]
let newArr1 = arr1.push(7,8);//use different methods here 
console.log(newArr1);
console.log((arr1))

//SPLICE & SLICE - IMPORTANT QUESTION IN INTERVIEW
//slice

let arr2=[1,2,3,4,5,6]
let newArr2=arr2.slice(1,3)//output: [2,3]  hence, it not take end parameter
console.log(newArr2);

//splice - ye manipulate krta h original value ko / change hota rta h 

let arr3=[1,2,3,4,5,6];
let newArr3= arr3.splice(1,3);
console.log(newArr3);//[2,3,4] 



//TWO METHODS TO ADD ARRAY
//concat - add two array
// spread operator 

let arr4=[1,2,3,4];
let arr5=[5,6,7,8];
let newArr4=[...arr4,...arr5];
console.log(newArr4); //[1,2,3,4,5,6,7,8]


//if there is different arrays in one than use .flat

//.flat

let arr6= [1,2,3,[4,5,6,7],8,[9,10,[11,12]]]
let newArr5=arr6.flat(Infinity);
console.log(newArr5); //[1,2,3,4,5,6,7,8,9,10,11,12]


//.from     kisi ko bhi array m easily convert krne ke liye (from) use krte h 
console.log(Array.from("panda"));  //["p","a","n","d","a"]

//.of  array bnane ke liye 

let score1 =100;
let score2 =200;
let score3= 300;
console.log(Array.of(score1,score2,score3));


  

