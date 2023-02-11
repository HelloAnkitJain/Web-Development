// factory function

function city() {
// object named : car
    let car = {
        color : "blue", //property
        brand : "honda", //property
        year : 2011, //property
    
        run: function() {  //method /behavior
            console.log("run run run run run run run run stopppppppp");
        }
    };

    return car;
}

let cityobj1 = city();

// cityobj1 variable has value of city()'s function output




function city(col, company) {
    // object named : car
        let car = {
            color : col, //property
            brand : company, //property
            year : 2011, //property
        
            run: function() {  //method /behavior
                console.log("run run run run run run run run stopppppppp");
            }
        };
    
        return car;
    }
    
    let cityobj2 = city("brown","hyundai");

// constructor funtion

function Funny(){
    this.name = "ankit",
    this.study = function(){
        console.log("ankit is studying");
    }
}

let ObjectOfFunny = new Funny();

ObjectOfFunny.color = "my favouriate colour is white";   //adding a property in object
console.log(ObjectOfFunny)
delete ObjectOfFunny.color;  //deleting a property in object
console.log(ObjectOfFunny)