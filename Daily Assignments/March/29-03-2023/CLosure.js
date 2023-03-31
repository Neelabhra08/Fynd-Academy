const add=(function y(){
    let counter=0;
    function x(){
        counter +=1;
        return counter;
    }
    return x
    // return x()
})();

function myFunction(){
    document.getElementById('demo').innerHTML=add();
}
// myFunction()
// console.log(add);

// (function show(){
// console.log('calling from show function again');
// })()

// show()