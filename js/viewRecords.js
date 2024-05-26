var data =JSON.parse(localStorage.getItem("formData"));

var tableData = data.map(record => (
    `
    <tr>
        <td>${record.sname}</td>
        <td>${record.sid}</td>
        <td>${record.smail}</td>
        <td>${record.snumber}</td>
        <td><button id="editBtn">Edit</button></td>
        <td><button id="deleteBtn">Delete</button></td>
    </tr>
    `
  )).join('');

  document.getElementById("tableBody").innerHTML = tableData;