let mini = document.getElementById("minus")
let showing = document.getElementById("showCount") // output of this will be string and we are converting into Number
let maxi = document.getElementById("plus")

mini.addEventListener("click", function(){
    let valueofmin = showing.innerHTML;
    console.log(typeof(valueofmin))
    valueofmin=Number(valueofmin) - 1;
    showing.innerText = valueofmin;
})


maxi.addEventListener("click", function()
{
    let valueofmax =Number(showing.innerHTML) + 1 ;
    showing.innerText = valueofmax;
})

let resetter = document.getElementById("reset");

resetter.addEventListener("click", function(){
    showing.innerText= 0;
})
