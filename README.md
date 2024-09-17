About Project:
This is a simple project to add, update and delete student records like student name, id, email and number.

Technologies used:
HTML, CSS, Javascript.

Functionalities:
1. Add a record:
   To add a record, go to - Home, fill in the form details, click ‘Add Record’. The added record will appear in View Records table.
   ![Screenshot (116)](https://github.com/SS11146111/student-registration-system/assets/71815480/33026499-fbd1-4701-aaa2-9b2f2b0946a8)
   ![Screenshot (117)](https://github.com/SS11146111/student-registration-system/assets/71815480/89fda574-b6f0-49e8-9275-235927534b21)
   ![Screenshot (118)](https://github.com/SS11146111/student-registration-system/assets/71815480/d7487b3e-c4b6-4b66-9129-8f2bb454f1ff)

   index.js contains the code for adding a new record. The details from the form fields are collected into an object (formData) which is
   merged with the existing array of records (storedFormData.push(formData);) and then stored in localStorage.
   (localStorage.setItem('formData', JSON.stringify(storedFormData));) .Student id is considered unique. Duplicate records by student id
   does not get added

2. Edit a record:
   To edit a record, go to ‘View Records’, click the corresponding edit button, a window will pop up where you can fill the updated 
   information and then click ‘Update record’. The updated record will appear in View Records table.
   ![Screenshot (121)](https://github.com/SS11146111/student-registration-system/assets/71815480/dd70486f-49c6-4ff7-820b-c57f816be005)
   ![Screenshot (123)](https://github.com/SS11146111/student-registration-system/assets/71815480/c3544e79-d3af-4af9-b0d5-d45cdd353533)
   ![Screenshot (124)](https://github.com/SS11146111/student-registration-system/assets/71815480/d97ff99f-bd7d-47d4-b901-658cce05cd19)

   viewRecords.js( line 45 onwards ), contains the code to edit/update a record. When the edit button is clicked,
   position(index) in the table of the record to be edited is obtained. The existing records are fetched(currentData). The edit form is
   displayed to obtain the updated information and the updated information is collected in an object (updatedData). This updated data is merged
   with the existing data ( currentData.splice(index, 1, updatedData);) and stored in localStorage(localStorage.setItem("formData", JSON.stringify(currentData));)

4. Delete a record:
   To delete a record, go to 'View Records',click the corresponding delete button and confirm the delete action.
   ![Screenshot (125)](https://github.com/SS11146111/student-registration-system/assets/71815480/977edb16-4758-4df6-b69a-d367c181d0eb)
   ![Screenshot (126)](https://github.com/SS11146111/student-registration-system/assets/71815480/bf272659-c51f-419a-894a-4228c6d70ea8)

   viewRecords.js(line 27 to 44) contains the code to delete a record. When the delete button is clicked, first the parent node and the student id
   of the record to be deleted is obtained. Then a confirm message is shown to confirm the delete action. On confirmation, the record is removed from the table
   using the parent node (parent.remove();). The existing records are fetched and the record to be deleted is filtered out
   ( existingData = existingData.filter((d) => d.sid !== deleteRecordId)) and then stored in localStorage (localStorage.setItem("formData", JSON.stringify(existingData));).


Author: Sangita Saha
Project link: https://github.com/SS11146111/student-registration-system.git
Site : https://sangitastudentregistrationsystem.netlify.app






