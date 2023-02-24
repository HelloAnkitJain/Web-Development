const a = 10;

function change(){
    let b = a;
    b = b +1;
    a = b;
    return a;
}

console.log(change());