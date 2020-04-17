class StrangsLong {
  constructor(StrangsLong, StrangsSet, Kase) {
    (this.StrangsLong = StrangsLong),
      (this.StrangsSet = StrangsSet),
      (this.Kase = Kase);
  }

  keisan(strangs) {
    this.StrangsLong = kiri(strangs);
    this.StrangsSet = kiri(this.StrangsLong / 6 / 100);
    this.Kase = kiri(this.StrangsSet / 8);
  }
}

function kiri(number) {
  number = Math.round(number * 100) / 100;
  return number;
}
