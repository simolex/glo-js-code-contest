export class ListMoviesController {
  constructor(model, view) {
    this._model = model;
    this._view = view;

    view.subscribe("addButtonClicked", () => this.addItem());
    view.subscribe("delButtonClicked", (idx) => this.delItem(idx));
  }

  // addItem() {
  //   const modal = new Modal();
  //   const modalRun = new Promise((resolve, reject) => modal.show(resolve, reject));
  //   modalRun
  //     .then((data) => {
  //       if (data) {
  //         const props = [...data].reduce((obj, inputValue) => {
  //           let property = inputValue[0];

  //           if (property) {
  //             property = property.split("-").reduce((camelCase, chunk, ind) => {
  //               if (ind > 0) {
  //                 chunk = chunk[0].toUpperCase() + chunk.substring(1);
  //               }
  //               return camelCase + chunk;
  //             }, "");
  //             obj[property] = inputValue[1];
  //             return obj;
  //           }
  //         }, {});
  //         this._model.addRow(props);
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  // delItem(id) {
  //   this._model.removeRow(id);
  // }
}
