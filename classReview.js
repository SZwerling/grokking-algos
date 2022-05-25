// 'class' keyword creates a constant
// method to create new objects must be called constructor.
// The student class above is a pattern or blueprint for instantiating objects. 

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = null;
    }
    sayHello(name){
        console.log(`Mr.${this.lastName} says hello to ${name}`)
    }
    markLate(num){
        this.tardies += num;
        return this.tardies
    }
    static scream(){
        return `Grrrawww!`
    }
}

// With classes, 'this' refers to the individual instatiation of the class.
// Inside the object 'john', 'this' referes to the object called 'john'.

// sayHello(name) is an instance method. Because it
// corresponds with individual instances. Each instance gets a different output.

const john = new Student('john', 'smith')
john.sayHello('Ralph')
console.log(john.markLate(5))
// Static method can only be called on class. Not individual instances.
console.log(Student.scream())