// console.log("Washing Machine is started")

// setTimeout(() => {
//     console.log("Washing Completed - Clothes are ready")
// },3000)
// console.log("Do other work")

// let orderStatus = "Order Placed"
// console.log(orderStatus)

// setTimeout(() => {
//     orderStatus = "Food is Ready"
//     console.log(orderStatus)
// },4000)

// console.log("You can continue doing work")

let foodOrder = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Food is ready")
    },3000)
})
console.log("Food order placed")
foodOrder
    .then((result) =>{
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })