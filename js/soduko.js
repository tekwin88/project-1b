//debugger
console.log('Hello frontend');

gridArray = [ 0, 0, 0,
              0, 0, 0,
              0, 0, 0];

//var currentPlayer = '1';

// function GetCellValues1() {}
// var table = document.getElementById('grid');
// var rowCount = table.rows.length;
//     for (var r = 0, n = table.rows.length; r < n; r++) {
//         for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
//         alert(table.rows[r].cells[c].firstChild.value);
//         }
//     }
//     }catch(e) {
//     alert(e);
//     }
// };
//
// function GetCellValues() {
//   var table = document.getElementById('0');
//   console.log("table is " + table);
//   for (var r = 0, n = table.rows.length; r < n; r++) {
//       for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
//           alert(table.rows[r].cells[c].innerHTML);
//       };
//   };
// };


// GetCellValues(); //

function GetCellValues() {
  //  if (sel.target.textContent === '' && currentPlayer === 'x') {
  //     console.log("sel = " + sel)
  //     console.log("sel.target.textContent = " + sel.target.textContent)
  //     console.log("currentPlayer = " + currentPlayer)

  ///var grids = document.querySelectorAll('div.grid');

  //console.log("sel is " + sel);
  console.log("grids length is " + grids.length);
     for (var i = 0; i < grids.length; i++) {
      //   var cellValue = document.getElementsByClassName('grid');
         var cellValue = document.getElementsByClassName('grid');
      console.log("cellValue = (" + i +"} = "+ cellValue);

  //    sel.target.textContent = cellValue;
  //    var i = sel.target.id;
  //    gridArray[i] = '0';

  //    console.log("gridArray[ " + i + "] = " + gridArray[i]);
      //checkWinner()
      //checkGameStatus()
      //currentPlayer = 'o'

    // } else if (sel.target.textContent === '' && currentPlayer === 'o') {
    //
    //   sel.target.textContent = 'o'
    //   var i = sel.target.id
    //   gridArray[i] = 'o'
    //   checkWinner()
    //   checkGameStatus()
    //   currentPlayer = 'x'
    //
    // }
    //console.log(gridArray);
  };
};

  // function checkWinner() {
  //   if        (gridArray[0] === gridArray[1] && gridArray[1] === gridArray[2]) {
  //     winner = gridArray[0]
  //   } else if (gridArray[3] === gridArray[4] && gridArray[4] === gridArray[5]) {
  //     winner = gridArray[3]
  //   } else if (gridArray[6] === gridArray[7] && gridArray[7] === gridArray[8]) {
  //     winner = gridArray[6]
  //   } else if (gridArray[0] === gridArray[3] && gridArray[3] === gridArray[6]) {
  //     winner = gridArray[0]
  //   } else if (gridArray[1] === gridArray[4] && gridArray[4] === gridArray[7]) {
  //     winner = gridArray[1]
  //   } else if (gridArray[2] === gridArray[5] && gridArray[5] === gridArray[8]) {
  //     winner = gridArray[2]
  //   } else if (gridArray[0] === gridArray[4] && gridArray[4] === gridArray[8]) {
  //     winner = gridArray[0]
  //   } else if (gridArray[2] === gridArray[4] && gridArray[4] === gridArray[6]) {
  //     winner = gridArray[2]
  //   } else {
  //     winner = 'It is a draw|'
  //   }
  // }

// function checkGameStatus() {
//   if (winner === "x" || winner === "o") {
//     document.getElementById('messageBox').innerHTML = 'The winner is: ' + winner
//   } else if (!gridArray.includes(0)){
//     document.getElementById('messageBox').innerHTML = 'It is a draw!'
//   }
// }
//
// DOM

var grids = document.querySelectorAll('div.grid')
console.log("grids " + grids);

for (var j = 0; j < grids.length; j++) {
  console.log("It did come hereeeee");
  grids[j].addEventListener('click', GetCellValues)
};
