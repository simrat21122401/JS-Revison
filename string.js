// string is denoted by "" or ''
 // do strings ko jodne ke liye hum concat krte h " + "
 //use tempalate literals (` ${} `)
 //even for excessing string (.)
 let valueNumber ="panda";
 let val2 ="mootu";
 let val3 = valueNumber + val2;
 console.log(val3);

 //indexof(0) substring(always starts from 0) slice(we can use -) replace(we use to replace any word or any symbol) inclues(kuch pta krna ho ki vo value h ya nhi)
//trim(space ko remove krta h)
//string ke andr array convert
//.split()

let str= "panda is motuu too much even lazy";
let strCopy =str.split([2]);
console.log(strCopy);
