'use strict'
let employee=[];
function Employee(employeeID,fullName,department,level,imageURL){
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    employee.push(this);
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

let employee1= new Employee(1000,"Ghazi Samer","Administration","Senior","./assest/Ghazi.jpg");
let employee2= new Employee(1001,"Lana Ali","Finance","Senior","./assest/Lana.jpg");
let employee3= new Employee(1002,"Tamara Ayoub","Marketing","Senior","./assest/Tamara.jpg");
let employee4= new Employee(1003,"Safi Walid","Administration","Mid-Senior","./assest/Safi.jpg");
let employee5= new Employee(1004,"Omar Zaid","Development","Senior","./assest/Omar.jpg");
let employee6= new Employee(1005,"Rana Saleh","Development","Junior","./assest/Rana.jpg");
let employee7= new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","./assest/Hadi.jpg");



// This is the begining of task 8
Employee.prototype.ID =function(){
   return  Math.floor(1000 + Math.random() * 9000);
};



//  This is the hard part ***********************************************************



let form = document.getElementById("formID");
let section=document.getElementById("cardSection");
   
   
Employee.prototype.render = function (){   
    
    let imageEl = document.createElement('img');
    imageEl.width=150;
    imageEl.src = this.imageURL;
    section.appendChild(imageEl);
    
    let name = document.createElement('h3');
    name.textContent =`Name :${this.fullName}`;
    section.appendChild(name);
     
    let id = document.createElement('p');
    id.textContent =`ID -${this.employeeID}`;
    section.appendChild(id);

    let department = document.createElement('p');
    department.textContent =`Department:${this.department}`;
    section.appendChild(department);
    
    let level = document.createElement('p');
    level.textContent =`Level : ${this.level}`;
    section.appendChild(level);

    let salary = document.createElement("h6");
    salary.textContent =`salary :${this.salary()}`;
    section.appendChild(salary);
    

}

for(let i=0;i<employee.length;i++){
    employee[i].render();
}


 form.addEventListener("submit", handleSubmit);
 

 function handleSubmit(event) {
    event.preventDefault();
   
    let id=Employee.prototype.ID();
    let fullName=event.target.fullName.value;
    let department=event.target.Department.value;
    let level=event.target.Level.value;
    let img=event.target.image.value;
    let salary=Employee.prototype.salary();
    console.log(fullName,department,level,img);
    if(!fullName||! department||! level|| !img){

        alert("please full all the boxes");
        return;
    }
    
   let newEmployee=new Employee (id,fullName,department,level,image,salary);
   newEmployee.render();
}
