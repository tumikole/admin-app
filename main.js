window.onload = function() {
    myForm = document.getElementById("myForm");

    addEventListener('submit', function(event) {
        event.preventDefault();
        firstName = document.getElementById("fname").value,
            lastName = document.getElementById("lname").value,
            idNumber = document.getElementById("idNumb").value,
            position = document.getElementById("position").value,
            salary = document.getElementById("salary").value
        output = document.getElementById("output");
        console.log(output)
            // console.log(firstName, lastName, idNumber, position, salary)
        var employeeList = new EmployeeList(firstName, lastName, idNumber, position, salary)
        console.log(employeeList)
        UI.displayData(employeeList);
        UI.clearFields();



    });
    class EmployeeList {
        constructor(firstName, lastName, idNumber, position, salary) {
            this.firstName = firstName
            this.lastName = lastName
            this.idNumber = idNumber
            this.position = position
            this.salary = salary
        }
    }

    class UI {
        static clearFields() {
            document.getElementById("fname").value = ""
            document.getElementById("lname").value = ""
            document.getElementById("idNumb").value = ""
            document.getElementById("position").value = ""
            document.getElementById("salary").value = ""
        }
        static displayData(employeeList) {

            UI.populatedRow(employeeList)
        }
        static populatedRow(employeeList) {
            output.innerHTML = `<tr>
                                                            <td>${employeeList.firstName}</td>
                                                             <td>${employeeList.lastName}</td>
                                                             <td>${employeeList.idNumber}</td>
                                                              <td>${employeeList.position}
                                                              <button type="button" class="btn btn-secondary">Edit<i class="far fa-trash-alt"></i></button>
                                                              <button type="button" class="btn btn-warning">ave</button></td>
                                                                 <td>${employeeList.salary}
                                                                 <button type="button" class="btn btn-secondary">Edit<i class="far fa-trash-alt"></i></button>
                                                                 <button type="button" class="btn btn-warning">ave</button></td>
                                                                 <td><button type="button" class="btn btn-danger">x</button></td>
                                                         </tr>`
        }
    }
}
UI.displayData()