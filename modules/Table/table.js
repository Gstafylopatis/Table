import { tableBody } from "./tableHelper/tableBody.js";
import { tableHead } from "./tableHelper/tableHeader.js";

export const Table = (data, headers, tableName) => {
  const table = document.createElement("table");
  table.classList.add(tableName, "table-common");

  //Append Head
  table.appendChild(tableHead(headers));

  //Append Body
  table.appendChild(tableBody(data));

  return table;
};

function sort() {
  //Get index of column clicked
  const column = Array.prototype.indexOf.call(this.parentElement.children, this);
  asc = true;
  direction = asc ? 1 : -1;

  const tableBody = document.querySelector("tbody");

  const rows = Array.from(tableBody.querySelectorAll("tr"));

  const sortedRows = rows.sort((a, b) => {
    aText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
    bText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();

    return aText > bText ? 1 * direction : -1 * direction;
  });

  tableBody.innerHTML = "";
  tableBody.append(...sortedRows);

  tableDiv.querySelectorAll("th").forEach(headerCell => {
    headerCell.remove("th-sort-asc", "th-sort,desc");
  });

  tableDiv.querySelectorAll(`th:nth-child(${column + 1})`).classList.toggle();
}
