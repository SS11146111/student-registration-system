var data =JSON.parse(localStorage.getItem("formData"));

var tableData = data.map(record => (
    `
    <tr>
        <td>${record.sname}</td>
        <td>${record.sid}</td>
        <td>${record.smail}</td>
        <td>${record.snumber}</td>
        <td><button class="editBtn">Edit</button></td>
        <td><button class="deleteBtn">Delete</button></td>
    </tr>
    `
  )).join('');

  document.getElementById("tableBody").innerHTML = tableData;

  document.getElementById("tableBody").addEventListener("click",

  function(e){
   
    const data = e.target;
    if(data.classList[0] === "deleteBtn"){
        const parent = data.parentNode.parentNode;
        //const text=parent.childNodes[2].innerHTML;
        //alert(text);
        parent.remove();
    }
  }
  )