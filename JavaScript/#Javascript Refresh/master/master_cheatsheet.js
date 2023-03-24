//              do-while
// i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

//              while
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
//              for

// for(let i =1;i<=10;i++){
//     console.log(i);
// }

//               //object create
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// //factory function 
// function createRectangle(len, bre) {

//     const rectangle = {
//         length: len,
//         breadth:bre ,

//         draw() {
//             console.log('drawing rectangle');
//         }
//     };
//     return rectangle;
// }

// // let a = createRectangle;
// // console.log(a(1,2))

// let a = createRectangle("ankit","jain");
// console.log(a)
// // console.log(a.length)


// diff bw , and +


// console.log("ankit" + "jain")    //ankitjain
// console.log("ankit" , "jain")   //ankit jain

// //constructor function -> prop/methods -> intialise/Define
// // function Rectangle(len, bre) {
// //     this.length = len;
// //     this.breadth = bre;
// //     this.draw= function() {
// //         console.log('drawing');
// //     }
// // }

// // Rectangle.

// // //object creation using constrcutor function
// // let rectangleObject = new Rectangle(4,6);

/// dynamic nature of objects (adding new prop and deleting it)

// // rectangleObject.color = 'yellow';
// // console.log(rectangleObject);

// // delete rectangleObject.color;
// // console.log(rectangleObject);
//              looping over a object
// let rectangle = {
//     length:2,
//     breadth:4
// };

// // for-in loop 
// for(let key in rectangle ) {
//     //keys are reflected through key variable 
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

// const person1 = {};
// person1['firstname'] = 'Mario';
// person1['lastname'] = 'Rossi';

// console.log(person1.firstname);
// // Expected output: "Mario"

// const person2 = {
//   firstname: 'John',
//   lastname: 'Doe'
// };

// console.log(person2['lastname']);
// // Expected output: "Doe"