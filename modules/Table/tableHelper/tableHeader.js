export const tableHead = headers => {
  const tableHead = document.createElement("thead");

  const headerRow = document.createElement("tr");

  for (let header of headers) {
    const headerCell = document.createElement("th");
    headerCell.innerText = header;

    headerRow.appendChild(headerCell);
  }
  headerRow.classList.add("filterRow");

  tableHead.appendChild(headerRow);

  return tableHead;
};
