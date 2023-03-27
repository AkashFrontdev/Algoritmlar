

// // first sum
function sumAllNumbersInArray(num){
    let sum = 0;
   for(let a of num)
   sum += a;
    console.log(sum);
}
 sumAllNumbersInArray([1,2,3]); 





// second sum
function generateNumbers(num){
 var myArray = [];
 var sum = 0;
 for(i = 1; i < num; i++){
  myArray.push(i);
}
console.log(myArray);


for(let a of myArray)
sum += a;
console.log(sum);
}

generateNumbers(40);


