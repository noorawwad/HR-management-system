function Employee(employeeID,fullName,department,level,imageURL){
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;

}

Employee.prototype.salary=function(){
    let netSalary;
    let taxPersent=0.075;
    if(this.level=="Senior"){
        netSalary=getRndInteger(1500,2000)-taxPersent*getRndInteger(1500,2000);
    }else if(this.level=="Mid-Senior"){
        netSalary=getRndInteger(1000,1500)-taxPersent*getRndInteger(1000,1500);
         }
    else {
        netSalary=getRndInteger(1000,1500)-taxPersent*getRndInteger(500,1000);
      }
return netSalary;
    }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let employee1= new Employee(1000,"Ghazi Samer","Administration","Senior");
let employee2= new Employee(1001,"Lana Ali","Finance","Senior");
let employee3= new Employee(1002,"Tamara Ayoub","Marketing","Senior");
let employee4= new Employee(1003,"Safi Walid","Administration","Mid-Senior");
let employee5= new Employee(1004,"Omar Zaid","Development","Senior");
let employee6= new Employee(1005,"Rana Saleh","Development","Junior");
let employee7= new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

Employee.prototype.render = function () {
    document.write(`The name of the employee: ${this.fullName} he/she takes :${this.salary()}`);
}
employee1.render();