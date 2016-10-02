function bogle1() {
  var xo_random = [];
  var panjang = 4
  for(var i =0; i<panjang;i++){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(var j=0; j<8; j++){
      text = possible.charAt(Math.floor(Math.random() * possible.length));
      xo_random.push(text)
    }
  }

  var letter_gird = []
  var i,j,chunk=4
  for(i=0,j=xo_random.length;i<j;i+=chunk){
    letter_gird.push(xo_random.slice(i,i+=chunk))
    //delete.letter_gird(letter_gird[0])
  }
  return letter_gird;
}

console.log(bogle1()) 
