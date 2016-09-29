var random = function() {
  var x = Math.floor(Math.random()*9)
  if (x>21) {
    x+=x-21
  }
  return (String.fromCharCode(x+65));
}


function boogle(panjang,lebar){

  var array = []
  for (var i = 0; i < panjang; i++) {
    array.push([])
  }
  for (var i = 0; i < panjang; i++) {
    for (var j = 0; j < lebar; j++) {
      var shake = random()
      array[i].push(shake)
    }
  }
return array
}

console.log(boogle(5,4));
