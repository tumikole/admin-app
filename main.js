function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("mySearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                        txtValue = td.textContent || td.innerText;
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                tr[i].style.display = "";
                        } else {
                                tr[i].style.display = "none";
                        }
                }
        }
}

const employee = event => {
        let formData = {
                fname: document.querySelector("#fname").value,
                lname: document.querySelector("#lname").value,
                idNumb: document.querySelector("#idNumb").value,
                position: document.querySelector("#position").value,
                salary: document.querySelector("#salary").value
        }
        localStorage.setItem('formData', JSON.stringify(formData));
        displayData();
        clearFields();

        event.preventDefault();
}

function displayData() {
        let { fname, lname, idNumb, position, salary } = JSON.parse(localStorage.getItem('formData'));
        var output = document.querySelector('#output');
        output.innerHTML = `
             <tr>
                                                      <th>FirstName</th>
                                                      <td>${fname}</td>
                                                      <th>LastName</th>
                                                       <td>${lname}</td>
                                                       <th>IdNumber</th>
                                                       <td>${idNumb}</td>
                                                       <th>Position</th>
                                                          <td>${position}                                                          <button type="button" class="btn editIt">Edit</button>
                                                          <button type="button" class="btn saveIt">Save</button></td>
                                                       </td>
                                                       <td>Salary</td>
                                                           <td>${salary}
                                                           <button type="button" class="btn editIt">Edit</button>
                                                           <button type="button" class="btn saveIt">Save</button></td>
                                                        
                                                    </tr>
                                                    `;

}

displayData();

function clearFields() {
                        document.querySelector('#fname').value = '';
                        document.querySelector('#lname').value = '';
                        document.querySelector('#idNumb').value = '';
                        document.querySelector('#position').value = '';
                        document.querySelector('#salary').value = '';
                }




// class Employee {
//         constructor(firstName, lastName, idNumber, position, salary) {
//                 this.firstName = firstName
//                 this.lastName = lastName
//                 this.idNumber = idNumber
//                 this.position = position
//                 this.salary = salary
//         }
// }

// class UI {
//         static displayEmployees() {
//                 const employees = Store.getEmployees();
//                 employees.forEach((employee) => UI.addEmployeeToList(employee));
// console.log(employees)
//         }

//         static addEmployeeToList(employee) {
//                 const list = document.querySelector('#output');
//                 const row = document.createElement('tr');
//                 output.innerHTML = `
//                 <tr>
//                                                         <td>${employee.firstName}</td>
//                                                          <td>${employee.lastName}</td>
//                                                          <td>${employee.idNumber}</td>
//                                                           <td>${employee.position}
//                                                           <button type="button" class="btn editIt">Edit</button>
//                                                              <button type="button" class="btn saveIt">Save</button></td>
//                                                           </td>
//                                                              <td>${employee.salary}
//                                                              <button type="button" class="btn editIt">Edit</button>
//                                                              <button type="button" class="btn saveIt">Save</button></td>
//                                                              <td><button type="button" class="btn btn-danger delete">x</button></td>
//                                                      </tr>
//                                                      `;
//                 list.appendChild(row);
//         }

//         static deleteEmployee(el) {
//                 if (el.classList.contains('delete')) {
//                         el.parentElement.parentElement.remove();
//                 }
//         }

//         static clearFields() {
//                 document.querySelector('#fname').value = '';
//                 document.querySelector('#lname').value = '';
//                 document.querySelector('#idNumb').value = '';
//                 document.querySelector('#position').value = '';
//                 document.querySelector('#salary').value = '';
//         }
// }

// class Store {

//         static getEmployees() {
//                 let employees;
//                 if (localStorage.getItem('employee') === null) {
//                         employees = [];
//                 } else {
//                         employees = JSON.parse(localStorage.getItem('employees'));
//                         return employees;
//                 }
//         }

//         static addEmployee(employee) {
//                 const employees = Store.getEmployees();
//                 localStorage.setItem('employee', JSON.stringify(employees));
//                 employees.push(employees);
//                 localStorage.setItem('employees', JSON.stringify(employees));
//         }

//         static removeEmployee(idNumber) {
//                 const employees = Store.getEmployees();
//                 employees.forEach((employee, index) => {
//                         if (employee.idNumber === idNumber) {
//                                 employees.splice(index, 1);
//                         }
//                 });

//                 localStorage.setItem('employees', JSON.stringify(employees));
//         }
// }

// document.addEventListener('DOMContentLoaded', UI.displayEmployees);
// document.querySelector('#myForm').addEventListener('submit', (event) => {

//         event.preventDefault();


//         const firstName = document.querySelector("#fname").value;
//         const lastName = document.querySelector("#lname").value;
//         const idNumber = document.querySelector("#idNumb").value;
//         const position = document.querySelector("#position").value;
//         const salary = document.querySelector("#salary").value;


//         if (firstName === '' || lastName === '' || idNumber === '' || position === '' || salary === '') {
//                 alert('Please fill all fields');
//         } else {

//                 const employee = new Employee(firstName, lastName, idNumber, position, salary)

//                 UI.addEmployeeToList(employee);
//                 Store.addEmployee(employee)
//                 UI.clearFields();
//         }


// });

// document.querySelector('#output').addEventListener('click', (e) => {
//         UI.deleteEmployee(e.target);
//         Store.removeEmployee(e.target.parentElement);
// })
