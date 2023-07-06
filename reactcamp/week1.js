class Student{
    constructor(name, email, community){
        this.name = name,
        this.email = email,
        this.community = community
    }
}

class Bootcamp{
    constructor(name, level, students=[]){
        this.name = name
        this.level = level
        this.students = students
    }
        registerStudent(registerStudent){
           const tempArray = this.students.filter((student) => registerStudent.email === student.email);
           if( tempArray.length === 0 ){
            this.students.push(registerStudent);
            console.log(`Student with email ${registerStudent.email} has been added`)
           } else {
               console.log(`Student with email ${registerStudent.email} already exists`)
           }
           return this.students
    }
}

const boot = new Bootcamp("Web Dev", "Intermediate")
const stud1 = new Student("John", "john@gmail.com", "Los Angeles")
const stud2 = new Student("Alice", "alice@gmail.com", "Chicago")
const stud3 = new Student("Tom", "tom@gmail.com", "San Diego")
boot.registerStudent(stud1)
boot.registerStudent(stud2)
boot.registerStudent(stud3)
boot.registerStudent(stud1)
console.log(boot)




