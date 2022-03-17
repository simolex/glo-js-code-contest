import { EventEmitter } from "../EventEmitter";

export class ListMoviesView extends EventEmitter {
  constructor(model, elements) {
    super();
    this._model = model;
    this._elements = elements;
    this._typeEquipments = [...elements.typeEquipments.options].reduce((types, option) => {
      if (!!option.value) {
        types[option.value] = option.innerText;
        return types;
      }
    }, []);

    // attach model listeners
    model
      .subscribe("rowAdded", () => this.rebuildTable())
      .subscribe("rowRemoved", () => this.rebuildTable());

    // attach listeners to HTML controls
    elements.tableBody.addEventListener("click", (e) => {
      if (e.target.closest(".table__row")) {
        const id = e.target.closest(".table__row").id;
        if (e.target.closest(".table__button.remove")) {
          this.emit("delButtonClicked", id);
        }
      }
    });

    elements.addButton.addEventListener("click", () => this.emit("addButtonClicked"));
  }

  show() {
    this.rebuildTable();
  }

  rebuildTable() {
    this._elements.tableBody.innerHTML = "";
    this._model.getRows().forEach((row, index) => {
      const tr = document.createElement("tr");
      tr.classList.add("table__row");
      tr.id = index;
      tr.innerHTML = `
                <td class="table__cell">${row.unitName}</td>
                <td class="table__cell">${row.unitBrand}</td>
                <td class="table__cell">${row.unitModel}</td>
                <td class="table__cell">${row.unitNumber}</td>
                <td class="table__cell">${row.unitDate}</td>
                <td class="table__cell">${this._typeEquipments[row.unitType]}</td>
                <th class="table__title">
                  <div class="table__button remove">
                    <img class="table__img" src="img/trash-can.svg" alt="" />
                  </div>
               </th>
      `;
      // <div class="table__button edit">
      //   <img class="table__img" src="img/pen-to-square.svg" alt="" />
      // </div>
      this._elements.tableBody.append(tr);
    });
  }
}
