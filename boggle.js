 class Boggle {
   constructor(word, tampung_Boggle_Board = [], random_word) {
     this.word = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
       'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
     ]
     this.tampung_Boggle_Board = tampung_Boggle_Board
     this.random_word = random_word
   }

   createBoggleBoard() {
     for (var i = 0; i < 4; i++) {
       this.tampung_Boggle_Board.push(['', '', '', ''])
     }
   }
   randomBoggleWord() {
     for (var i = 0; i < this.tampung_Boggle_Board.length; i++) {
       for (var j = 0; j < this.tampung_Boggle_Board.length; j++) {
         this.random_word = Math.floor((Math.random() * 25) + 1)
         this.tampung_Boggle_Board[i][j] = this.word[this.random_word]
       }
     }
     console.log(this.tampung_Boggle_Board);
   }
 }

 var boggle = new Boggle()
 boggle.createBoggleBoard()
 boggle.randomBoggleWord()
