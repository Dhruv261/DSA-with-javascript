// What is a class?
// Understand how javascript implements the idea of classes
// Define the term like abstraction, encapsulation and polymorphism
// Use RS2015 Classes to implement data structores


// What is a class? ------------ 

/* ->A blueprint for creating objects with pre-defined properties and methods.*/
 


// The syntax


// Class
class Students{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}


//Instaces using the new keyword


let firstStudentX = new Students('Colt', 'Steele')

let secondStudentX = new Students('Blue', 'Steele')


// Instance methods


class Student {
  constructor(firstName, lastName, grade) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = grade
    this.late = 0
    this.score = []
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`
  }
  markLate(){
    this.late += 1
    return `${this.firstName} ${this.lastName} is late ${this.late} times.`
  }
  addScore(scores){
      this.score.push(scores)
      return this.score
  }
  calculateAverage(){
      let sum = this.score.reduce(function(a,b){return a+b})
      return sum / this.score.length
  }

// Class Methods

    static EnrollStudent(){
        return `EnrollStudent`
    }
}

let firstStudent = new Student('Dhruv', 'Dhiman',3)
let secondStudent = new Student('Someone' , 'Two', 5)


