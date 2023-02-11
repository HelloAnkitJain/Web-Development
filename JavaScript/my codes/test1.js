// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };


// let dest = {};

// for(let key in src){
//     console.log(src[key]);
// };
let src = {
    a: 10,
    b: 20,
    c: 30
};


let dest = {};

for(let key in src){
   dest[key] = src[key];
}; 
src.a = 2342423;
console.log(src);