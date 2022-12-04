//ARROW FUNCTION**************************
const a = 4;
const b = 5;
let myfunction = (a,b)=>a+b;
console.log(myfunction(a,b));


//Without the use of arrow function********
hello = function(a,b) {
    return a*b;
}

console.log(hello(a,b));


//Another usage With arrow function********
hi = ()=>hello(a,b);
console.log(hi());


//another  *******************************
mrt = ()=>"Murat Irmak";
console.log(mrt());





