function sum (){
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total
}

console.log(sum(1,1,1,1,2))