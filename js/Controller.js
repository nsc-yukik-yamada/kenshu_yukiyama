// 入力されたデータを受け取るクラス
class InputData {
  constructor() {
    let getData = document.querySelector.bind(document);
    this._inputCount = getData("#count");
    this._inputStachArea = getData("#stachArea");
    this._inputStrangs = getData("#strangs");

    this._table = getData(".strangsValume");
    this._stachView = new View(this._table);
  }

  // 計算する
  calculation() {
    event.preventDefault();

    // 入力された値でオブジェクト作成
    this._stach = new Stach(
      this._inputCount.value,
      this._inputStachArea.value,
      this._inputStrangs.value
    );

    console.log(this._stach);

    
    // 糸の長さを計算して変数に格納
    let strangsLongCm = this._stach.coleculation();

    console.log(this._stachView );
    this._stachView.clear();
    this._stachView._makeDocument(strangsLongCm);
  }
}
