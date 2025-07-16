document.addEventListener("DOMContentLoaded", () => {
    // get reference to the form element
    const form = document.getElementById('record-form');
    const submitBtn = form.querySelector('button');
const tableBody = document.getElementById('record-table-body');
let currentRecordId= null;
    function fetchRecords(){
        fetch("http://localhost:3000/records")//Get request to the Api
        .then(res => res.json()) //convert the response to json
        .then(records => {
            tableBody.innerHTML = ''; // CLEAR any exxisting rows
             records.forEach(renderRecord); // render each record
             });

    }
    //render a single record as a table row
   function renderRecord(record) {
    const tr = document.createElement('tr'); //create a row element
    tr.innerHTML =`
    <td>${record.date}</td>
    <td>${record.time}</td>
    <td>${record.level}</td>
    <td><button class="edit-btn" data-id="${record.id}">Edit</button>
    <button class="delete-btn" data-id="${record.id}">Delete</button></td>
    `;
    // Add functionality to the Edit button
    const editBtn = tr.querySelector('.edit-btn');
    editBtn.addEventListener('click',()=> {
        // prefill the form with this record current info
        form.date.value= record.date
        form.time.value= record.time
        form.level.value= record.level
        // save the record id so we can patch it later
        currentRecordId = record.id
        submitBtn.textContent = 'Update';
    });
    const deleteBtn = tr.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        const confirmDelete= confirm("Are you sure you want to delete this record?");
        if (! confirmDelete)return;
        fetch(`http://localhost:3000/records/${record.id}`,{
            method: 'DELETE'
        })
        .then(fetchRecords);                         
            })
    // add a raw to the table
    tableBody.appendChild(tr);
        }
        //handle form submission to update the dog
   form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    
    const recordData = {
        
        date: form.date.value,
        time: form.time.value,
        level:parseFloat(form.level.value)
    };
    const url = currentRecordId
    ? `http://localhost:3000/records/${currentRecordId}`
    : 'http://localhost:3000/records';
    const method = currentRecordId ? 'PATCH' : 'POST';
    fetch(url,{
        method,
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(recordData)
    })
    .then(response=> response.json())
    .then(() =>{
        currentRecordId = null;
        form.reset();
        submitBtn.textContent = 'Add';
        fetchRecords();
    });
     
   });
   // call this once the page loads
   fetchRecords()
   
});