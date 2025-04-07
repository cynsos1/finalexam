// Function to get the census records from localStorage
function getCensusRecords() {
    const censusData = JSON.parse(localStorage.getItem('censusRecords')) || [];
    return censusData;
  }
  
  // Function to display census records in the table
  function displayRecords() {
    const records = getCensusRecords();
    const tableBody = document.querySelector("#census-list tbody");
    tableBody.innerHTML = '';
  
    records.forEach((record, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${record.year}</td>
        <td>${record.censusTaker}</td>
        <td>${record.numPeople}</td>
        <td>${record.address}, ${record.city}, ${record.state} ${record.zip}</td>
        <td><button onclick="deleteRecord(${index})">Delete</button></td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Function to add a new census record
  function addCensusRecord(e) {
    e.preventDefault();
    
    const newRecord = {
      year: document.getElementById('year').value,
      censusTaker: document.getElementById('censusTaker').value,
      numPeople: document.getElementById('numPeople').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zip: document.getElementById('zip').value,
    };
    
    const records = getCensusRecords();
    records.push(newRecord);
    localStorage.setItem('censusRecords', JSON.stringify(records));
    
    displayRecords();
    document.getElementById('census-form').reset();
  }
  
  // Function to delete a census record
  function deleteRecord(index) {
    const records = getCensusRecords();
    records.splice(index, 1);
    localStorage.setItem('censusRecords', JSON.stringify(records));
    
    displayRecords();
  }
  
  // Event Listener for the form submission
  document.getElementById('census-form').addEventListener('submit', addCensusRecord);
  
  // Initial display of records
  displayRecords();
  