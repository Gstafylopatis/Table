import { Table } from "../../modules/Table/table.js";
import {
  makeTableSortable,
  makeTableFilterable,
} from "../../modules/Table/tableHelper/tableUtils.js";

//Get which table to load
const tableName = document.querySelector(".table-module").getAttribute("table");
const tableDiv = document.querySelector(".table");
let data = {};

//Event Listener
document.addEventListener("DOMContentLoaded", createTable);

async function createTable() {
  // Read JSON file
  data = await fetch(`data/${tableName}.json`).then(res => {
    return res.json();
  });

  //Append the Table created by Table module to the tableDiv
  tableDiv.appendChild(Table(data, headers(), tableName));
  makeTableSortable(tableDiv.querySelector("table"));
  makeTableFilterable(tableDiv.querySelector("thead"));
}

const headers = () => {
  //Extract header fields
  let headers = [];
  for (let header in data[0]) {
    headers.push(header);
  }

  return headers;
};
