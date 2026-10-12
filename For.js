// let student = {
//     name: "Anu",
//     age: 22,
//     course: "JavaScript",
//     city: "Bangalore"
// };

// for(let key in student){
//     console.log(key)
// }

// for(let key in student){
//     console.log(student[key])
// }


/*let product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics"
}

for(let key in product){
    // console.log(key)
    // console.log(product[key])
    console.log(key + ":" + product[key])
}*/

// let employee = {
//     name: "Rahul",
//     age: 30,
//     department: "Testing",
//     experience: 5
// };

// for(let key in employee){
//     console.log(key + ": " + employee[key])
// }

// let fruits = ["Apple", "Banana", "Mango", "Orange"]; 
// for(fruit of fruits){
//     console.log(fruit)
// }

// let marks = [75, 80, 65, 90, 85];
// let total=0
// for(mark of marks){
//     total = total + mark
// }
// console.log(total)

// let prices = [100, 250, 150, 300, 200]; 
// let total=0
// for(price of prices){
//     total = total + price
// }
// console.log(total)

// let words = ["Apple", "Banana", "Cat", "Elephant", "Dog"]
// let result=words.filter((word) => {
//     return word.length > 5
// })
// console.log(result)

// const numbers = [2,3,4]
// const squares = numbers.map(number => number * number)
// console.log(squares)

const numbers = [5,10,15,20]
const result = numbers.filter( number => number > 10)
console.log(result)

let marks = [45, 78, 60, 85, 52]
let passed = marks.filter(mark => mark > 60)
console.log(passed)