const tableDiv = document.querySelector('.table');

function createTable(data) {
  //Extract header fields
  headers = [];
  for (let header in data[0]) {
    headers.push(header);
  }

  const table = document.createElement('table');
  table.classList.add(tableName, 'sortable');

  //Create Head
  const tableHead = createTableHead(headers);
  table.appendChild(tableHead);

  //Create Body
  const tableBody = createTableBody(data);
  table.appendChild(tableBody);

  //Attach the table to table div
  tableDiv.innerHTML = '';
  tableDiv.appendChild(table);
}

function createTableHead(headers) {
  const tableHead = document.createElement('thead');
  tableHead.classList.add(`${tableName}-head`);

  const headerRow = document.createElement('tr');

  for (let header of headers) {
    const headerRowCol = document.createElement('th');
    headerRowCol.addEventListener('click', sort);
    headerRowCol.innerText = header;

    headerRow.appendChild(headerRowCol);
  }

  tableHead.appendChild(headerRow);

  return tableHead;
}

function createTableBody(data) {
  const tableBody = document.createElement('tbody');
  tableBody.classList.add(`${tableName}-body`);

  for (let item of data) {
    const tableBodyRow = document.createElement('tr');

    for (let field in item) {
      const tableRowField = document.createElement('td');
      tableRowField.innerText = item[field];
      tableBodyRow.appendChild(tableRowField);
    }

    tableBody.appendChild(tableBodyRow);
  }

  return tableBody;
}

function sort() {
  //Get index of column clicked
  const column = Array.prototype.indexOf.call(
    this.parentElement.children,
    this,
  );
  asc = true;
  direction = asc ? 1 : -1;

  const tableBody = document.querySelector('tbody');

  const rows = Array.from(tableBody.querySelectorAll('tr'));

  const sortedRows = rows.sort((a, b) => {
    aText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
    bText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();

    return aText > bText ? 1 * direction : -1 * direction;
  });

  tableBody.innerHTML = '';
  tableBody.append(...sortedRows);

  tableDiv.querySelectorAll('th').forEach(headerCell => {
    headerCell.remove('th-sort-asc', 'th-sort,desc');
  });

  tableDiv.querySelectorAll(`th:nth-child(${column + 1})`).classList.toggle();
}
