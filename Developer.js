import { Company } from "./Company.js";

class Developer extends Company{
    writeCode(){
        console.log("Developer can Write Code")
    }

    testApplication(){
        console.log("Developer can Test Application")
    }

    bugFix(){
        console.log("Developer can Fix bug")
    }

}

let obj = new Developer()
obj.employeeRegistration()
obj.writeCode()
obj.testApplication()
obj.bugFix()
