const data = JSON.parse(localStorage.getItem("formData"));
let flag = "false";

document.getElementById("form").addEventListener("submit",

function(e) {
    e.preventDefault();

    const sname = document.getElementById("fullname").value;
    const sid = document.getElementById("studentid").value;
    const smail = document.getElementById("mail").value;
    const snumber = document.getElementById("number").value;

    for( let d of data)
    {
        if(d.sid === sid)
        {
            flag = "true";
        }
    }

    if(flag === "true")
    {
        document.getElementById("submitSuccess").innerHTML= "Student ID already exists!!!";
        setTimeout(function(){
            document.getElementById("submitSuccess").innerHTML="";
        }, 2000);

        flag = "false";
    }
    else
    {
        const formData = {
            sname: sname,
            sid: sid,
            smail: smail,
            snumber: snumber
        };
    
        addRecord(formData);
    }

});

function addRecord(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));

    document.getElementById("fullname").value = '';
    document.getElementById("studentid").value = '';
    document.getElementById("mail").value = '';
    document.getElementById("number").value = '';

    registered();
   
}

function registered(){
    document.getElementById("submitSuccess").innerHTML="Student registered successfully!!!";
    document.getElementById("submitSuccess").style.color="green";
    document.getElementById("submitSuccess").style.fontFamily="Arial";
    setTimeout(function(){
        document.getElementById("submitSuccess").innerHTML="";
    }, 2000);    
}

