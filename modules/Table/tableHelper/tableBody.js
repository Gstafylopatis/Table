export const tableBody = data => {
  const tableBody = document.createElement("tbody");

  for (let item of data) {
    const tableBodyRow = document.createElement("tr");

    for (let field in item) {
      const tableRowField = document.createElement("td");
      tableRowField.innerText = item[field];
      tableBodyRow.appendChild(tableRowField);
    }

    tableBody.appendChild(tableBodyRow);
  }

  return tableBody;
};
