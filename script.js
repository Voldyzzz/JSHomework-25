const wrapper = document.querySelector(".wrapper");

const table = createTable();
filltable(table);
wrapper.append(table);

function createTable() {
  const table = document.createElement("table");

  for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("td");
      table.appendChild(row);
      row.appendChild(cell);
    }
  }
  table.classList.add("table");

  return table;
}

function filltable(element) {
  const cells = [...element.getElementsByTagName("td")];
  cells.forEach((item) => {
    item.textContent = Math.floor(Math.random() * 100 + 1);
  });

  console.log(cells);
}
