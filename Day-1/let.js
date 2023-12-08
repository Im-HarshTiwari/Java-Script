//Variables declared with let are block-scoped, meaning they are only accessible within the block (i.e., curly braces) 
//where they are declared. This provides better code organization and reduces the risk of accidental variable reassignments
//Redeclartion is Not allowed within block scope

let a = "Ram " ;
let b = "Shayam" ;
 let c = (a+b);
 console.log(c)

 let n = c.length;
 if(n>=10){
    console.log("Counting naumber of '",c,"'is ",n);
 }
 else {
    console.log("The counting number of '",c,"' is smaller than 10");
 }

 //.lenght is used to count the no. or used to find the length of variable.