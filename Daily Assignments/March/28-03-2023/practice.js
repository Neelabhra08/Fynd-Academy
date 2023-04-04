let a = 12; 
let  b = 25; 

result = a & b; 
console.log(result);


var x = 12; 
var y = 25; 

result = x | y; 
console.log(result);

let k = 12; 
let  l = 25; 

result = k ^ l; 
console.log(result); // 21


// let a = 8;
// let b = 1;
// // 11111111111111111111111111111101
// let c = -3;

// result = a >> b;
// result1 = c >> b;

// // 4 (00000000000000000000000000000100)
// console.log(result); 

// // -2 (11111111111111111111111111111110)
// console.log(result1); 


let sum = 0;
const n = 100

for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);

//while
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}

//if else
function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-5));