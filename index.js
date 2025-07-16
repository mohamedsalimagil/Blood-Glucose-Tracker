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