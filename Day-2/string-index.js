// going to play with string index

let fullname = "Harsh Tiwari" ; 
console.log(fullname.length);

console.log(fullname[3]);
//indexing is staring from 0 and each word is assigned with some counting 0th index
  
//.lenght is used to count the lenght of any variable

//trim is used to trim and it affact in the next new string as ..
fullname.trim();
console.log(fullname);

//use of upper care 
fullname = fullname.toUpperCase();
console.log(fullname);

//use of lower case
fullname = fullname.toLowerCase();
console.log(fullname);
//use of split
let fullname1 = "Harsh Tiwari";
let fullname2 = fullname1.split(" ");
console.log(fullname2);
//use of replace
let fullname3 = fullname1.replace("Harsh", "Harsh1");
console.log(fullname3);
//use of concat
let fullname4 = fullname1.concat(" is a good boy");
console.log(fullname4);
//use of index of
let fullname5 = "Harsh Tiwari";
let index = fullname5.indexOf("Tiwari");
console.log(index);
//use of slice to cut particular string (start index , end index)
let fullname6 = "Harsh Tiwari";
let fullname7 = fullname6.slice(0, 5);
console.log(fullname7);
//use of starts with
let fullname8 = "Harsh Tiwari";
let fullname9 = fullname8.startsWith("Harsh");
console.log(fullname9);
//use of ends with
let fullname10 = "Harsh Tiwari";
let fullname11 = fullname10.endsWith("Tiwari");
console.log(fullname11);
