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


/// array indert and remove

// let arr =['shaym','ram ', 'raghu', 'ravi']

// arr.push('ramesh') // end

// console.log(arr)

// arr.pop() // delete end

// combinging an arraty

// let ankit = [1,2,3,4,5]
// let ram = ['1','1','a']

// ankit.concat(ram)

// console.log(ankit.concat(ram))

// slice

// let ankit = [1,2,3,4,5]
// let ram = ['1','1','a']

// ankit.concat(ram)

// console.log(ankit.slice(1,3)) // output: [2, 3]


//          copy using spread operator

// let ankit = [1,2,3]

// let copy = [...ankit]

// console.log(copy)

// function ankitji(){
//     let total = 0;
//     for (let key of arguments) {
//            total += key;
//         }
//      return total;
//     }
// ankitji(1,1,1)
                // rest op
// var myName = ["Marina" , "Magdy" , "Shafiq"] ;
// const [firstName , ...familyName] = myName ;
// console.log(firstName); // Marina ;
// console.log(familyName); // [ "Magdy" , "Shafiq"] ;

// function myData(...args){
//     console.log(args) ; // ["Marina",24,"Front-End Developer"]
//     }
//     myData("Marina",24,"Front-End Developer") ;

                    //Spread Operator […spread]

// var myName = ["Marina" , "Magdy" , "Shafiq"];
// var newArr = [...myName ,"FrontEnd" , 24];
// console.log(newArr) ; // ["Marina" , "Magdy" , "Shafiq" , "FrontEnd" , 24 ] ;

/// example of async and synchronous

// setTimeout(function() {
//     console.log('third');
// },3000)

// function sync() {
//     console.log('first');
// }
// sync();

// console.log('second');



// async function mera(){
// let apiji = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1b4f07e8b02a8ac24f9dfd5269509b82')
// let res = await apiji.json()  /// json ko javascript object me convert kara hai to use it
// console.log('this is the responce original')
// console.log(apiji)
// console.log('this is the responce converted to json')
// console.log(res)
// }
// mera()


// printing a object value
// let ankit = {
//     name: "ankit",
//     surname:"jain"}

// for (let ele in ankit){
//     console.log(ankit[ele])
// }

