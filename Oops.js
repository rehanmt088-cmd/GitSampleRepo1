/*class  Student{
    name = "Anu"
    #mark = 85

    displayDetails(){
        console.log("Name: ", this.name)
        console.log("Mark: ", this.#mark)
    }
}
let student1 = new Student()
console.log(student1.name)
// console.log(student1.#mark)
student1.displayDetails()*/

// class Employee{
//     name = "Rahul"
//     #salary = 25000

//     displayDetails(){
//         console.log("Name: ", this.name)
//         console.log("Salary: ", this.#salary)
//     }
// }
// let employee1 =  new Employee()
// console.log(employee1.name)
// employee1.displayDetails()

// class BankAccount{
//     #balance = 1000

//     getBalance(){
//         return this.#balance
//     }

//     deposit(amount){
//         if(amount > 0){
//             this.#balance += amount
//             // this.#balance = this.#balance + amount
//         }      
//     }
// }
// const obj = new BankAccount()
// obj.deposit(500)
// console.log(obj.getBalance())
// // obj.deposit(500)
// // console.log(obj.getBalance())

// class Employee{
//     #salary = 20000
     
//     getSalary(){
//         return this.#salary
//     }

//     updateSalary(amount){
//         if(amount > 0){
//             this.#salary = amount
//         }
//     }
// }

// let obj = new Employee()
// obj.updateSalary(25000)
// console.log("Employee Salary: " + obj.getSalary())

// class Animal{
//     sound(){
//         console.log("Animal makes sound")
//     }
// }

// class Dog extends Animal{
//     sound(){
//         console.log("Dog barks")
//     }
// }

// class Cat extends Animal{
//     sound(){
//         console.log("Cat meows")
//     }
// }

// let dog = new Dog()
// let cat = new Cat()

// dog.sound()
// cat.sound()

// class Payment{
//     pay(){
//         console.log("Making a payment")
//     }
// }

// class UPI{
//     pay(){
//         console.log("Payment done using UPI")
//     }
// }

// class  CreditCard{
//     pay(){
//         console.log("Payment done using CreditCard")
//     }
// }

// const upi = new UPI()
// const credit = new CreditCard()

// upi.pay()
// credit.pay()

class Notification{
    send(){
        console.log("Sending a Notification")
    }
}

class Email extends Notification{
    send(){
        console.log("Send Notification through Email")
    }
}

class SMS extends Notification{
    send(){
        console.log("Send notification through SMS")
    }
}

const email = new Email()
const sms = new SMS()

email.send()
sms.send()

