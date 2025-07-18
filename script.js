document.addEventListener("DOMContentLoaded", () => {// This ensures the DOM is fully loaded before running the script
const form = document.getElementById('record-form');//get the form element by its ID
    const submitBtn = form.querySelector('button');// get the submit button within the form
const tableBody = document.getElementById('record-table-body');// get the table body where records will be displayed
let currentRecordId= null;// variable to keep track of the record being edited
    function fetchRecords(){//function to fetch records from the server
        fetch("https://blood-glucose-tracker-9or0.onrender.com/records")//Get request to the Api
        .then(res => res.json()) //convert the response to json
        .then(records => {// once we have the records, we clear the table and render each record
            tableBody.innerHTML = ''; // CLEAR any exxisting rows
             records.forEach(renderRecord); // render each record in the table
             });

    }
    //render a single record as a table row
   function renderRecord(record) {
    const tr = document.createElement('tr'); //create a new table row element
    tr.innerHTML =`
    <td>${record.date}</td>
    <td>${record.time}</td>
    <td>${record.level}</td>
    <td><button class="edit-btn" data-id="${record.id}">Edit</button>
    <button class="delete-btn" data-id="${record.id}">Delete</button></td>
    `;//Set the row's HTML with record data and action buttons
    // Add functionality to the Edit button
    const editBtn = tr.querySelector('.edit-btn');// get the edit button within the row
    editBtn.addEventListener('click',()=> {// Add a click event listener to the edit button
        // prefill the form with this record current info
        form.date.value= record.date//prefill the form fields with the record data
        form.time.value= record.time//prefill the form fields with the record data
        form.level.value= record.level//prefill the form fields with the record data
         currentRecordId = record.id// save the record id so we can patch it later
        submitBtn.textContent = 'Update';//change the submit button text to 'Update'
    });
    const deleteBtn = tr.querySelector('.delete-btn');// get the delete button within the row
    deleteBtn.addEventListener('click', () => {// Add a click event listener to the delete button
        const confirmDelete= confirm("Are you sure you want to delete this record?");//confirm before deleting
        if (! confirmDelete)return;//if not confirmed, exit the function
        fetch(`https://blood-glucose-tracker-9or0.onrender.com/records/${record.id}`,{//send a DELETE request to the server
            method: 'DELETE'
        })
        .then(fetchRecords);   //refresh the records after deletion                      
            })
    // add a raw to the table
    tableBody.appendChild(tr);
        }
        //handle form submission to update the dog
   form.addEventListener("submit", (e) => {//prevent the default form submission behavior
    e.preventDefault(); // prevent the form from submitting in the traditional way
    
    const recordData = {//gather the form data into an object
        
        date: form.date.value,// get the date value from the form
        time: form.time.value,// get the time value from the form
        level:parseFloat(form.level.value)// get the level value from the form and convert it to a float
    };
    const url = currentRecordId//determine the URL based on whether we are editing or adding a new record
    ? `https://blood-glucose-tracker-9or0.onrender.com/records/${currentRecordId}`// if we are editing, use the specific record URL
    : 'https://blood-glucose-tracker-9or0.onrender.com/records/';// if we are adding, use the base URL for records
    const method = currentRecordId ? 'PATCH' : 'POST';//use PATCH for editing and POST for adding a new record
    fetch(url,{//send the record data to the server
        method,
        headers: {
            'Content-Type': 'application/json' // set the content type to JSON
        },
        body: JSON.stringify(recordData)// convert the record data to a JSON string
    })
    .then(response=> response.json())// parse the response as JSON
    .then(() =>{// once the record is added or updated, fetch the records again
        currentRecordId = null;// reset the current record ID
        form.reset();// reset the form fields
        submitBtn.textContent = 'Add';// reset the submit button text to 'Add'
        fetchRecords();// refresh the records list
    });
     
   });
 
//    // call this once the page loads to fetch and display existing records
   fetchRecords()
   
});