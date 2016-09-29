var char = ["", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var board = []

class BoggleBoard{
  constructor (height = 4, width = 4){
    this.height = height
    this.width = width
  }

  generate (){

    for (var i = 0; i < this.height; i++){
      var newArray = []
      for (var j = 0; j < this.width; j ++){
      	var rng = Math.floor((Math.random() * 26) + 1)
        newArray.push(char[rng].toUpperCase())
      }
      board.push(newArray)
    }
    console.log(board)
  }

  shake(){
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
    board = []
    for (var i = 0; i < this.height; i++){
      var newArray = []
      for (var j = 0; j < this.width; j ++){
        var rng = Math.floor((Math.random() * 26) + 1)
        newArray.push(char[rng].toUpperCase())
      }
      board.push(newArray)
    }
    console.log(board)

  }
}

let boggle = new BoggleBoard

boggle.generate()
// boggle.shake()
