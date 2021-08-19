// Get which table to load
const tableName = document.currentScript.getAttribute('table');

const sortButton = document.querySelector('.sort');

data = {};

//Event Listener
document.addEventListener('DOMContentLoaded', getData);

async function getData() {
  // Read JSON file
  data = await fetch(`data/${tableName}.json`).then(res => {
    return res.json();
  });
  createTable(data);
}
