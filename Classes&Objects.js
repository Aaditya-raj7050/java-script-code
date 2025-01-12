// const student = {
//     fullname : "Aaditya raj" ,
//     marks : 94 ,
//     printmarks : function () {
//          console.log("marks = " , this.marks) ;
//     } 
// }


// prototype -> 
// const employee = {
//     calcTax () {
//         console.log("tax rate is 10%") ;
//     } ,
// };

// const karanArjun = {
//     salary : 50000 ,
//     calcTax () {
//         console.log("tax rate is 20%") ; 
//     }
// }


// karanArjun.__proto__ = employee ; 

// classes -> 

// class car {
//     constructor(brand , mileage) {
//         console.log("creating new constructor") ;
//         this.brand = brand ;
//         this.mileage = mileage ;
//     }
//     start () {
//         console.log("start the engine") ;
//     }

//     stop () {
//         console.log("stop the engine") ;
//     }

//     // setBrand(brand)  {
//     //     this.brand = brand ;
//     // }
// }

// let lambo = new car("brand" , 100) ; 
// let rover = new car("lexus" , 12) ;



// Inheritance -> 

// class parent {
//     hello () {
//         console.log("hello friends") ;
//     }
// }

// class child extends parent  {

// }

// let obj = new child() ; 
// class Person {
//     constructor () {
//         this.species = "homo sapiens" ;
//     }
//     eat() {
//         console.log("eat") ;
//     }

//     sleep() {
//         console.log("sleep") ;
//     }
// }

// class Engineer extends Person {
//     constructor (name) {
//         super(name) ;
//     }
//     work() {
//         console.log("solve problems") ; 
//     }
// }

// let rajobj = new Engineer("ECE") ;


// practise ->

class user {
    constructor (name , email) {
        this.name = name ;
        this.email = email ;
    }

    viewData () {
        console.log("website data") ;
    }
}

let student1 = new user("raja" , "@rajgmail.com") ; 
let student2 = new user("raj" , "@gfd") ; 


let a = 5 ; 
let b = 10 ; 

try {
    console.log("a + b" , a+c) ;
}
catch (err) {
    console.log(err) ;
}