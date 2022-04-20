function Employee(employeeID,fullName,department,level,imageURL){
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;

}

Employee.prototype.salary=function(){
    let randomSalary;
    let netSalary;
    let taxPersent=0.075;
    if(this.level=="Senior"){
        randomSalary=getRndInteger(1500,2000);
        netSalary=randomSalary-taxPersent*randomSalary;
    }else if(this.level=="Mid-Senior"){
        randomSalary=getRndInteger(1000,1500)
        netSalary= randomSalary-taxPersent* randomSalary;
         }
    else {
        netSalary=getRndInteger(500,1000)-taxPersent*getRndInteger(500,1000);
      }
return netSalary;
    }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let employee1= new Employee(1000,"Ghazi Samer","Administration","Senior","./assets/Ghazi.png");
let employee2= new Employee(1001,"Lana Ali","Finance","Senior","./assets/lana.png");
let employee3= new Employee(1002,"Tamara Ayoub","Marketing","Senior","./assets/tamara.png");
let employee4= new Employee(1003,"Safi Walid","Administration","Mid-Senior","./assets/safi.png");
let employee5= new Employee(1004,"Omar Zaid","Development","Senior","./assets/omar.png");
let employee6= new Employee(1005,"Rana Saleh","Development","Junior","./assets/rana.png");
let employee7= new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","./assets/hadi.png");

// &nbsp is two add a white space && "<br>" to add a line break
Employee.prototype.render = function () {
    document.write(`The name of the employee: ${this.fullName}  &nbsp &nbsp &nbsp &nbsp   his/her salary :${this.salary()}`);
    document.write("<br>");
    
}
employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();
