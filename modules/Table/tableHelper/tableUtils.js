export function makeTableSortable(table) {
  table.classList.add('table-sortable');

  const headers = table.querySelectorAll('th');
  for (let header of headers) {
    header.addEventListener('click', headerClicked);
  }
}

function headerClicked() {
  const table = document.querySelector('table');

  //Get index of column clicked
  const headerIndex = this.cellIndex;

  //Get sorting
  const isAscending = this.classList.contains('th-sort-asc');
  sort(table, headerIndex, !isAscending);
}

function sort(table, column, asc = 1) {
  const dirModifier = asc ? 1 : -1;
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.rows);

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = a
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();
    const bColText = b
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  tbody.innerHTML = '';
  tbody.append(...sortedRows);

  //Remember how column is currently sorted
  //First remove any class about sort
  table
    .querySelectorAll('th')
    .forEach(th => th.classList.remove('th-sort-asc', 'th-sort-desc'));

  //Then add asc if asc==true
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle('th-sort-asc', asc);

  //or desc if asc==false
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle('th-sort-desc', !asc);
}
