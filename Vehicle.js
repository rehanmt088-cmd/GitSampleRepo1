class Vehicle{
    start(){
        console.log("Vehicle is starting")
    }
}

class Car extends Vehicle{
    drive(){
        console.log("Car is driving")
    }
}

let car = new Car()
car.start()
car.drive()