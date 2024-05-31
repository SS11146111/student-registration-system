var data =JSON.parse(localStorage.getItem("formData"));

//creating the data to be displayed in the table in 'View Records'
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

//displaying the data in the table in 'View Records'
document.getElementById("tableBody").innerHTML = tableData;

document.getElementById("tableBody").addEventListener("click",
//when a button is clicked on the table in 'View Records',the following function will execute
  function(e){
   
    const data = e.target;
    //if a delete button is clicked
    if(data.classList[0] === "deleteBtn"){

      const parent = data.parentNode.parentNode;
      const deleteRecordId = parent.childNodes[3].innerHTML; //getting the student id of the record to be deleted
      parent.remove(); //removing the row to be deleted from the table

      //revoming the deleted row from localStorage
      var existingData =JSON.parse(localStorage.getItem("formData"));
      existingData = existingData.filter((d) => d.sid !== deleteRecordId)
      localStorage.setItem("formData", JSON.stringify(existingData));
    } 
    else if(data.classList[0] === "editBtn"){ //if an edit button is clicked

      const parent = data.parentNode.parentNode;
      const editRecordId = parent.childNodes[3].innerHTML;//getting the student id of the record to be edited

      let currentData =JSON.parse(localStorage.getItem("formData"));//getting the remaing records except the record on which the edit button was clicked
      currentData = currentData.filter((d) => d.sid !== editRecordId);
        
      document.getElementById("editContainer").style.display = "block";//displaying the edit form to get the updated information
      document.getElementById("screen2").style.display = "block";

      document.getElementById("closeTab").addEventListener("click", function(e){
        e.preventDefault();
        document.getElementById("editContainer").style.display = "none";
        document.getElementById("screen2").style.display = "none";
      })

      document.getElementById("updateBtn").addEventListener("click", function(e){ //when the updated information is filled and 'Update Record' is clicked
        e.preventDefault();
          
        //collecting the updated data
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

        //merging the new data with the remaining data and writing it to localStorage
        currentData.push(updatedData);
        localStorage.setItem("formData", JSON.stringify(currentData));

        document.getElementById("editContainer").style.display = "none";
        document.getElementById("screen2").style.display = "none";

        location.reload();
      })

    }     
  }
)