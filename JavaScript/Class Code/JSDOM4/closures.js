function makeFunc() {
  let name = "Mozilla";
  function displayName() {
    return name;
  }
  return displayName;
}

let a = makeFunc();
a();


// function greet() {
//   let name = 'John';
//   function displayName() {
//       return 'Hi' + ' ' + name;
//   }
//   return displayName;
// }
// const g1 = greet();
// console.log(g1); // returns the function definition
// console.log(g1()); // returns the value






// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();
