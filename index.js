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
    