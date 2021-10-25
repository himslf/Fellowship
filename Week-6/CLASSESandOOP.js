
// C L A S S E S  and  OBJECT OREINTED PROGRAMMING

class somePerson {                      // creating a CLASS
    constructor(name, age, career, car) {    // installing a default/constructor
        this.name = name;               // declaring construcot arguments
        this.age = age;                 // declaring construcot arguments again
        this.career = career;           // declaring construcot arguments and again
        this.car = car;
    } // endCONSTRUCTOR

    getTheirAge = () => {return this.age}       // 1-line function returning 'age'
    getTheirCar = () => {return this.car}       // " " returning 'car'

} // end_of_somePerson_CLASS



// O U T S I D E  of  C L A S S:
                                            // will print, but these are
getTheirName = () => {return this.name}     // NOT accessible outside of logging.
getTheirCareer = () => {return this.career} // these must be placed within PARENT CLASS

let person77 = new somePerson ("Juice", 30, "Head of UX Design", "Mazda CX5");
// ^ here we create a new OBJECT, that gets its "bones" from the PARENT OBJECT
let person29 = new somePerson ("Pamelita", 25, "Director of Programs", "BMW 530i");
// ^ same here ... new OBJECT.


// LOGGING/TESTING ; not to include in final code
console.log(`Name: ${person77.name}`)           // "Name: Juice"
console.log(`Age: ${person77.age}`)             // "Age: 30"
console.log(`Career: ${person77.career}`)       // "Career: Head of UX Design"


console.log(person77.getTheirAge())     // returns '30', to represent age of Juice(person77)
// the above could also look like >> let P77 = person77.getTheirAge()
// , of which would follow >> console.log("P77 Age:", P77) >> P77 Age: 30

console.log(person77.getTheirCar())     // Mazzda CX5
// console.log(person77.getTheirName()) << will NOT print, as the function is OUTSIDE the relevant CLASS
// 'console.log(person77.getTheirCar)' will just print >> [Function: getTheirCar]

//  ANOTHER CLASSSSSSS:
class House {
    constructor(address, houseVal, politicalParty, residentNames) {
        this.address = address;
        this.houseVal = houseVal;
        this.politicalParty = politicalParty;
        this.residentNames = residentNames;
    }

    getAddress = () => {return this.address}
    getValue = () => {return this.houseVal}
    getPParty = () => {return this.politicalParty}
    getResidents = () => {return this.residentNames}

    addResident = (resident) => {this.residentNames.push(resident)}
} // end_of_House_Class

// more persons for reference...
let sister = new somePerson("Yodee", 31, "Speech Pathologist", "ATV 4-Wheeler")
let mother = new somePerson("Penny", 52, "Health Educator", "BMW X9")

// a new child-CLASS based on 'House', called 'oldHouse'
let oldHouse = new House("150-30 Shore Avenue", 725000, "Independent", [sister, mother])

console.log(oldHouse.getResidents()) // prints an array of the above two people ^  ^

// create new resident to be added:
let grandma = new somePerson("Emma", 88, "Seamstress", "Mercedes-Benz 770 Grober")

oldHouse.addResident(grandma)

console.log(oldHouse.getResidents()) // prints an array of the above THREE people^

let cat = new somePerson("Fluffy", 6)
oldHouse.addResident(cat)
console.log(oldHouse.getResidents()) // prints an array of the above FOUR people^

