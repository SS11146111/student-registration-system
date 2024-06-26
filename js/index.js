document.getElementById("form").addEventListener("submit",
//when 'Add Record' button is clicked on the form, the following function will execute
function(e) {
    e.preventDefault();
    
    const data = JSON.parse(localStorage.getItem("formData"));
    let flag = "false";
    
    //collecting the student details from the form input fields
    const sname = document.getElementById("fullname").value;
    const sid = document.getElementById("studentid").value;
    const smail = document.getElementById("mail").value;
    const snumber = document.getElementById("number").value;

    //checking if student id is unique
    if(data != null)
        {
            for(let d of data)
                {
                    if(d.sid === sid)
                    {
                        flag = "true";
                    }
                }
        
        }
    
    //if student id already exists
    if(flag === "true")
    {
        document.getElementById("submitSuccess").innerHTML= "Student ID already exists!!!";
        document.getElementById("submitSuccess").style.color="black";
        document.getElementById("submitSuccess").style.fontFamily="Arial";
        setTimeout(function(){
            document.getElementById("submitSuccess").innerHTML="";
        }, 2000);

        flag = "false";
    }
    else //if student id is new
    {
        if (sname == " ") {
            alert("Enter valid Student name...");
            return false;
        }
        
        const formData = {
            sname: sname,
            sid: sid,
            smail: smail,
            snumber: snumber
        };
    
        addRecord(formData);
    }

});

//function to merge new record with existing data and storing it in localStorage
function addRecord(formData) {
    let storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    storedFormData = storedFormData.sort((a,b) => { return a.sid - b.sid});


    localStorage.setItem('formData', JSON.stringify(storedFormData));

    document.getElementById("fullname").value = '';
    document.getElementById("studentid").value = '';
    document.getElementById("mail").value = '';
    document.getElementById("number").value = '';

    registered();
   
}

//on successful insertion of a record, this function will show a success message
function registered(){
    document.getElementById("submitSuccess").innerHTML="Student registered successfully!!!";
    document.getElementById("submitSuccess").style.color="green";
    document.getElementById("submitSuccess").style.fontFamily="Arial";
    setTimeout(function(){
        document.getElementById("submitSuccess").innerHTML="";
    }, 2000);    
}


