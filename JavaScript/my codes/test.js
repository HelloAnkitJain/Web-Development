// let a = 10;
// function inc(a){
//     a++;
//     console.log("inside function  ",a);
// }
// ;
// console.log(inc(a));


let a = {
    value : 10
}
let b = {};
for(let key in a){
    console.log(key);// for variable name 
    console.log(a);
    b[key] = a[key];
    console.log(key ,a[key]);//for value
};
console.log(b);


