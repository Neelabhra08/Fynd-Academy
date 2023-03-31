//basic lexical scope
function a() {
    c();
    function c(){
        console.log('The value from inner function',b);
    }
    console.log('value from outter funct',b);
}
var b=10;
a();

//example 1
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); 

//Modified example 1
var e = 12;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result);

//modified example 1
console.log(sum2);
console.log(sum2(2)(3)(4));

//example 2

// function showHelp(help) {
//     document.getElementById("help").textContent = help;
//   }
  
//   function setupHelp() {
//     var helpText = [
//       { id: "email", help: "Your email address" },
//       { id: "name", help: "Your full name" },
//       { id: "age", help: "Your age (you must be over 16)" },
//     ];
  
//     for (var i = 0; i < helpText.length; i++) {
//     // Culprit is the use of `var` on this line
//     //   var item = helpText[i];
//       let item = helpText[i];
//       document.getElementById(item.id).onfocus = function () {
//         showHelp(item.help);
//       };
//     }
//   }
  
//   setupHelp();

//example 3
function showHelp(help) {
    document.getElementById("help").textContent = help;
  }
  
  function makeHelpCallback(help) {
    return function () {
      showHelp(help);
    };
  }
  
  function setupHelp() {
    var helpText = [
      { id: "email", help: "Your email address" },
      { id: "name", help: "Your full name" },
      { id: "age", help: "Your age (you must be over 16)" },
    ];
  
    for (var i = 0; i < helpText.length; i++) {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }
  }
  
  setupHelp();
