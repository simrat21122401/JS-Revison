//Datatypes are of two types - primitive and non-primitiveor reference type

//primitive type - 7 types these are strings, number, boolean, null, undefined, symbol and bigint

//non-primitive type- objects array functions

//strings-"" 
//boolean - true/false
// numbers - 2323
//undefined - if value is not defined
//null - when the value is given null - but one ineresting thing is tha its type will be (object). even it is kept null because we can do change in it .

//basically 5 are more usefull
//bigint- when no. are too big than it is used
//symbol - it  shows any value as unique

const fullName="kmmo" //string

const login="true"//boolean

const num1= 2124 //number

const val1=undefined ; //undifined

const val2=null; //null

//=> null and defined - interview question

//let valueNumber =Number(score)- convert in different data types

//if score =null than it will show 0 even in boolean if the value is true =1 and false =0 undefined=NaN.
let score=true;
let valueNumber=Number(score);

// console.log(valueNumber); 

//operation - + - * / % **

//tricky question

console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2 +2)//122
console.log(1+2+"2")//32
console.log(+true)//1
console.log(+false)//0

//comparsion (> < >= == === != !==)

console.log("2">1); //true
console.log("2">1); //true


//null

console.log(null>0) //false
console.log(null===0)  //false
console.log(null==0) //false
console.log(null>=0) //true
console.log(null!=0) //true
console.log(null!==0)  //true

//the reason is that equa;ity check == and comparison > < >= works differently

//===
console.log("2"===2);//false













