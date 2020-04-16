class View {
  constructor(table) {
    this._strangsView = table;
  }

  _makeDocument(strangs) {
    console.log(`viaw = ${strangs}`);
    let tr = document.createElement("tr");

    let tdLongCm = document.createElement("td");
    tdLongCm.textContent = strangs;

    let tdLongM = document.createElement("td");
    tdLongM.textContent = strangs / 6 / 100;

    let tdLongKase = document.createElement("td");
    tdLongKase.textContent = strangs / 6 / 100 / 8;
    tr.appendChild(tdLongCm);
    tr.appendChild(tdLongM);
    tr.appendChild(tdLongKase);

    this._strangsView.appendChild(tr);
  }

  clear(){
    this._strangsView.innerHTML = " ";

  }
}
