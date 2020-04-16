class Stach {
  constructor(count, stachArea, strangs) {
    this._count = count;
    this._stachArea = stachArea;
    this._strangs = strangs;
  }
  get count() {
    return this._count;
  }

  get stachArea() {
    return this._stachArea;
  }

  get strangs() {
    return this._strangs;
  }

  coleculation() {
    // 1目の大きさ
    let countSize = 2.54 / this.count;

    // 目の大きさ*4.8*糸の数*ステッチする量
    let strangsLongCm = countSize * 4.8 * this.strangs * this.stachArea;

    console.log(strangsLongCm);
    return strangsLongCm;
  }
}
