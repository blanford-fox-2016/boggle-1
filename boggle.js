class BoogleBoard{
  constructor(row, col){
    this._row = row
    this._col = col
    this._board = []
    this._size = this._row*this._col
  }

  shake(size, charSet){
    //random all
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var randomString = '';
        for (var i = 0; i < size; i++) {
        	var randomPoz = Math.floor(Math.random() * charSet.length);
        	randomString += charSet.substring(randomPoz,randomPoz+1);
        }
        randomString = randomString.split("")
        return randomString;
  }

  shakeBoard(){
    var temp = this.shake(this._size);
    //console.log(temp);
    for(var i = 0 ; i < this._row ; i++){
        this._board[i] = [];
        for(var j = 0 ; j < this._col ; j++){
          this._board[i][j] = temp[this._row*i+j];
        }
    }
    return this._board;
  }
};

let boogle = new BoogleBoard(4,4);//4 x 4

// console.log(boogle.shake(4));
console.log(boogle.shakeBoard());
