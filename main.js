// let employeeList = []
const register = event => {
    event.preventDefault()
    let formData = {
        validationCustom01: document.getElementById("validationCustom01").value,
        validationCustom02: document.getElementById("validationCustom02").value,
        validationCustom03: document.getElementById("validationCustom03").value,
        validationCustom04: document.getElementById("validationCustom04").value,
        validationCustom05: document.getElementById("validationCustom05").value
    }
    displayData()
    localStorage.setItem('formData', JSON.stringify(employeeList));
    event.preventDefault();
}



const displayData = () => {
    window.addEventListener('load', displayData)

    console.log(JSON.parse(localStorage.getItem('formData')))

    let { validationCustom01, validationCustom02, validationCustom03, validationCustom04, validationCustom05 } = JSON.parse(localStorage.getItem('formData'));
    var output = document.querySelector('#output');
    output.innerHTML += `<tr>

            <td>${data[i].validationCustom01} </td>
            <td>${data[i].validationCustom02}</td>
            <td>${data[i].validationCustom03}</td>
            <td>${data[i].validationCustom04}
            <button id="table_btn" type="button" class="btn btn-warning">Edit</button>
            <button id="table_btn" type="button" class="btn btn-success">Save</button></td>
            <td>${data[i].validationCustom05}
            <button id="table_btn" type="button" class="btn btn-warning">Edit</button>
            <button id="table_btn" type="button" class="btn btn-success">Save</button></td>


                  </tr>`

}