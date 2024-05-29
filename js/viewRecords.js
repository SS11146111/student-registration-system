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
        const deleteRecordId = parent.childNodes[3].innerHTML;
        parent.remove();

        var existingData =JSON.parse(localStorage.getItem("formData"));
        existingData = existingData.filter((d) => d.sid !== deleteRecordId)
        localStorage.setItem("formData", JSON.stringify(existingData));
    } 
    
    else if(data.classList[0] === "editBtn"){

      const parent = data.parentNode.parentNode;
      const editRecordId = parent.childNodes[3].innerHTML;

      let currentData =JSON.parse(localStorage.getItem("formData"));
      currentData = currentData.filter((d) => d.sid !== editRecordId);
      
      
      document.getElementById("editContainer").style.display = "block";
      document.getElementById("closeTab").addEventListener("click", function(e){
        e.preventDefault();
        document.getElementById("editContainer").style.display = "none";
      })

      document.getElementById("updateBtn").addEventListener("click", function(e){
        e.preventDefault();
        const sname = document.getElementById("fullname").value;
        const sid = document.getElementById("studentid").value;
        const smail = document.getElementById("mail").value;
        const snumber = document.getElementById("number").value;

        const updatedData = {
          sname: sname,
          sid: sid,
          smail: smail,
          snumber: snumber
      };

      
      
       currentData.push(updatedData);
       localStorage.setItem("formData", JSON.stringify(currentData));
       document.getElementById("editContainer").style.display = "none";
       location.reload();

      })
      
  
      

      

      

      

      
    

    }
        
  }
)