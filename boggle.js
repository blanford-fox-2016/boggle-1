class Boggle {
  constructor(){
    this._table = []
  }

  generate(value){
    for(var i=0; i<value; i++){
      this._table.push([])
      for(var j=0; j<value; j++){
        this._table[i].push([])
      }
    }
  }

  insert(){
    for(var i = 0; i < this._table.length; i ++){

      for(var j = 0; j < this._table.length; j ++){
        this._table[i][j] = this.shake()
      }
    }
  }

  random(){
    var random = Math.floor(Math.random() * 25);
    return random
  }

  shake(){
    var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    return alphabet[this.random()]
  }
  start(value){
    this.generate(value)
    this.insert()
    console.log(this._table);
  }

}

var alex = new Boggle()

alex.start(5);
