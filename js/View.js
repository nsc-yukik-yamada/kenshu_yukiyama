class View {
  constructor(table) {
    this._strangsView = table;
  }

  _makeDocument(strangs) {
    console.log(" _makeDocument");
    console.log(strangs);
    let tr = document.createElement("tr");

    let tdLongCm = document.createElement("td");
    tdLongCm.textContent = strangs.StrangsLong;

    let tdLongM = document.createElement("td");
    tdLongM.textContent = strangs.StrangsSet;

    let tdLongKase = document.createElement("td");
    tdLongKase.textContent = strangs.Kase;
    tr.appendChild(tdLongCm);
    tr.appendChild(tdLongM);
    tr.appendChild(tdLongKase);

    this._strangsView.appendChild(tr);
  }

  clear() {
    this._strangsView.innerHTML = " ";
  }
}
