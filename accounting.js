'use strict'

let tableEl = document.getElementById("tableID");


function render() {
   
    let tr = document.createElement("tr");
    tableEl.appendChild(tr);

    let nameTd = document.createElement("td");
    nameTd.textContent = this.department;
    tr.appendChild(nameTd);

    let numTd=document.createElement("td");
    numTd.textContent =
    tr.appendChild(numTd);

    let totalSalaryTd = document.createElement("td");
    totalSalaryTd.textContent = this.salary();
    tr.appendChild(totalSalaryTd);
    
    let averageSalaryTd = document.createElement("td");
    averageSalaryTd.textContent = this.salary();
    tr.appendChild(averageSalaryTd);

    
}

for(let i=0 ; i<employee.length ;i++){


    if (employee[i].department=="Administration"){

     
    }else if (employee[i].department=="Finance"){

    } else if (employee[i].department=="Marketing"){


    }else {

    }

}












