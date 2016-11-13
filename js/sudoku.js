document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});

//debugger
console.log('Hello frontend');

console.clear();
var sudokuGrid = [1,2,3,4,5,6,7,8,9];
var sudoRowArray1 = [1,2,3,4,5,6,7,8,9];
var sudoColArray1 = [1,2,3,4,5,6,7,8,9];
var sudoValidNumArray = [1,2,3,4,5,6,7,8,9];

var init3x3Array1 = [];
var init3x3Array2 = [];
var init3x3Array3 = [];
var init3x3Array4 = [];
var init3x3Array5 = [];
var init3x3Array6 = [];
var init3x3Array7 = [];
var init3x3Array8 = [];
var init3x3Array9 = [];

var initRowArray1 = [];
var initRowArray2 = [];
var initRowArray3 = [];
var initRowArray4 = [];
var initRowArray5 = [];
var initRowArray6 = [];
var initRowArray7 = [];
var initRowArray8 = [];
var initRowArray9 = [];

var initColArray1 = [];
var initColArray2 = [];
var initColArray3 = [];
var initColArray4 = [];
var initColArray5 = [];
var initColArray6 = [];
var initColArray7 = [];
var initColArray8 = [];
var initColArray9 = [];

var input3x3Array1 = [];
var input3x3Array2 = [];
var input3x3Array3 = [];
var input3x3Array4 = [];
var input3x3Array5 = [];
var input3x3Array6 = [];
var input3x3Array7 = [];
var input3x3Array8 = [];
var input3x3Array9 = [];

var inputRowArray1 = [];
var inputRowArray2 = [];
var inputRowArray3 = [];
var inputRowArray4 = [];
var inputRowArray5 = [];
var inputRowArray6 = [];
var inputRowArray7 = [];
var inputRowArray8 = [];
var inputRowArray9 = [];

var inputColArray1 = [];
var inputColArray2 = [];
var inputColArray3 = [];
var inputColArray4 = [];
var inputColArray5 = [];
var inputColArray6 = [];
var inputColArray7 = [];
var inputColArray8 = [];
var inputColArray9 = [];

var inputSingleArray1 = [];
var inputSingleArray2 = [];
var inputSingleArray3 = [];
var inputSingleArray4 = [];
var inputSingleArray5 = [];
var inputSingleArray6 = [];
var inputSingleArray7 = [];
var inputSingleArray8 = [];
var inputSingleArray9 = [];

var selected3x3Array = [];
var selectedColArray = [];
var selectedRowArray = [];

var selectedRow1Before = false;
var selectedRow2Before = false;
var selectedRow3Before = false;
var selectedRow4Before = false;
var selectedRow5Before = false;
var selectedRow6Before = false;
var selectedRow7Before = false;
var selectedRow8Before = false;
var selectedRow9Before = false;

var selectedCol1Before = false;
var selectedCol2Before = false;
var selectedCol3Before = false;
var selectedCol4Before = false;
var selectedCol5Before = false;
var selectedCol6Before = false;
var selectedCol7Before = false;
var selectedCol8Before = false;
var selectedCol9Before = false;

var selected3x31Before = false;
var selected3x32Before = false;
var selected3x33Before = false;
var selected3x34Before = false;
var selected3x35Before = false;
var selected3x36Before = false;
var selected3x37Before = false;
var selected3x38Before = false;
var selected3x39Before = false;

var checkRowArrFail = false;
var checkColArrFail = false;
var check3x3ArrFail = false;

var selectedRow1 = false;
var selectedRow2 = false;
var selectedRow3 = false;
var selectedRow4 = false;
var selectedRow5 = false;
var selectedRow6 = false;
var selectedRow7 = false;
var selectedRow8 = false;
var selectedRow9 = false;

var selectedCol1 = false;
var selectedCol2 = false;
var selectedCol3 = false;
var selectedCol4 = false;
var selectedCol5 = false;
var selectedCol6 = false;
var selectedCol7 = false;
var selectedCol8 = false;
var selectedCol9 = false;

var selected3x31 = false;
var selected3x32 = false;
var selected3x33 = false;
var selected3x34 = false;
var selected3x35 = false;
var selected3x36 = false;
var selected3x37 = false;
var selected3x38 = false;
var selected3x39 = false;

var targetCell;
var targetSectId;
var targetCellId;
var previousCellId;
var input_value;

var col_num;
var row_num;
var sect_num;

$(document).ready(function(){
    $('.grid').click(function(el) {

        targetCell = el.target;
        targetCellId = el.target.id;
        targetSectId = $(el.target).attr('class');

        if (targetCellId.charAt(0) == "R") {
           row_num = parseInt(targetCellId.charAt(1));
        }

        if (targetCellId.charAt(2) == "C") {
           col_num = parseInt(targetCellId.charAt(3));
        }

        if (targetSectId.charAt(11) == "S") {
           sect_num = parseInt(targetSectId.charAt(12));
        }
        console.log("row_num", row_num);
        console.log("col_num", col_num);
        console.log("sect_num", sect_num);

        $("#" + targetCell.id).html("<input></input>", 'color', 'red');  //.classList.add("inputNum");
        $("#" + targetCell.id + " input").focus();

        $("#" + targetCell.id + " input").keypress(function(event) {

           if (event.keyCode === 13) {
              input_value = parseInt($(this).val())
              console.log("input value = ", input_value);

              event.preventDefault();
              event.stopPropagation();

              // Checking Rows
              if (row_num == 1) {
                  if (!selectedRow1Before) {
                     selectedRowArray.push(row_num);
                     selectedRow1Before = true;
                     selectedRow1 = true;
                  };
                  inputRowArray1.push(input_value);
              };
              if (row_num == 2) {
                  if (!selectedRow2Before) {
                     selectedRowArray.push(row_num);
                     selectedRow2Before = true;
                     selectedRow2 = true;
                  };
                  inputRowArray2.push(input_value);
              };
              if (row_num == 3) {
                  if (!selectedRow3Before) {
                     selectedRowArray.push(row_num);
                     selectedRow3Before = true;
                     selectedRow3 = true;
                  };
                  inputRowArray3.push(input_value);
              };
              if (row_num == 4) {
                  if (!selectedRow4Before) {
                     selectedRowArray.push(row_num);
                     selectedRow4Before = true;
                     selectedRow4 = true;
                  };
                  inputRowArray4.push(input_value);
              };
              if (row_num == 5) {
                  if (!selectedRow5Before) {
                     selectedRowArray.push(row_num);
                     selectedRow5Before = true;
                     selectedRow5 = true;
                  };
                  inputRowArray5.push(input_value);
              };
              if (row_num == 6) {
                  if (!selectedRow6Before) {
                     selectedRowArray.push(row_num);
                     selectedRow6Before = true;
                     selectedRow6 = true;
                  };
                  inputRowArray6.push(input_value);
              };
              if (row_num == 7) {
                  if (!selectedRow7Before) {
                     selectedRowArray.push(row_num);
                     selectedRow7Before = true;
                     selectedRow1 = true;
                  };
                  inputRowArray7.push(input_value);
              };
              if (row_num == 8) {
                  if (!selectedRow8Before) {
                     selectedRowArray.push(row_num);
                     selectedRow8Before = true;
                     selectedRow1 = true;
                  };
                  inputRowArray8.push(input_value);
              };
              if (row_num == 9) {
                  if (!selectedRow9Before) {
                     selectedRowArray.push(row_num);
                     selectedRow9Before = true;
                     selectedRow9 = true;
                  };
                  inputRowArray9.push(input_value);
              };

              // Checking Columns
              if (col_num == 1) {
                  if (!selectedCol1Before) {
                     selectedColArray.push(col_num);
                     selectedCol1Before = true;
                     selectedCol1 = true;
                  };
                  inputColArray1.push(input_value);
              };
              if (col_num == 2) {
                  if (!selectedCol2Before) {
                     selectedColArray.push(col_num);
                     selectedCol2Before = true;
                     selectedCol2 = true;
                  };
                  inputColArray2.push(input_value);
              };
              if (col_num == 3) {
                  if (!selectedCol3Before) {
                     selectedColArray.push(col_num);
                     selectedCol3Before = true;
                     selectedCol3 = true;
                  };
                  inputColArray3.push(input_value);
              };
              if (col_num == 4) {
                  if (!selectedCol4Before) {
                     selectedColArray.push(col_num);
                     selectedCol4Before = true;
                     selectedCol4 = true;
                  };
                  inputColArray4.push(input_value);
              };
              if (col_num == 5) {
                  if (!selectedCol5Before) {
                     selectedColArray.push(col_num);
                     selectedCol5Before = true;
                     selectedCol5 = true;
                  };
                  inputColArray5.push(input_value);
              };
              if (col_num == 6) {
                  if (!selectedCol6Before) {
                     selectedColArray.push(col_num);
                     selectedCol6Before = true;
                     selectedCol6 = true;
                  };
                  inputColArray6.push(input_value);
              };
              if (col_num == 7) {
                  if (!selectedCol7Before) {
                     selectedColArray.push(col_num);
                     selectedCol7Before = true;
                     selectedCol7 = true;
                  };
                  inputColArray7.push(input_value);
              };
              if (col_num == 8) {
                  if (!selectedCol8Before) {
                     selectedColArray.push(col_num);
                     selectedCol8Before = true;
                     selectedCol8 = true;
                  };
                  inputColArray8.push(input_value);
              };
              if (col_num == 9) {
                  if (!selectedCol9Before) {
                     selectedColArray.push(col_num);
                     selectedCol9Before = true;
                     selectedCol9 = true;
                  };
                  inputColArray9.push(input_value);
              };

              // Checking Sectors
              if (sect_num == 1) {
                  if (!selected3x31Before) {
                     selected3x3Array.push(sect_num);
                     selected3x31Before = true;
                     selected3x31 = true;
                  };
                  input3x3Array1.push(input_value);
              };
              if (sect_num == 2) {
                  if (!selected3x32Before) {
                     selected3x3Array.push(sect_num);
                     selected3x32Before = true;
                     selected3x32 = true;
                  };
                  input3x3Array2.push(input_value);
              };
              if (sect_num == 3) {
                  if (!selected3x33Before) {
                     selected3x3Array.push(sect_num);
                     selected3x33Before = true;
                     selected3x33 = true;
                  };
                  input3x3Array3.push(input_value);
              };
              if (sect_num == 4) {
                  if (!selected3x34Before) {
                     selected3x3Array.push(sect_num);
                     selected3x34Before = true;
                     selected3x34 = true;
                  };
                  input3x3Array4.push(input_value);
              };
              if (sect_num == 5) {
                  if (!selected3x35Before) {
                     selected3x3Array.push(sect_num);
                     selected3x35Before = true;
                     selected3x35 = true;
                  };
                  input3x3Array5.push(input_value);
              };
              if (sect_num == 6) {
                  if (!selected3x36Before) {
                     selected3x3Array.push(sect_num);
                     selected3x36Before = true;
                     selected3x36 = true;
                  };
                  input3x3Array6.push(input_value);
              };
              if (sect_num == 7) {
                  if (!selected3x37Before) {
                     selected3x3Array.push(sect_num);
                     selected3x37Before = true;
                     selected3x37 = true;
                  };
                  input3x3Array7.push(input_value);
              };
              if (sect_num == 8) {
                  if (!selected3x38Before) {
                     selected3x3Array.push(sect_num);
                     selected3x3Before = true;
                     selected3x38 = true;
                  };
                  input3x3Array8.push(input_value);
              };
              if (sect_num == 9) {
                  if (!selected3x39Before) {
                     selected3x3Array.push(sect_num);
                     selected3x39Before = true;
                     selected3x39 = true;
                  };
                  input3x3Array9.push(input_value);
              };
           };
        });
    });
}); //document ready

$('#SubmitBtn').click(submitGame)

function submitGame() {
  console.log('Submit Button pressed')
  if ((selected3x31) && (!same3x3Arr1NumChk)) {
     console.log('(selected3x31) && (!same3x3Arr1NumChk) is true - It did comeee heree')
     same3x3Arr1Duplicate(input3x3Array1)  //Checking Sect 1 Array
     check3x3ArrFail = (check3x3ArrFail || same3x3Arr1NumChk)
     console.log('check3x3ArrFail after Sect 1 check = ',  check3x3ArrFail)
  }
  if ((selected3x32) && (!same3x3Arr2NumChk)) {
     console.log('(selected3x32) && (!same3x3Arr2NumChk) is true - It did comeee heree')
     same3x3Arr2Duplicate(input3x3Array2)  //Checking Sect 2 Array
     check3x3ArrFail = (check3x3ArrFail || same3x3Arr2NumChk)
     console.log('check3x3ArrFail after Sect 2 check = ',  check3x3ArrFail)
  }
  if ((selected3x33) && (!same3x3Arr3NumChk)) {
     console.log('(selected3x33) && (!same3x3Arr3NumChk) is true - It did comeee heree')
     same3x3Arr3Duplicate(input3x3Array3)  //Checking Sect 3 Array
     check3x3ArrFail = (check3x3ArrFail || same3x3Arr3NumChk)
     console.log('check3x3ArrFail after Sect 3 check = ',  check3x3ArrFail)
  }
  if ((selected3x34) && (!same3x3Arr4NumChk)) {
     console.log('(selected3x34) && (!same3x3Arr4NumChk) is true - It did comeee heree')
     same3x3Arr4Duplicate(input3x3Array4)  //Checking Sect 4 Array
     check3x3ArrFail = (check3x3ArrFail || same3x3Arr4NumChk)
     console.log('check3x3ArrFail after Sect 4 check = ',  check3x3ArrFail)
  }
  if ((selected3x35) && (!same3x3Arr5NumChk)) {
     same3x3Arr5Duplicate(input3x3Array5)  //Checking Sect 5 Array
     console.log('(selected3x35) && (!same3x3Arr5NumChk) is true - It did comeee heree')
     check3x3ArrFail = (check3x3ArrFail || same3x3Arr5NumChk)
     console.log('check3x3ArrFail after Sect 5 check = ',  check3x3ArrFail)
  }
  if ((selected3x36) && (!same3x3Arr6NumChk)) {
     same3x3Arr6Duplicate(input3x3Array6)  //Checking Sect 6 Array
     console.log('(selected3x36) && (!same3x3Arr6NumChk) is true - It did comeee heree')
     check3x3ArrFail = (check3x3ArrFail || same3x3Arr6NumChk)
     console.log('check3x3ArrFail after Sect 6 check = ',  check3x3ArrFail)
  }
  if ((selected3x37) && (!same3x3Arr7NumChk)) {
     console.log('(selected3x37) && (!same3x3Arr7NumChk) is true - It did comeee heree')
     same3x3Arr7Duplicate(input3x3Array7)  //Checking Sect 7 Array
     check3x3ArrFail = (check3x3ArrFail || same3x3Arr7NumChk)
     console.log('check3x3ArrFail after Sect 7 check = ',  check3x3ArrFail)
  }
  if ((selected3x38) && (!same3x3Arr8NumChk)) {
     console.log('(selected3x38) && (!same3x3Arr8NumChk) is true - It did comeee heree')
     same3x3Arr8Duplicate(input3x3Array8)  //Checking Sect 8 Array
     check3x3ArrFail = (check3x3ArrFail || same3x3Arr8NumChk)
     console.log('check3x3ArrFail after Sect 8 check = ',  check3x3ArrFail)
  }
  if ((selected3x39) && (!same3x3Arr9NumChk)) {
     console.log('(selected3x39) && (!same3x3Arr9NumChk) is true - It did comeee heree')
     same3x3Arr9Duplicate(input3x3Array9)  //Checking Sect 9 Array
     check3x3ArrFail = (check3x3ArrFail || same3x3Arr9NumChk)
     console.log('check3x3ArrFail after Sect 9 check = ',  check3x3ArrFail)
  }
  if ((selectedRow1) && (!sameRowArr1NumChk)) {
     console.log('(selectedRow1) && (!sameRowArr1NumChk) is true - It did comeee heree')
     sameRowArr1Duplicate(inputRowArray1)  //Checking Row 1 Array
     checkRowArrFail = (checkRowArrFail || sameRowArr1NumChk)
     console.log('checkRowArrFail after Row 1 check = ',  checkRowArrFail)
  }
  if ((selectedRow2) && (!sameRowArr2NumChk)) {
     console.log('(selectedRow2) && (!sameRowArr2NumChk) is true - It did comeee heree')
     sameRowArr2Duplicate(inputRowArray2)  //Checking Row 2 Array
     checkRowArrFail = (checkRowArrFail || sameRowArr1NumChk)
     console.log('checkRowArrFail after Row 2 check = ',  checkRowArrFail)
  }
  if ((selectedRow3) && (!sameRowArr3NumChk)) {
     console.log('(selectedRow3) && (!sameRowArr3NumChk) is true - It did comeee heree')
     sameRowArr3Duplicate(inputRowArray3)  //Checking Row 3 Array
     checkRowArrFail = (checkRowArrFail || sameRowArr3NumChk)
     console.log('checkRowArrFail after Row 3 check = ',  checkRowArrFail)
  }
  if ((selectedRow4) && (!sameRowArr4NumChk)) {
     console.log('(selectedRow4) && (!sameRowArr4NumChk) is true - It did comeee heree')
     sameRowArr4Duplicate(inputRowArray4)  //Checking Row 4 Array
     checkRowArrFail = (checkRowArrFail || sameRowArr4NumChk)
     console.log('checkRowArrFail after Row 4 check = ',  checkRowArrFail)
  }
  if ((selectedRow5) && (!sameRowArr5NumChk)) {
     console.log('(selectedRow5) && (!sameRowArr5NumChk) is true - It did comeee heree')
     sameRowArr5Duplicate(inputRowArray5)  //Checking Row 5 Array
     checkRowArrFail = (checkRowArrFail || sameRowArr5NumChk)
     console.log('checkRowArrFail after Row 5 check = ',  checkRowArrFail)
  }
  if ((selectedRow6) && (!sameRowArr6NumChk)) {
     console.log('(selectedRow6) && (!sameRowArr6DuplicateNumChk) is true - It did comeee heree')
     sameRowArr6Duplicate(inputRowArray6)  //Checking Row 6 Array
     checkRowArrFail = (checkRowArrFail || sameRowArr6NumChk)
     console.log('checkRowArrFail after Row 6 check = ',  checkRowArrFail)
  }
  if ((selectedRow7) && (!sameRowArr7NumChk)) {
     console.log('(selectedRow7) && (!sameRowArr7NumChk) is true - It did comeee heree')
     sameRowArr7Duplicate(inputRowArray7)  //Checking Row 7 Array
     checkRowArrFail = (checkRowArrFail || sameRowArr7NumChk)
     console.log('checkRowArrFail after Row 7 check = ',  checkRowArrFail)
  }
  if ((selectedRow8) && (!sameRowArr8NumChk)) {
     console.log('(selectedRow8) && (!sameRowArr8NumChk) is true - It did comeee heree')
     sameRowArr8Duplicate(inputRowArray8)  //Checking Row 8 Array
     checkRowArrFail = (checkRowArrFail || sameRowArr8NumChk)
     console.log('checkRowArrFail after Row 8 check = ',  checkRowArrFail)
  }
  if ((selectedRow9) && (!sameRowArr9NumChk)) {
     console.log('(selectedRow9) && (!sameRowArr9NumChk) is true - It did comeee heree')
     sameRowArr9Duplicate(inputRowArray9)  //Checking Row 9 Array
     checkRowArrFail = (checkRowArrFail || sameRowArr9NumChk)
     console.log('checkRowArrFail after Row 9 check = ',  checkRowArrFail)
  }
  if ((selectedCol1) && (!sameColArr1NumChk)) {
     console.log('(selectedCol1) && (!sameColArr1NumChk) is true - It did comeee heree')
     sameColArr1Duplicate(inputColArray1)  //Checking Col 1 Array
     checkColArrFail = (checkColArrFail || sameColArr1NumChk)
     console.log('checkColArrFail after Col 1 check = ',  checkColArrFail)
  }
  if ((selectedCol2) && (!sameColArr2NumChk)) {
     console.log('(selectedCol2) && (!sameColArr2NumChk) is true - It did comeee heree')
     sameColArr2Duplicate(inputColArray2)  //Checking Col 2 Array
     checkColArrFail = (checkColArrFail || sameColArr2NumChk)
     console.log('checkColArrFail after Col 2 check = ',  checkColArrFail)
  }
  if ((selectedCol3) && (!sameColArr3NumChk)) {
     console.log('(selectedCol3) && (!sameColArr3NumChk) is true - It did comeee heree')
     sameColArr3Duplicate(inputColArray3)  //Checking Col 3 Array
     checkColArrFail = (checkColArrFail || sameColArr3NumChk)
     console.log('checkColArrFail after Col 3 check = ',  checkColArrFail)
  }
  if ((selectedCol4) && (!sameColArr4NumChk)) {
     console.log('(selectedCol4) && (!sameColArr4NumChk) is true - It did comeee heree')
     sameColArr4Duplicate(inputColArray4)  //Checking Col 4 Array
     checkColArrFail = (checkColArrFail || sameColArr4NumChk)
     console.log('checkColArrFail after Col 4 check = ',  checkColArrFail)
  }
  if ((selectedCol5) && (!sameColArr5NumChk)) {
     console.log('(selectedCol5) && (!sameColArr5NumChk) is true - It did comeee heree')
     sameColArr5Duplicate(inputColArray5)  //Checking Col 5 Array
     checkColArrFail = (checkColArrFail || sameColArr5NumChk)
     console.log('checkColArrFail after Col 5 check = ',  checkColArrFail)
  }
  if ((selectedCol6) && (!sameColArr6NumChk)) {
     console.log('(selectedCol6) && (!sameColArr6NumChk) is true - It did comeee heree')
     sameColArr6Duplicate(inputColArray6)  //Checking Col 6 Array
     checkColArrFail = (checkColArrFail || sameColArr6NumChk)
     console.log('checkColArrFail after Col 6 check = ',  checkColArrFail)
  }
  if ((selectedCol7) && (!sameColArr7NumChk)) {
     console.log('(selectedCol7) && (!sameColArr7NumChk) is true - It did comeee heree')
     sameColArr7Duplicate(inputColArray7)  //Checking Col 7 Array
     checkColArrFail = (checkColArrFail || sameColArr7NumChk)
     console.log('checkColArrFail after Col 7 check = ',  checkColArrFail)
  }
  if ((selectedCol8) && (!sameColArr8NumChk)) {
     console.log('(selectedCol8) && (!sameColArr8NumChk) is true - It did comeee heree')
     sameColArr8Duplicate(inputColArray8)  //Checking Col 8 Array
     checkColArrFail = (checkColArrFail || sameColArr8NumChk)
     console.log('checkColArrFail after Col 8 check = ',  checkColArrFail)
  }
  if ((selectedCol9) && (!sameColArr9NumChk)) {
     console.log('(selectedCol9) && (!sameColArr9NumChk) is true - It did comeee heree')
     sameColArr9Duplicate(inputColArray9)  //Checking Col 9 Array
     checkColArrFail = (checkColArrFail || sameColArr9NumChk)
     console.log('checkColArrFail after Col 9 check = ',  checkColArrFail)
  }
  if (check3x3ArrFail) {
      console.log("Game Ended, There Are Duplicate Numbers Within The 3x3 Grid Array")
      $("#resultsBox").text('You Lose!!! There Are Duplicates Found').css("color", "red");
      return
  } else if (checkRowArrFail) {
      console.log("Game Ended, There Are Duplicate Numbers Within The Row Array")
      $("#resultsBox").text('You Lose!!! There Are Duplicates Found').css("color", "red");
      return
  } else if (checkColArrFail) {
      console.log("Game Ended, There Are Duplicate Numbers Within The Col Grid Array")
      $("#resultsBox").text('You Lose!!! There Are Duplicates Found').css("color", "red");
      return
  } else {
      console.log("You Won!!! Congratulations, Wanna Play Another Game?")
      $("#resultsBox").text('You Won!!! Congratulations, Wanna Play Another Game?');
  };
};

function clearBoard () {
  window.location.reload()
}

$('#ClearBtn').click(clearBoard)

$('#patterndemo').click(loadPatDemo)
$('#pattern1').click(loadPat1)
$('#pattern2').click(loadPat2)
$('#pattern3').click(loadPat3)
$('#pattern4').click(loadPat4)
$('#pattern5').click(loadPat5)


// Checking for duplicate numbers in Sect 1 3x3 Array
var same3x3Arr1NumChk = false;

 // finds any duplicate array elements using the fewest possible comparison
function same3x3Arr1Duplicate() {
	for (i=0; i<input3x3Array1.length; i++) {                         // outer loop uses each item i at 0 through n
		for (j=i+1; j<input3x3Array1.length; j++) {                     // inner loop only compares items j at i+1 to n
			if (input3x3Array1[i]==input3x3Array1[j]) {
         same3x3Arr1NumChk = true;
         return same3x3Arr1NumChk = true;
      } else {
         same3x3Arr1NumChk = false;
      };
	  };
  } return same3x3Arr1NumChk = false;
}      ///return   // check3x3ArrFail same3x3Arr1NumChk

// Checking for duplicate numbers in Sect 2 3x3 Array
var same3x3Arr2NumChk = false;

 // finds any duplicate array elements using the fewest possible comparison
function same3x3Arr2Duplicate() {
	for (i=0; i<input3x3Array2.length; i++) {                         // outer loop uses each item i at 0 through n
		for (j=i+1; j<input3x3Array2.length; j++) {                     // inner loop only compares items j at i+1 to n
			if (input3x3Array2[i]==input3x3Array2[j]) {
         same3x3Arr2NumChk = true;
         return same3x3Arr2NumChk = true;
      } else {
         same3x3Arr2NumChk = false;
      }
	  }
  } return same3x3Arr2NumChk = false;
}      ///return check3x3ArrFail

// Checking for duplicate numbers in Sect 3 3x3 Array
var same3x3Arr3NumChk = false;

 // finds any duplicate array elements using the fewest possible comparison
function same3x3Arr3Duplicate() {
  for (i=0; i<input3x3Array3.length; i++) {                         // outer loop uses each item i at 0 through n
 		for (j=i+1; j<input3x3Array3.length; j++) {                     // inner loop only compares items j at i+1 to n
			if (input3x3Array3[i]==input3x3Array3[j]) {
           same3x3Arr3NumChk = true;
         return same3x3Arr3NumChk = true;
      } else {
         same3x3Arr3NumChk = false;
      }
	  }
  } return same3x3Arr3NumChk = false;
}

// Checking for duplicate numbers in Sect 4 3x3 Array
var same3x3Arr4NumChk = false;

 // finds any duplicate array elements using the fewest possible comparison
function same3x3Arr4Duplicate() {
	for (i=0; i<input3x3Array4.length; i++) {                         // outer loop uses each item i at 0 through n
		for (j=i+1; j<input3x3Array4.length; j++) {                     // inner loop only compares items j at i+1 to n
			if (input3x3Array4[i]==input3x3Array4[j]) {
         same3x3Arr4NumChk = true;
         return same3x3Arr4NumChk = true;
      } else {
         same3x3Arr4NumChk = false;
      }
	  }
  } return same3x3Arr4NumChk = false;
}

// Checking for duplicate numbers in Sect 5 3x3 Array
var same3x3Arr5NumChk = false;

 // finds any duplicate array elements using the fewest possible comparison
function same3x3Arr5Duplicate() {
	for (i=0; i<input3x3Array5.length; i++) {                         // outer loop uses each item i at 0 through n
		for (j=i+1; j<input3x3Array5.length; j++) {                     // inner loop only compares items j at i+1 to n
			if (input3x3Array5[i]==input3x3Array5[j]) {
         same3x3Arr5NumChk = true;
         return same3x3Arr5NumChk = true;
      } else {
         same3x3Arr5NumChk = false;
      }
	  }
  } return same3x3Arr5NumChk = false;
}

// Checking for duplicate numbers in Sect 6 3x3 Array
var same3x3Arr6NumChk = false;

 // finds any duplicate array elements using the fewest possible comparison
function same3x3Arr6Duplicate() {
	for (i=0; i<input3x3Array6.length; i++) {                         // outer loop uses each item i at 0 through n
		for (j=i+1; j<input3x3Array6.length; j++) {                     // inner loop only compares items j at i+1 to n
			if (input3x3Array6[i]==input3x3Array6[j]) {
         same3x3Arr6NumChk = true;
         return same3x3Arr6NumChk = true;
      } else {
         same3x3Arr6NumChk = false;
      }
	  }
  } return same3x3Arr6NumChk = false;
}

// Checking for duplicate numbers in Sect 7 3x3 Array
var same3x3Arr7NumChk = false;

 // finds any duplicate array elements using the fewest possible comparison
function same3x3Arr7Duplicate() {
	for (i=0; i<input3x3Array7.length; i++) {                         // outer loop uses each item i at 0 through n
		for (j=i+1; j<input3x3Array7.length; j++) {                     // inner loop only compares items j at i+1 to n
			if (input3x3Array7[i]==input3x3Array7[j]) {
         same3x3Arr7NumChk = true;
         return same3x3Arr7NumChk = true;
      } else {
         same3x3Arr7NumChk = false;
      }
	  }
  } return same3x3Arr7NumChk = false;
}

// Checking for duplicate numbers in Sect 8 3x3 Array
var same3x3Arr8NumChk = false;

 // finds any duplicate array elements using the fewest possible comparison
function same3x3Arr8Duplicate() {
	for (i=0; i<input3x3Array8.length; i++) {                         // outer loop uses each item i at 0 through n
		for (j=i+1; j<input3x3Array8.length; j++) {                     // inner loop only compares items j at i+1 to n
			if (input3x3Array8[i]==input3x3Array8[j]) {
         same3x3Arr8NumChk = true;
         return same3x3Arr8NumChk = true;
      } else {
         same3x3Arr8NumChk = false;
      }
	  }
  } return same3x3Arr8NumChk = false;
}

// Checking for duplicate numbers in Sect 9 3x3 Array
var same3x3Arr9NumChk = false;

 // finds any duplicate array elements using the fewest possible comparison
function same3x3Arr9Duplicate() {
	for (i=0; i<input3x3Array9.length; i++) {                         // outer loop uses each item i at 0 through n
		for (j=i+1; j<input3x3Array9.length; j++) {                     // inner loop only compares items j at i+1 to n
			if (input3x3Array9[i]==input3x3Array9[j]) {
         same3x3Arr9NumChk = true;
         return same3x3Arr9NumChk = true;
      } else {
         same3x3Arr9NumChk = false;
      }
	  }
  } return same3x3Arr9NumChk = false;
}


// Checking for duplicate numbers in Row 1 Array
var sameRowArr1NumChk = false;
 // finds any duplicate array elements using the fewest possible comparison
function sameRowArr1Duplicate() {
 	for (i=initRowArray1.length; i<inputRowArray1.length; i++) {                        // outer loop uses each item i at 0 through n
 		for (j=0; j<initRowArray1.length; j++) {                                          // inner loop only compares items j at i+1 to n
 			if (inputRowArray1[i]==initRowArray1[j]) {
          sameRowArr1NumChk = true;
          return sameRowArr1NumChk = true
       } else {
          sameRowArr1NumChk = false;
       }
 	  }
  } return sameRowArr1NumChk = false
}

// Checking for duplicate numbers in Row 2 Array
var sameRowArr2NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameRowArr2Duplicate() {
  for (i=initRowArray2.length; i<inputRowArray2.length; i++) {                        // outer loop uses each item i at 0 through n
  	for (j=0; j<initRowArray2.length; j++) {                                          // inner loop only compares items j at i+1 to n
  		if (inputRowArray2[i]==initRowArray2[j]) {
         sameRowArr2NumChk = true;
         return sameRowArr2NumChk = true
      } else {
         sameRowArr2NumChk = false;
      }
    }
  } return sameRowArr2NumChk = false
}    ///return checkRowArrFail

// Checking for duplicate numbers in Row 3 Array
var sameRowArr3NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameRowArr3Duplicate() {
  for (i=initRowArray3.length; i<inputRowArray3.length; i++) {                        // outer loop uses each item i at 0 through n
  	for (j=0; j<initRowArray3.length; j++) {                                          // inner loop only compares items j at i+1 to n
  		if (inputRowArray3[i]==initRowArray3[j]) {
         sameRowArr3NumChk = true;
         return sameRowArr3NumChk = true
      } else {
         sameRowArr3NumChk = false;
      }
    }
  } return sameRowArr3NumChk = false
}

// Checking for duplicate numbers in Row 4 Array
var sameRowArr4NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameRowArr4Duplicate() {
  for (i=initRowArray4.length; i<inputRowArray4.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initRowArray4.length; j++) {                                          // inner loop only compares items j at i+1 to n
    	if (inputRowArray4[i]==initRowArray4[j]) {
         sameRowArr4NumChk = true;
         return sameRowArr4NumChk = true
      } else {
         sameRowArr4NumChk = false;
      }
    }
  } return sameRowArr4NumChk = false
}

// Checking for duplicate numbers in Row 5 Array
var sameRowArr5NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameRowArr5Duplicate() {
  for (i=initRowArray5.length; i<inputRowArray5.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initRowArray5.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputRowArray5[i]==initRowArray5[j]) {
         sameRowArr5NumChk = true;
         return sameRowArr5NumChk = true
      } else {
         sameRowArr5NumChk = false;
      }
    }
  } return sameRowArr5NumChk = false
}

// Checking for duplicate numbers in Row 6 Array
var sameRowArr6NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameRowArr6Duplicate() {
  for (i=initRowArray6.length; i<inputRowArray6.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initRowArray6.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputRowArray6[i]==initRowArray6[j]) {
         sameRowArr6NumChk = true;
         return sameRowArr6NumChk = true
      } else {
         sameRowArr6NumChk = false;
      }
    }
  } return sameRowArr6NumChk = false
}

// Checking for duplicate numbers in Row 7 Array
var sameRowArr7NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameRowArr7Duplicate() {
  for (i=initRowArray7.length; i<inputRowArray7.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initRowArray7.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputRowArray7[i]==initRowArray7[j]) {
         sameRowArr7NumChk = true;
         return sameRowArr7NumChk = true
      } else {
         sameRowArr7NumChk = false;
      }
    }
  } return sameRowArr7NumChk = false
}

// Checking for duplicate numbers in Row 8 Array
var sameRowArr8NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameRowArr8Duplicate() {
  for (i=initRowArray8.length; i<inputRowArray8.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initRowArray8.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputRowArray8[i]==initRowArray8[j]) {
         sameRowArr8NumChk = true;
         return sameRowArr8NumChk = true
      } else {
         sameRowArr8NumChk = false;
      }
    }
  } return sameRowArr8NumChk = false
}

// Checking for duplicate numbers in Row 9 Array
var sameRowArr9NumChk = false;
 // finds any duplicate array elements using the fewest possible comparison
function sameRowArr9Duplicate() {
  for (i=initRowArray9.length; i<inputRowArray9.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initRowArray9.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputRowArray9[i]==initRowArray9[j]) {
         sameRowArr9NumChk = true;
         return sameRowArr9NumChk = true
      } else {
         sameRowArr9NumChk = false;
      }
    }
  } return sameRowArr9NumChk = false
}      ///return checkRowArrFail


// Checking for duplicate numbers in Col 1 Array
var sameColArr1NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameColArr1Duplicate() {
	for (i=initColArray1.length; i<inputColArray1.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initColArray1.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputColArray1[i]==initColArray1[j]) {
         sameColArr1NumChk = true;
         return sameColArr1NumChk = true
      } else {
         sameColArr1NumChk = false;
      }
    }
  } return sameColArr1NumChk = false;
}

// Checking for duplicate numbers in Col 2 Array
var sameColArr2NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameColArr2Duplicate() {
  for (i=initColArray2.length; i<inputColArray2.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initColArray2.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputColArray2[i]==initColArray2[j]) {
         sameColArr2NumChk = true;
         return sameColArr2NumChk = true
      } else {
         sameColArr2NumChk = false;
      }
    }
  } return sameColArr2NumChk = false;
}

// Checking for duplicate numbers in Col 3 Array
var sameColArr3NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameColArr3Duplicate() {
	for (i=initColArray3.length; i<inputColArray3.length; i++) {                        // outer loop uses each item i at 0 through n
		for (j=0; j<initColArray3.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputColArray3[i]==initColArray3[j]) {
         sameColArr3NumChk = true;
         return sameColArr3NumChk = true
      } else {
         sameColArr3NumChk = false;
      }
	  }
 } return sameColArr3NumChk = false;
}

// Checking for duplicate numbers in Col 4 Array
var sameColArr4NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameColArr4Duplicate() {
  for (i=initColArray4.length; i<inputColArray4.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initColArray4.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputColArray4[i]==initColArray4[j]) {
         sameColArr4NumChk = true;
         return sameColArr4NumChk = true
      } else {
         sameColArr4NumChk = false;
      }
    }
  } return sameColArr4NumChk = false;
}

// Checking for duplicate numbers in Col 5 Array
var sameColArr5NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameColArr5Duplicate() {
  for (i=initColArray5.length; i<inputColArray5.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initColArray5.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputColArray5[i]==initColArray5[j]) {
         sameColArr5NumChk = true;
         return sameColArr5NumChk = true
      } else {
         sameColArr5NumChk = false;
      }
    }
  } return sameColArr5NumChk = false;
}

// Checking for duplicate numbers in Col 6 Array
var sameColArr6NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameColArr6Duplicate() {
  for (i=initColArray6.length; i<inputColArray6.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initColArray6.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputColArray6[i]==initColArray6[j]) {
         sameColArr6NumChk = true;
         return sameColArr6NumChk = true
      } else {
         sameColArr6NumChk = false;
      }
    }
  } return sameColArr6NumChk = false;
}

// Checking for duplicate numbers in Col 7 Array
var sameColArr7NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameColArr7Duplicate() {
  for (i=initColArray7.length; i<inputColArray7.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initColArray7.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputColArray7[i]==initColArray7[j]) {
         sameColArr7NumChk = true;
         return sameColArr7NumChk = true
      } else {
         sameColArr7NumChk = false;
      }
    }
  } return sameColArr7NumChk = false;
}

// Checking for duplicate numbers in Col 8 Array
var sameColArr8NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameColArr8Duplicate() {
  for (i=initColArray8.length; i<inputColArray8.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initColArray8.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputColArray8[i]==initColArray8[j]) {
         sameColArr8NumChk = true;
         return sameColArr8NumChk = true
      } else {
         sameColArr8NumChk = false;
      }
    }
  } return sameColArr8NumChk = false;
}

// Checking for duplicate numbers in Col 9 Array
var sameColArr9NumChk = false;
// finds any duplicate array elements using the fewest possible comparison
function sameColArr9Duplicate() {
  for (i=initColArray8.length; i<inputColArray8.length; i++) {                        // outer loop uses each item i at 0 through n
    for (j=0; j<initColArray8.length; j++) {                                          // inner loop only compares items j at i+1 to n
      if (inputColArray9[i]==initColArray9[j]) {
         sameColArr9NumChk = true;
         return sameColArr9NumChk = true
      } else {
         sameColArr9NumChk = false;
      }
    }
  } return sameColArr9NumChk = false;
}


// Checking for valid numbers of 1 to 9
var validSingleNumChk = false;
 // finds any duplicate array elements using the fewest possible comparison
function validSingleNumCheck() {
  console.log("it did come in hereeee in validSingleNumCheck");
  console.log("in inputSingleArray1 =", inputSingleArray1);
  console.log("inputSingleArray1 length =", inputSingleArray1.length);
  console.log("in sudoValidNumArray =", sudoValidNumArray);
  console.log("sudoValidNumArray length =", sudoValidNumArray.length);

  inputSingleArray.sort(function(a, b){return a-b});

  console.log("after sort inputSingleArray =", inputSingleArray);

  for (i=0; i<sudoValidNumArray.length; i++) {                                       // outer loop uses each item i at 0 through n
    console.log("it did come in hereee i loop");

    if (sudoValidNumArray[i]==inputSingleArray[i]) {
        validSingleNumChk = true;
        console.log("sudoValidNumArray[i] = ", i, sudoValidNumArray[i]);
        console.log("inputSingleArray[i] = ", i, inputSingleArray[i]);
        console.log("validSingleNum Check True = ", validSingleNumChk);
        //  return validSingleNumChk = true;
    } else {
        console.log(sudoValidNumArray + inputSingleArray);
        validSingleNumChk = false;
        console.log("sudoValidNumArray[i] = ", i, sudoValidNumArray[i]);
        console.log("inputSingleArray[i] = ", i, inputSingleArray[i]);
        console.log("validSingleNum Check False = ", validSingleNumChk);
        return validSingleNumChk = false;
    }
  } return validSingleNumChk = true;
}

function loadPatDemo() {
  console.log("it did come in hereee loadPatDemo");

  $('#R1C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R1C2').html('<div>5</div>').addClass("grid");        //Row1 Col2
  $('#R1C3').html('<div>4</div>').addClass("grid");         //Row1 Col3
  $('#R1C4').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R1C5').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R1C6').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R1C7').html('<div>9</div>').addClass("grid");         //Row1 Col7
  $('#R1C8').html('<div>8</div>').addClass("grid");        //Row1 Col8
  $('#R1C9').html('<div>3</div>').addClass("grid");         //Row1 Col9

  $('#R2C1').html('<div>2</div>').addClass("grid");         //Row1 Col1
  $('#R2C2').html('<div></div>').addClass("grid");       //Row1 Col2
  $('#R2C3').html('<div>8</div>').addClass("grid");         //Row1 Col3
  $('#R2C4').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R2C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R2C6').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R2C7').html('<div>4</div>').addClass("grid");         //Row3 Col1
  $('#R2C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R2C9').html('<div>1</div>').addClass("grid");         //Row3 Col3

  $('#R3C1').html('<div>3</div>').addClass("grid");         //Row1 Col1
  $('#R3C2').html('<div>6</div>').addClass("grid");        //Row1 Col2
  $('#R3C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R3C4').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R3C5').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R3C6').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R3C7').html('<div>2</div>').addClass("grid");         //Row3 Col1
  $('#R3C8').html('<div>7</div>').addClass("grid");        //Row3 Col2
  $('#R3C9').html('<div>5</div>').addClass("grid");         //Row3 Col3

  $('#R4C1').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R4C2').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R4C3').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R4C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R4C5').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R4C6').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R4C7').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col7
  $('#R4C8').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col8
  $('#R4C9').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col9

  $('#R5C1').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R5C2').html('<div></div>').addClass("grid").css("background-color", "lightgrey");       //Row1 Col2
  $('#R5C3').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R5C4').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R5C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R5C6').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R5C7').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R5C8').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R5C9').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col3

  $('#R6C1').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R6C2').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R6C3').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R6C4').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R6C5').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R6C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R6C7').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R6C8').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R6C9').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");

  $('#R7C1').html('<div>8</div>').addClass("grid");         //Row1 Col1
  $('#R7C2').html('<div>2</div>').addClass("grid");        //Row1 Col2
  $('#R7C3').html('<div>6</div>').addClass("grid");         //Row1 Col3
  $('#R7C4').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R7C5').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R7C6').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R7C7').html('<div></div>').addClass("grid");         //Row1 Col7
  $('#R7C8').html('<div>4</div>').addClass("grid");        //Row1 Col8
  $('#R7C9').html('<div>7</div>').addClass("grid");         //Row1 Col9

  $('#R8C1').html('<div>5</div>').addClass("grid");         //Row1 Col1
  $('#R8C2').html('<div></div>').addClass("grid");       //Row1 Col2
  $('#R8C3').html('<div>9</div>').addClass("grid");         //Row1 Col3
  $('#R8C4').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R8C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R8C6').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R8C7').html('<div>1</div>').addClass("grid");         //Row3 Col1
  $('#R8C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R8C9').html('<div>8</div>').addClass("grid");         //Row3 Col3

  $('#R9C1').html('<div>4</div>').addClass("grid");         //Row1 Col1
  $('#R9C2').html('<div>1</div>').addClass("grid");        //Row1 Col2
  $('#R9C3').html('<div>3</div>').addClass("grid");         //Row1 Col3
  $('#R9C4').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R9C5').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R9C6').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R9C7').html('<div>6</div>').addClass("grid");         //Row3 Col1
  $('#R9C8').html('<div>2</div>').addClass("grid");        //Row3 Col2
  $('#R9C9').html('<div></div>').addClass("grid");

  init3x3Array1 = [];
  init3x3Array2 = [];
  init3x3Array3 = [];
  init3x3Array4 = [];
  init3x3Array5 = [];
  init3x3Array6 = [];
  init3x3Array7 = [];
  init3x3Array8 = [];
  init3x3Array9 = [];

  initRowArray1 = [];
  initRowArray2 = [];
  initRowArray3 = [];
  initRowArray4 = [];
  initRowArray5 = [];
  initRowArray6 = [];
  initRowArray7 = [];
  initRowArray8 = [];
  initRowArray9 = [];

  initColArray1 = [];
  initColArray2 = [];
  initColArray3 = [];
  initColArray4 = [];
  initColArray5 = [];
  initColArray6 = [];
  initColArray7 = [];
  initColArray8 = [];
  initColArray9 = [];

  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];
  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];
  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];

  init3x3Array1 = [5,4,2,8,3,6]
  init3x3Array2 = [2,1,6,5,7,9,8,4]
  init3x3Array3 = [9,8,3,4,1,2,7,5]
  init3x3Array4 = [1,3,7,9,2,6,8,5]
  init3x3Array5 = [6,9,7,8,3,2]
  init3x3Array6 = [8,5,2,3,6,7,9,4]
  init3x3Array7 = [8,2,6,5,9,4,1,3]
  init3x3Array8 = [1,9,3,6,2,8,7,5]
  init3x3Array9 = [4,7,1,8,6,2]

  initRowArray1 = [5,4,2,1,6,9,8,3]
  initRowArray2 = [2,8,5,7,4,1]
  initRowArray3 = [3,6,9,8,4,2,7,5]
  initRowArray4 = [1,3,7,6,9,8,5,2]
  initRowArray5 = [9,2,7,8,3,6]
  initRowArray6 = [6,8,5,3,2,7,9,4]
  initRowArray7 = [8,2,6,1,9,3,4,7]
  initRowArray8 = [5,9,6,2,1,8]
  initRowArray9 = [4,1,3,8,7,5,6,2]

  initColArray1 = [2,3,1,9,6,8,5,4]
  initColArray2 = [5,6,3,8,2,1]
  initColArray3 = [4,8,7,2,5,6,9,3]
  initColArray4 = [2,5,9,7,3,1,6,8]
  initColArray5 = [1,8,6,2,9,7]
  initColArray6 = [6,7,4,9,8,3,2,5]
  initColArray7 = [9,4,2,8,3,7,1,6]
  initColArray8 = [8,7,5,9,4,2]
  initColArray9 = [3,1,5,2,6,4,7,8]

  input3x3Array1 = init3x3Array1.concat(input3x3Array1);
  input3x3Array2 = init3x3Array2.concat(input3x3Array2);
  input3x3Array3 = init3x3Array3.concat(input3x3Array3);
  input3x3Array4 = init3x3Array4.concat(input3x3Array4);
  input3x3Array5 = init3x3Array5.concat(input3x3Array5);
  input3x3Array6 = init3x3Array6.concat(input3x3Array6);
  input3x3Array7 = init3x3Array7.concat(input3x3Array7);
  input3x3Array8 = init3x3Array8.concat(input3x3Array8);
  input3x3Array9 = init3x3Array9.concat(input3x3Array9);

  inputRowArray1 = initRowArray1.concat(inputRowArray1);
  inputRowArray2 = initRowArray2.concat(inputRowArray2);
  inputRowArray3 = initRowArray3.concat(inputRowArray3);
  inputRowArray4 = initRowArray4.concat(inputRowArray4);
  inputRowArray5 = initRowArray5.concat(inputRowArray5);
  inputRowArray6 = initRowArray6.concat(inputRowArray6);
  inputRowArray7 = initRowArray7.concat(inputRowArray7);
  inputRowArray8 = initRowArray8.concat(inputRowArray8);
  inputRowArray9 = initRowArray9.concat(inputRowArray9);

  inputColArray1 = initColArray1.concat(inputColArray1);
  inputColArray2 = initColArray2.concat(inputColArray2);
  inputColArray3 = initColArray3.concat(inputColArray3);
  inputColArray4 = initColArray4.concat(inputColArray4);
  inputColArray5 = initColArray5.concat(inputColArray5);
  inputColArray6 = initColArray6.concat(inputColArray6);
  inputColArray7 = initColArray7.concat(inputColArray7);
  inputColArray8 = initColArray8.concat(inputColArray8);
  inputColArray9 = initColArray9.concat(inputColArray9);

  inputSingleArray1 = init3x3Array1.concat(inputSingleArray1);
  inputSingleArray2 = init3x3Array2.concat(inputSingleArray2);
  inputSingleArray3 = init3x3Array3.concat(inputSingleArray3);
  inputSingleArray4 = init3x3Array4.concat(inputSingleArray4);
  inputSingleArray5 = init3x3Array5.concat(inputSingleArray5);
  inputSingleArray6 = init3x3Array6.concat(inputSingleArray6);
  inputSingleArray7 = init3x3Array7.concat(inputSingleArray7);
  inputSingleArray8 = init3x3Array8.concat(inputSingleArray8);
  inputSingleArray9 = init3x3Array9.concat(inputSingleArray9);
}

function loadPat1() {
  console.log("it did come in hereee loadPat1");

  $('#R1C1').html('<div>7</div>').addClass("grid");         //Row1 Col1
  $('#R1C2').html('<div>5</div>').addClass("grid");        //Row1 Col2
  $('#R1C3').html('<div>4</div>').addClass("grid");         //Row1 Col3
  $('#R1C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R1C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R1C6').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R1C7').html('<div></div>').addClass("grid");         //Row1 Col7
  $('#R1C8').html('<div>8</div>').addClass("grid");        //Row1 Col8
  $('#R1C9').html('<div>3</div>').addClass("grid");         //Row1 Col9

  $('#R2C1').html('<div>2</div>').addClass("grid");         //Row1 Col1
  $('#R2C2').html('<div>9</div>').addClass("grid");       //Row1 Col2
  $('#R2C3').html('<div>8</div>').addClass("grid");         //Row1 Col3
  $('#R2C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R2C5').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R2C6').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R2C7').html('<div>4</div>').addClass("grid");         //Row3 Col1
  $('#R2C8').html('<div>6</div>').addClass("grid");        //Row3 Col2
  $('#R2C9').html('<div>1</div>').addClass("grid");         //Row3 Col3

  $('#R3C1').html('<div>3</div>').addClass("grid");         //Row1 Col1
  $('#R3C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R3C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R3C4').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R3C5').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R3C6').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R3C7').html('<div>2</div>').addClass("grid");         //Row3 Col1
  $('#R3C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R3C9').html('<div>5</div>').addClass("grid");         //Row3 Col3

  $('#R4C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R4C2').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R4C3').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R4C4').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R4C5').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R4C6').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R4C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col7
  $('#R4C8').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col8
  $('#R4C9').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col9

  $('#R5C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R5C2').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");       //Row1 Col2
  $('#R5C3').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R5C4').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R5C5').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R5C6').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R5C7').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R5C8').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R5C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col3

  $('#R6C1').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R6C2').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R6C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R6C4').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R6C5').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R6C6').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R6C7').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R6C8').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R6C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");

  $('#R7C1').html('<div>8</div>').addClass("grid");         //Row1 Col1
  $('#R7C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R7C3').html('<div>6</div>').addClass("grid");         //Row1 Col3
  $('#R7C4').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R7C5').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R7C6').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R7C7').html('<div></div>').addClass("grid");         //Row1 Col7
  $('#R7C8').html('<div></div>').addClass("grid");        //Row1 Col8
  $('#R7C9').html('<div>7</div>').addClass("grid");         //Row1 Col9

  $('#R8C1').html('<div>5</div>').addClass("grid");         //Row1 Col1
  $('#R8C2').html('<div>7</div>').addClass("grid");       //Row1 Col2
  $('#R8C3').html('<div>9</div>').addClass("grid");         //Row1 Col3
  $('#R8C4').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R8C5').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R8C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R8C7').html('<div>1</div>').addClass("grid");         //Row3 Col1
  $('#R8C8').html('<div>3</div>').addClass("grid");        //Row3 Col2
  $('#R8C9').html('<div>8</div>').addClass("grid");         //Row3 Col3

  $('#R9C1').html('<div>4</div>').addClass("grid");         //Row1 Col1
  $('#R9C2').html('<div>1</div>').addClass("grid");        //Row1 Col2
  $('#R9C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R9C4').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R9C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R9C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R9C7').html('<div>6</div>').addClass("grid");         //Row3 Col1
  $('#R9C8').html('<div>2</div>').addClass("grid");        //Row3 Col2
  $('#R9C9').html('<div>9</div>').addClass("grid");

  init3x3Array1 = [];
  init3x3Array2 = [];
  init3x3Array3 = [];
  init3x3Array4 = [];
  init3x3Array5 = [];
  init3x3Array6 = [];
  init3x3Array7 = [];
  init3x3Array8 = [];
  init3x3Array9 = [];

  initRowArray1 = [];
  initRowArray2 = [];
  initRowArray3 = [];
  initRowArray4 = [];
  initRowArray5 = [];
  initRowArray6 = [];
  initRowArray7 = [];
  initRowArray8 = [];
  initRowArray9 = [];

  initColArray1 = [];
  initColArray2 = [];
  initColArray3 = [];
  initColArray4 = [];
  initColArray5 = [];
  initColArray6 = [];
  initColArray7 = [];
  initColArray8 = [];
  initColArray9 = [];

  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];
  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];
  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];

  init3x3Array1 = [7,5,4,2,9,8,3]
  init3x3Array2 = [6,3,7,9,8,4]
  init3x3Array3 = [8,3,4,6,1,2,5]
  init3x3Array4 = [3,7,4,2,6,8]
  init3x3Array5 = [4,6,9,7,5,8,3,2,1]
  init3x3Array6 = [5,2,3,1,7,9]
  init3x3Array7 = [8,6,5,7,9,4,1]
  init3x3Array8 = [1,9,3,6,4,8]
  init3x3Array9 = [7,1,3,8,6,2,9]

  initRowArray1 = [7,5,4,6,8,3]
  initRowArray2 = [2,9,8,3,7,4,6,1]
  initRowArray3 = [3,9,8,4,2,5]
  initRowArray4 = [3,7,4,6,9,5,2]
  initRowArray5 = [4,2,7,5,8,3,1]
  initRowArray6 = [6,8,3,2,1,7,9]
  initRowArray7 = [8,6,1,9,3,7]
  initRowArray8 = [5,7,9,6,4,1,3,8]
  initRowArray9 = [4,1,8,6,2,9]

  initColArray1 = [7,2,3,6,8,5,4]
  initColArray2 = [5,9,3,4,8,7,1]
  initColArray3 = [4,8,7,2,6,9]
  initColArray4 = [9,4,7,3,1,6,8]
  initColArray5 = [3,8,6,5,2,9,4]
  initColArray6 = [6,7,4,9,8,1,3]
  initColArray7 = [4,2,3,7,1,6]
  initColArray8 = [8,6,5,1,9,3,2]
  initColArray9 = [3,1,5,2,7,8,9]

  input3x3Array1 = init3x3Array1.concat(input3x3Array1);
  input3x3Array2 = init3x3Array2.concat(input3x3Array2);
  input3x3Array3 = init3x3Array3.concat(input3x3Array3);
  input3x3Array4 = init3x3Array4.concat(input3x3Array4);
  input3x3Array5 = init3x3Array5.concat(input3x3Array5);
  input3x3Array6 = init3x3Array6.concat(input3x3Array6);
  input3x3Array7 = init3x3Array7.concat(input3x3Array7);
  input3x3Array8 = init3x3Array8.concat(input3x3Array8);
  input3x3Array9 = init3x3Array9.concat(input3x3Array9);

  inputRowArray1 = initRowArray1.concat(inputRowArray1);
  inputRowArray2 = initRowArray2.concat(inputRowArray2);
  inputRowArray3 = initRowArray3.concat(inputRowArray3);
  inputRowArray4 = initRowArray4.concat(inputRowArray4);
  inputRowArray5 = initRowArray5.concat(inputRowArray5);
  inputRowArray6 = initRowArray6.concat(inputRowArray6);
  inputRowArray7 = initRowArray7.concat(inputRowArray7);
  inputRowArray8 = initRowArray8.concat(inputRowArray8);
  inputRowArray9 = initRowArray9.concat(inputRowArray9);

  inputColArray1 = initColArray1.concat(inputColArray1);
  inputColArray2 = initColArray2.concat(inputColArray2);
  inputColArray3 = initColArray3.concat(inputColArray3);
  inputColArray4 = initColArray4.concat(inputColArray4);
  inputColArray5 = initColArray5.concat(inputColArray5);
  inputColArray6 = initColArray6.concat(inputColArray6);
  inputColArray7 = initColArray7.concat(inputColArray7);
  inputColArray8 = initColArray8.concat(inputColArray8);
  inputColArray9 = initColArray9.concat(inputColArray9);

  inputSingleArray1 = init3x3Array1.concat(inputSingleArray1);
  inputSingleArray2 = init3x3Array2.concat(inputSingleArray2);
  inputSingleArray3 = init3x3Array3.concat(inputSingleArray3);
  inputSingleArray4 = init3x3Array4.concat(inputSingleArray4);
  inputSingleArray5 = init3x3Array5.concat(inputSingleArray5);
  inputSingleArray6 = init3x3Array6.concat(inputSingleArray6);
  inputSingleArray7 = init3x3Array7.concat(inputSingleArray7);
  inputSingleArray8 = init3x3Array8.concat(inputSingleArray8);
  inputSingleArray9 = init3x3Array9.concat(inputSingleArray9);
}

function loadPat2() {
  console.log("it did come in hereee loadPat2");

  $('#R1C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R1C2').html('<div>1</div>').addClass("grid");        //Row1 Col2
  $('#R1C3').html('<div>3</div>').addClass("grid");         //Row1 Col3
  $('#R1C4').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R1C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R1C6').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R1C7').html('<div>5</div>').addClass("grid");         //Row1 Col7
  $('#R1C8').html('<div>2</div>').addClass("grid");        //Row1 Col8
  $('#R1C9').html('<div>6</div>').addClass("grid");         //Row1 Col9

  $('#R2C1').html('<div>6</div>').addClass("grid");         //Row1 Col1
  $('#R2C2').html('<div></div>').addClass("grid");       //Row1 Col2
  $('#R2C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R2C4').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R2C5').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R2C6').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R2C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R2C8').html('<div>7</div>').addClass("grid");        //Row3 Col2
  $('#R2C9').html('<div>8</div>').addClass("grid");         //Row3 Col3

  $('#R3C1').html('<div>8</div>').addClass("grid");         //Row1 Col1
  $('#R3C2').html('<div>5</div>').addClass("grid");        //Row1 Col2
  $('#R3C3').html('<div>7</div>').addClass("grid");         //Row1 Col3
  $('#R3C4').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R3C5').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R3C6').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R3C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R3C8').html('<div>1</div>').addClass("grid");        //Row3 Col2
  $('#R3C9').html('<div></div>').addClass("grid");         //Row3 Col3

  $('#R4C1').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R4C2').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R4C3').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R4C4').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R4C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R4C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R4C7').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col7
  $('#R4C8').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col8
  $('#R4C9').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col9

  $('#R5C1').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R5C2').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");       //Row1 Col2
  $('#R5C3').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R5C4').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R5C5').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R5C6').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R5C7').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R5C8').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R5C9').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col3

  $('#R6C1').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R6C2').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R6C3').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R6C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R6C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R6C6').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R6C7').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R6C8').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R6C9').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");

  $('#R7C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R7C2').html('<div>6</div>').addClass("grid");        //Row1 Col2
  $('#R7C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R7C4').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R7C5').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R7C6').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R7C7').html('<div>7</div>').addClass("grid");         //Row1 Col7
  $('#R7C8').html('<div>3</div>').addClass("grid");        //Row1 Col8
  $('#R7C9').html('<div>2</div>').addClass("grid");         //Row1 Col9

  $('#R8C1').html('<div>1</div>').addClass("grid");         //Row1 Col1
  $('#R8C2').html('<div>7</div>').addClass("grid");       //Row1 Col2
  $('#R8C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R8C4').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R8C5').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R8C6').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R8C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R8C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R8C9').html('<div>4</div>').addClass("grid");         //Row3 Col3

  $('#R9C1').html('<div>2</div>').addClass("grid");         //Row1 Col1
  $('#R9C2').html('<div>3</div>').addClass("grid");        //Row1 Col2
  $('#R9C3').html('<div>9</div>').addClass("grid");         //Row1 Col3
  $('#R9C4').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R9C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R9C6').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R9C7').html('<div>8</div>').addClass("grid");         //Row3 Col1
  $('#R9C8').html('<div>6</div>').addClass("grid");        //Row3 Col2
  $('#R9C9').html('<div></div>').addClass("grid");

  init3x3Array1 = [];
  init3x3Array2 = [];
  init3x3Array3 = [];
  init3x3Array4 = [];
  init3x3Array5 = [];
  init3x3Array6 = [];
  init3x3Array7 = [];
  init3x3Array8 = [];
  init3x3Array9 = [];

  initRowArray1 = [];
  initRowArray2 = [];
  initRowArray3 = [];
  initRowArray4 = [];
  initRowArray5 = [];
  initRowArray6 = [];
  initRowArray7 = [];
  initRowArray8 = [];
  initRowArray9 = [];

  initColArray1 = [];
  initColArray2 = [];
  initColArray3 = [];
  initColArray4 = [];
  initColArray5 = [];
  initColArray6 = [];
  initColArray7 = [];
  initColArray8 = [];
  initColArray9 = [];

  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];
  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];
  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];

  init3x3Array1 = [1,3,6,8,5,7]
  init3x3Array2 = [4,7,5,9,1,3,2,6]
  init3x3Array3 = [5,2,6,7,8,1]
  init3x3Array4 = [4,6,7,9,5,3,2,1]
  init3x3Array5 = [1,2,6,4]
  init3x3Array6 = [2,9,5,1,8,3,6,7]
  init3x3Array7 = [6,1,7,2,3,9]
  init3x3Array8 = [9,1,8,6,3,2,7,5]
  init3x3Array9 = [7,3,2,4,8,6]

  initRowArray1 = [1,3,4,7,5,2,6]
  initRowArray2 = [6,5,9,1,7,8]
  initRowArray3 = [8,5,7,3,2,6,1]
  initRowArray4 = [4,6,1,2,9,5]
  initRowArray5 = [7,9,5,2,6,4,1,8,3]
  initRowArray6 = [3,2,1,9,6,7]
  initRowArray7 = [6,9,1,8,7,3,2]
  initRowArray8 = [1,7,6,3,2,4]
  initRowArray9 = [2,3,9,7,5,8,6]

  initColArray1 = [6,8,4,7,3,1,2]
  initColArray2 = [1,5,9,2,6,7,3]
  initColArray3 = [3,7,6,5,1,9]
  initColArray4 = [4,5,3,1,2,9,6,7]
  initColArray5 = [9,2,6,1,3]
  initColArray6 = [7,1,6,4,9,8,2,5]
  initColArray7 = [5,2,1,6,7,8]
  initColArray8 = [2,7,1,9,8,3,6]
  initColArray9 = [6,8,5,3,7,2,4]

  input3x3Array1 = init3x3Array1.concat(input3x3Array1);
  input3x3Array2 = init3x3Array2.concat(input3x3Array2);
  input3x3Array3 = init3x3Array3.concat(input3x3Array3);
  input3x3Array4 = init3x3Array4.concat(input3x3Array4);
  input3x3Array5 = init3x3Array5.concat(input3x3Array5);
  input3x3Array6 = init3x3Array6.concat(input3x3Array6);
  input3x3Array7 = init3x3Array7.concat(input3x3Array7);
  input3x3Array8 = init3x3Array8.concat(input3x3Array8);
  input3x3Array9 = init3x3Array9.concat(input3x3Array9);

  inputRowArray1 = initRowArray1.concat(inputRowArray1);
  inputRowArray2 = initRowArray2.concat(inputRowArray2);
  inputRowArray3 = initRowArray3.concat(inputRowArray3);
  inputRowArray4 = initRowArray4.concat(inputRowArray4);
  inputRowArray5 = initRowArray5.concat(inputRowArray5);
  inputRowArray6 = initRowArray6.concat(inputRowArray6);
  inputRowArray7 = initRowArray7.concat(inputRowArray7);
  inputRowArray8 = initRowArray8.concat(inputRowArray8);
  inputRowArray9 = initRowArray9.concat(inputRowArray9);

  inputColArray1 = initColArray1.concat(inputColArray1);
  inputColArray2 = initColArray2.concat(inputColArray2);
  inputColArray3 = initColArray3.concat(inputColArray3);
  inputColArray4 = initColArray4.concat(inputColArray4);
  inputColArray5 = initColArray5.concat(inputColArray5);
  inputColArray6 = initColArray6.concat(inputColArray6);
  inputColArray7 = initColArray7.concat(inputColArray7);
  inputColArray8 = initColArray8.concat(inputColArray8);
  inputColArray9 = initColArray9.concat(inputColArray9);

  inputSingleArray1 = init3x3Array1.concat(inputSingleArray1);
  inputSingleArray2 = init3x3Array2.concat(inputSingleArray2);
  inputSingleArray3 = init3x3Array3.concat(inputSingleArray3);
  inputSingleArray4 = init3x3Array4.concat(inputSingleArray4);
  inputSingleArray5 = init3x3Array5.concat(inputSingleArray5);
  inputSingleArray6 = init3x3Array6.concat(inputSingleArray6);
  inputSingleArray7 = init3x3Array7.concat(inputSingleArray7);
  inputSingleArray8 = init3x3Array8.concat(inputSingleArray8);
  inputSingleArray9 = init3x3Array9.concat(inputSingleArray9);
}

function loadPat3() {
  console.log("it did come in hereee loadPat3");

  $('#R1C1').html('<div>1</div>').addClass("grid");         //Row1 Col1
  $('#R1C2').html('<div>6</div>').addClass("grid");        //Row1 Col2
  $('#R1C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R1C4').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R1C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R1C6').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R1C7').html('<div>4</div>').addClass("grid");         //Row1 Col7
  $('#R1C8').html('<div>3</div>').addClass("grid");        //Row1 Col8
  $('#R1C9').html('<div></div>').addClass("grid");         //Row1 Col9

  $('#R2C1').html('<div>3</div>').addClass("grid");         //Row1 Col1
  $('#R2C2').html('<div></div>').addClass("grid");       //Row1 Col2
  $('#R2C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R2C4').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R2C5').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R2C6').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R2C7').html('<div>7</div>').addClass("grid");         //Row3 Col1
  $('#R2C8').html('<div>8</div>').addClass("grid");        //Row3 Col2
  $('#R2C9').html('<div>6</div>').addClass("grid");         //Row3 Col3

  $('#R3C1').html('<div>4</div>').addClass("grid");         //Row1 Col1
  $('#R3C2').html('<div>7</div>').addClass("grid");        //Row1 Col2
  $('#R3C3').html('<div>8</div>').addClass("grid");         //Row1 Col3
  $('#R3C4').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R3C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R3C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R3C7').html('<div>1</div>').addClass("grid");         //Row3 Col1
  $('#R3C8').html('<div>9</div>').addClass("grid");        //Row3 Col2
  $('#R3C9').html('<div>5</div>').addClass("grid");         //Row3 Col3

  $('#R4C1').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R4C2').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R4C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R4C4').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R4C5').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R4C6').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R4C7').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col7
  $('#R4C8').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col8
  $('#R4C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col9

  $('#R5C1').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R5C2').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");       //Row1 Col2
  $('#R5C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R5C4').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R5C5').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R5C6').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R5C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R5C8').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R5C9').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col3

  $('#R6C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R6C2').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R6C3').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R6C4').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R6C5').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R6C6').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R6C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R6C8').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R6C9').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");

  $('#R7C1').html('<div>5</div>').addClass("grid");         //Row1 Col1
  $('#R7C2').html('<div>3</div>').addClass("grid");        //Row1 Col2
  $('#R7C3').html('<div>7</div>').addClass("grid");         //Row1 Col3
  $('#R7C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R7C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R7C6').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R7C7').html('<div>8</div>').addClass("grid");         //Row1 Col7
  $('#R7C8').html('<div>4</div>').addClass("grid");        //Row1 Col8
  $('#R7C9').html('<div>1</div>').addClass("grid");         //Row1 Col9

  $('#R8C1').html('<div>2</div>').addClass("grid");         //Row1 Col1
  $('#R8C2').html('<div>1</div>').addClass("grid");       //Row1 Col2
  $('#R8C3').html('<div>6</div>').addClass("grid");         //Row1 Col3
  $('#R8C4').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R8C5').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R8C6').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R8C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R8C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R8C9').html('<div>7</div>').addClass("grid");         //Row3 Col3

  $('#R9C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R9C2').html('<div>8</div>').addClass("grid");        //Row1 Col2
  $('#R9C3').html('<div>4</div>').addClass("grid");         //Row1 Col3
  $('#R9C4').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R9C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R9C6').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R9C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R9C8').html('<div>2</div>').addClass("grid");        //Row3 Col2
  $('#R9C9').html('<div>3</div>').addClass("grid");

  init3x3Array1 = [];
  init3x3Array2 = [];
  init3x3Array3 = [];
  init3x3Array4 = [];
  init3x3Array5 = [];
  init3x3Array6 = [];
  init3x3Array7 = [];
  init3x3Array8 = [];
  init3x3Array9 = [];

  initRowArray1 = [];
  initRowArray2 = [];
  initRowArray3 = [];
  initRowArray4 = [];
  initRowArray5 = [];
  initRowArray6 = [];
  initRowArray7 = [];
  initRowArray8 = [];
  initRowArray9 = [];

  initColArray1 = [];
  initColArray2 = [];
  initColArray3 = [];
  initColArray4 = [];
  initColArray5 = [];
  initColArray6 = [];
  initColArray7 = [];
  initColArray8 = [];
  initColArray9 = [];

  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];
  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];
  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];

  init3x3Array1 = [1,6,3,4,7,8]
  init3x3Array2 = [7,8,5,4,1,2]
  init3x3Array3 = [4,3,7,8,6,1,9,5]
  init3x3Array4 = [7,9,6,5,4,1]
  init3x3Array5 = [4,1,5,8,7,9,6,2,3]
  init3x3Array6 = [3,6,1,4,7,9]
  init3x3Array7 = [5,3,7,2,1,6,8,4]
  init3x3Array8 = [2,3,8,4,1,7]
  init3x3Array9 = [8,4,1,7,2,3]

  initRowArray1 = [1,6,7,8,4,3]
  initRowArray2 = [3,5,4,1,7,8,6]
  initRowArray3 = [4,7,8,2,1,9,5]
  initRowArray4 = [7,9,4,1,5,3,6]
  initRowArray5 = [6,5,8,7,9,1,4]
  initRowArray6 = [4,1,6,2,3,7,9]
  initRowArray7 = [5,3,7,2,8,4,1]
  initRowArray8 = [2,1,6,3,8,4,7]
  initRowArray9 = [8,4,1,7,2,3]

  initColArray1 = [1,3,4,7,6,5,2]
  initColArray2 = [6,7,9,5,4,3,1,8]
  initColArray3 = [8,1,7,6,4]
  initColArray4 = [7,5,2,4,8,6,3,1]
  initColArray5 = [4,1,7,2,8]
  initColArray6 = [8,1,5,9,3,2,4,7]
  initColArray7 = [4,7,1,3,8]
  initColArray8 = [3,8,9,6,1,7,4,2]
  initColArray9 = [6,5,4,9,1,7,3]

  input3x3Array1 = init3x3Array1.concat(input3x3Array1);
  input3x3Array2 = init3x3Array2.concat(input3x3Array2);
  input3x3Array3 = init3x3Array3.concat(input3x3Array3);
  input3x3Array4 = init3x3Array4.concat(input3x3Array4);
  input3x3Array5 = init3x3Array5.concat(input3x3Array5);
  input3x3Array6 = init3x3Array6.concat(input3x3Array6);
  input3x3Array7 = init3x3Array7.concat(input3x3Array7);
  input3x3Array8 = init3x3Array8.concat(input3x3Array8);
  input3x3Array9 = init3x3Array9.concat(input3x3Array9);

  inputRowArray1 = initRowArray1.concat(inputRowArray1);
  inputRowArray2 = initRowArray2.concat(inputRowArray2);
  inputRowArray3 = initRowArray3.concat(inputRowArray3);
  inputRowArray4 = initRowArray4.concat(inputRowArray4);
  inputRowArray5 = initRowArray5.concat(inputRowArray5);
  inputRowArray6 = initRowArray6.concat(inputRowArray6);
  inputRowArray7 = initRowArray7.concat(inputRowArray7);
  inputRowArray8 = initRowArray8.concat(inputRowArray8);
  inputRowArray9 = initRowArray9.concat(inputRowArray9);

  inputColArray1 = initColArray1.concat(inputColArray1);
  inputColArray2 = initColArray2.concat(inputColArray2);
  inputColArray3 = initColArray3.concat(inputColArray3);
  inputColArray4 = initColArray4.concat(inputColArray4);
  inputColArray5 = initColArray5.concat(inputColArray5);
  inputColArray6 = initColArray6.concat(inputColArray6);
  inputColArray7 = initColArray7.concat(inputColArray7);
  inputColArray8 = initColArray8.concat(inputColArray8);
  inputColArray9 = initColArray9.concat(inputColArray9);

  inputSingleArray1 = init3x3Array1.concat(inputSingleArray1);
  inputSingleArray2 = init3x3Array2.concat(inputSingleArray2);
  inputSingleArray3 = init3x3Array3.concat(inputSingleArray3);
  inputSingleArray4 = init3x3Array4.concat(inputSingleArray4);
  inputSingleArray5 = init3x3Array5.concat(inputSingleArray5);
  inputSingleArray6 = init3x3Array6.concat(inputSingleArray6);
  inputSingleArray7 = init3x3Array7.concat(inputSingleArray7);
  inputSingleArray8 = init3x3Array8.concat(inputSingleArray8);
  inputSingleArray9 = init3x3Array9.concat(inputSingleArray9);
}

function loadPat4() {
  console.log("it did come in hereee loadPat4");

  $('#R1C1').html('<div>4</div>').addClass("grid");         //Row1 Col1
  $('#R1C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R1C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R1C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R1C5').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R1C6').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R1C7').html('<div>2</div>').addClass("grid");         //Row1 Col7
  $('#R1C8').html('<div>3</div>').addClass("grid");        //Row1 Col8
  $('#R1C9').html('<div>6</div>').addClass("grid");         //Row1 Col9

  $('#R2C1').html('<div>6</div>').addClass("grid");         //Row1 Col1
  $('#R2C2').html('<div></div>').addClass("grid");       //Row1 Col2
  $('#R2C3').html('<div>2</div>').addClass("grid");         //Row1 Col3
  $('#R2C4').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R2C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R2C6').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R2C7').html('<div>8</div>').addClass("grid");         //Row3 Col1
  $('#R2C8').html('<div>1</div>').addClass("grid");        //Row3 Col2
  $('#R2C9').html('<div>5</div>').addClass("grid");         //Row3 Col3

  $('#R3C1').html('<div>3</div>').addClass("grid");         //Row1 Col1
  $('#R3C2').html('<div>5</div>').addClass("grid");        //Row1 Col2
  $('#R3C3').html('<div>8</div>').addClass("grid");         //Row1 Col3
  $('#R3C4').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R3C5').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R3C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R3C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R3C8').html('<div>4</div>').addClass("grid");        //Row3 Col2
  $('#R3C9').html('<div>7</div>').addClass("grid");         //Row3 Col3

  $('#R4C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R4C2').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R4C3').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R4C4').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R4C5').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R4C6').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R4C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col7
  $('#R4C8').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col8
  $('#R4C9').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col9

  $('#R5C1').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R5C2').html('<div></div>').addClass("grid").css("background-color", "lightgrey");       //Row1 Col2
  $('#R5C3').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R5C4').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R5C5').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R5C6').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R5C7').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R5C8').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R5C9').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col3

  $('#R6C1').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R6C2').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R6C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R6C4').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R6C5').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R6C6').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R6C7').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R6C8').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R6C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");

  $('#R7C1').html('<div>7</div>').addClass("grid");         //Row1 Col1
  $('#R7C2').html('<div>1</div>').addClass("grid");        //Row1 Col2
  $('#R7C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R7C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R7C5').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R7C6').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R7C7').html('<div>5</div>').addClass("grid");         //Row1 Col7
  $('#R7C8').html('<div>6</div>').addClass("grid");        //Row1 Col8
  $('#R7C9').html('<div>2</div>').addClass("grid");         //Row1 Col9

  $('#R8C1').html('<div>8</div>').addClass("grid");         //Row1 Col1
  $('#R8C2').html('<div>2</div>').addClass("grid");       //Row1 Col2
  $('#R8C3').html('<div>4</div>').addClass("grid");         //Row1 Col3
  $('#R8C4').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R8C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R8C6').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R8C7').html('<div>3</div>').addClass("grid");         //Row3 Col1
  $('#R8C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R8C9').html('<div>1</div>').addClass("grid");         //Row3 Col3

  $('#R9C1').html('<div>5</div>').addClass("grid");         //Row1 Col1
  $('#R9C2').html('<div>6</div>').addClass("grid");        //Row1 Col2
  $('#R9C3').html('<div>3</div>').addClass("grid");         //Row1 Col3
  $('#R9C4').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R9C5').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R9C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R9C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R9C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R9C9').html('<div>4</div>').addClass("grid");

  init3x3Array1 = [];
  init3x3Array2 = [];
  init3x3Array3 = [];
  init3x3Array4 = [];
  init3x3Array5 = [];
  init3x3Array6 = [];
  init3x3Array7 = [];
  init3x3Array8 = [];
  init3x3Array9 = [];

  initRowArray1 = [];
  initRowArray2 = [];
  initRowArray3 = [];
  initRowArray4 = [];
  initRowArray5 = [];
  initRowArray6 = [];
  initRowArray7 = [];
  initRowArray8 = [];
  initRowArray9 = [];

  initColArray1 = [];
  initColArray2 = [];
  initColArray3 = [];
  initColArray4 = [];
  initColArray5 = [];
  initColArray6 = [];
  initColArray7 = [];
  initColArray8 = [];
  initColArray9 = [];

  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];
  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];
  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];

  init3x3Array1 = [4,6,2,3,5,8]
  init3x3Array2 = [8,5,4,3,1,6]
  init3x3Array3 = [2,3,6,8,1,5,4,7]
  init3x3Array4 = [4,6,9,5,1,3]
  init3x3Array5 = [8,3,7,6,2,1,9,5,4]
  init3x3Array6 = [5,9,4,3,6,2]
  init3x3Array7 = [7,1,8,2,4,5,6,3]
  init3x3Array8 = [4,8,5,6,2,1]
  init3x3Array9 = [5,6,2,3,1,4]

  initRowArray1 = [4,8,5,2,3,6]
  initRowArray2 = [6,2,4,3,8,1,5]
  initRowArray3 = [3,5,8,1,6,4,7]
  initRowArray4 = [4,6,8,3,7,5,9]
  initRowArray5 = [9,5,6,2,1,4,3]
  initRowArray6 = [1,3,9,5,4,6,2]
  initRowArray7 = [7,1,4,8,5,6,2]
  initRowArray8 = [8,2,4,5,6,3,1]
  initRowArray9 = [5,6,3,2,1,4]

  initColArray1 = [4,6,3,9,1,7,8,5]
  initColArray2 = [5,4,3,1,2,6]
  initColArray3 = [2,8,6,5,4,3]
  initColArray4 = [4,1,8,6,9,5,2]
  initColArray5 = [8,6,3,2,5,4,1]
  initColArray6 = [5,3,7,1,4,8,6]
  initColArray7 = [2,8,4,6,5,3]
  initColArray8 = [3,1,4,5,2,6]
  initColArray9 = [6,5,7,9,3,2,1,4]

  input3x3Array1 = init3x3Array1.concat(input3x3Array1);
  input3x3Array2 = init3x3Array2.concat(input3x3Array2);
  input3x3Array3 = init3x3Array3.concat(input3x3Array3);
  input3x3Array4 = init3x3Array4.concat(input3x3Array4);
  input3x3Array5 = init3x3Array5.concat(input3x3Array5);
  input3x3Array6 = init3x3Array6.concat(input3x3Array6);
  input3x3Array7 = init3x3Array7.concat(input3x3Array7);
  input3x3Array8 = init3x3Array8.concat(input3x3Array8);
  input3x3Array9 = init3x3Array9.concat(input3x3Array9);

  inputRowArray1 = initRowArray1.concat(inputRowArray1);
  inputRowArray2 = initRowArray2.concat(inputRowArray2);
  inputRowArray3 = initRowArray3.concat(inputRowArray3);
  inputRowArray4 = initRowArray4.concat(inputRowArray4);
  inputRowArray5 = initRowArray5.concat(inputRowArray5);
  inputRowArray6 = initRowArray6.concat(inputRowArray6);
  inputRowArray7 = initRowArray7.concat(inputRowArray7);
  inputRowArray8 = initRowArray8.concat(inputRowArray8);
  inputRowArray9 = initRowArray9.concat(inputRowArray9);

  inputColArray1 = initColArray1.concat(inputColArray1);
  inputColArray2 = initColArray2.concat(inputColArray2);
  inputColArray3 = initColArray3.concat(inputColArray3);
  inputColArray4 = initColArray4.concat(inputColArray4);
  inputColArray5 = initColArray5.concat(inputColArray5);
  inputColArray6 = initColArray6.concat(inputColArray6);
  inputColArray7 = initColArray7.concat(inputColArray7);
  inputColArray8 = initColArray8.concat(inputColArray8);
  inputColArray9 = initColArray9.concat(inputColArray9);

  inputSingleArray1 = init3x3Array1.concat(inputSingleArray1);
  inputSingleArray2 = init3x3Array2.concat(inputSingleArray2);
  inputSingleArray3 = init3x3Array3.concat(inputSingleArray3);
  inputSingleArray4 = init3x3Array4.concat(inputSingleArray4);
  inputSingleArray5 = init3x3Array5.concat(inputSingleArray5);
  inputSingleArray6 = init3x3Array6.concat(inputSingleArray6);
  inputSingleArray7 = init3x3Array7.concat(inputSingleArray7);
  inputSingleArray8 = init3x3Array8.concat(inputSingleArray8);
  inputSingleArray9 = init3x3Array9.concat(inputSingleArray9);
}

function loadPat5() {
  console.log("it did come in hereee loadPat5");

  $('#R1C1').html('<div>2</div>').addClass("grid");         //Row1 Col1
  $('#R1C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R1C3').html('<div>7</div>').addClass("grid");         //Row1 Col3
  $('#R1C4').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R1C5').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R1C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R1C7').html('<div></div>').addClass("grid");         //Row1 Col7
  $('#R1C8').html('<div></div>').addClass("grid");        //Row1 Col8
  $('#R1C9').html('<div>1</div>').addClass("grid");         //Row1 Col9

  $('#R2C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R2C2').html('<div>9</div>').addClass("grid");       //Row1 Col2
  $('#R2C3').html('<div>4</div>').addClass("grid");         //Row1 Col3
  $('#R2C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R2C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R2C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R2C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R2C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R2C9').html('<div></div>').addClass("grid");         //Row3 Col3

  $('#R3C1').html('<div>1</div>').addClass("grid");         //Row1 Col1
  $('#R3C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R3C3').html('<div>6</div>').addClass("grid");         //Row1 Col3
  $('#R3C4').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R3C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R3C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R3C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R3C8').html('<div>8</div>').addClass("grid");        //Row3 Col2
  $('#R3C9').html('<div>5</div>').addClass("grid");         //Row3 Col3

  $('#R4C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R4C2').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R4C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R4C4').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R4C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R4C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R4C7').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col7
  $('#R4C8').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col8
  $('#R4C9').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col9

  $('#R5C1').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R5C2').html('<div></div>').addClass("grid").css("background-color", "lightgrey");       //Row1 Col2
  $('#R5C3').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R5C4').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R5C5').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R5C6').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R5C7').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R5C8').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R5C9').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col3

  $('#R6C1').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R6C2').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R6C3').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R6C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R6C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R6C6').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R6C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R6C8').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R6C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");

  $('#R7C1').html('<div>3</div>').addClass("grid");         //Row1 Col1
  $('#R7C2').html('<div>4</div>').addClass("grid");        //Row1 Col2
  $('#R7C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R7C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R7C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R7C6').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R7C7').html('<div>2</div>').addClass("grid");         //Row1 Col7
  $('#R7C8').html('<div></div>').addClass("grid");        //Row1 Col8
  $('#R7C9').html('<div>8</div>').addClass("grid");         //Row1 Col9

  $('#R8C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R8C2').html('<div></div>').addClass("grid");       //Row1 Col2
  $('#R8C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R8C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R8C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R8C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R8C7').html('<div>5</div>').addClass("grid");         //Row3 Col1
  $('#R8C8').html('<div>6</div>').addClass("grid");        //Row3 Col2
  $('#R8C9').html('<div></div>').addClass("grid");         //Row3 Col3

  $('#R9C1').html('<div>5</div>').addClass("grid");         //Row1 Col1
  $('#R9C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R9C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R9C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R9C5').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R9C6').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R9C7').html('<div>3</div>').addClass("grid");         //Row3 Col1
  $('#R9C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R9C9').html('<div>9</div>').addClass("grid");

  init3x3Array1 = [];
  init3x3Array2 = [];
  init3x3Array3 = [];
  init3x3Array4 = [];
  init3x3Array5 = [];
  init3x3Array6 = [];
  init3x3Array7 = [];
  init3x3Array8 = [];
  init3x3Array9 = [];

  initRowArray1 = [];
  initRowArray2 = [];
  initRowArray3 = [];
  initRowArray4 = [];
  initRowArray5 = [];
  initRowArray6 = [];
  initRowArray7 = [];
  initRowArray8 = [];
  initRowArray9 = [];

  initColArray1 = [];
  initColArray2 = [];
  initColArray3 = [];
  initColArray4 = [];
  initColArray5 = [];
  initColArray6 = [];
  initColArray7 = [];
  initColArray8 = [];
  initColArray9 = [];

  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];
  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];
  init3x3Array1 = [];
  initRowArray1 = [];
  initColArray1 = [];

  init3x3Array1 = [2,7,9,4,1,6]
  init3x3Array2 = [6,9,2]
  init3x3Array3 = [1,8,5]
  init3x3Array4 = [1,6,5,9,8,3]
  init3x3Array5 = [8,1,2,4,6]
  init3x3Array6 = [6,5,7,8,3,4]
  init3x3Array7 = [3,4,5]
  init3x3Array8 = [1,7,2]
  init3x3Array9 = [2,8,5,6,3,9]

  initRowArray1 = [2,7,6,9,1]
  initRowArray2 = [9,4]
  initRowArray3 = [1,6,2,8,5]
  initRowArray4 = [1,8,6,5,7]
  initRowArray5 = [6,5,1,2,4,8,3]
  initRowArray6 = [9,8,3,6,4]
  initRowArray7 = [3,4,1,2,8]
  initRowArray8 = [5,6]
  initRowArray9 = [5,7,2,3,9]

  initColArray1 = [2,1,6,9,3,5]
  initColArray2 = [9,1,8,4]
  initColArray3 = [7,4,6,5,3]
  initColArray4 = [6,2,8,1]
  initColArray5 = [9,2,7]
  initColArray6 = [4,6,1,2]
  initColArray7 = [6,8,2,5,3]
  initColArray8 = [8,5,4,6]
  initColArray9 = [1,5,7,3,8,9]

  input3x3Array1 = init3x3Array1.concat(input3x3Array1);
  input3x3Array2 = init3x3Array2.concat(input3x3Array2);
  input3x3Array3 = init3x3Array3.concat(input3x3Array3);
  input3x3Array4 = init3x3Array4.concat(input3x3Array4);
  input3x3Array5 = init3x3Array5.concat(input3x3Array5);
  input3x3Array6 = init3x3Array6.concat(input3x3Array6);
  input3x3Array7 = init3x3Array7.concat(input3x3Array7);
  input3x3Array8 = init3x3Array8.concat(input3x3Array8);
  input3x3Array9 = init3x3Array9.concat(input3x3Array9);

  inputRowArray1 = initRowArray1.concat(inputRowArray1);
  inputRowArray2 = initRowArray2.concat(inputRowArray2);
  inputRowArray3 = initRowArray3.concat(inputRowArray3);
  inputRowArray4 = initRowArray4.concat(inputRowArray4);
  inputRowArray5 = initRowArray5.concat(inputRowArray5);
  inputRowArray6 = initRowArray6.concat(inputRowArray6);
  inputRowArray7 = initRowArray7.concat(inputRowArray7);
  inputRowArray8 = initRowArray8.concat(inputRowArray8);
  inputRowArray9 = initRowArray9.concat(inputRowArray9);

  inputColArray1 = initColArray1.concat(inputColArray1);
  inputColArray2 = initColArray2.concat(inputColArray2);
  inputColArray3 = initColArray3.concat(inputColArray3);
  inputColArray4 = initColArray4.concat(inputColArray4);
  inputColArray5 = initColArray5.concat(inputColArray5);
  inputColArray6 = initColArray6.concat(inputColArray6);
  inputColArray7 = initColArray7.concat(inputColArray7);
  inputColArray8 = initColArray8.concat(inputColArray8);
  inputColArray9 = initColArray9.concat(inputColArray9);

  inputSingleArray1 = init3x3Array1.concat(inputSingleArray1);
  inputSingleArray2 = init3x3Array2.concat(inputSingleArray2);
  inputSingleArray3 = init3x3Array3.concat(inputSingleArray3);
  inputSingleArray4 = init3x3Array4.concat(inputSingleArray4);
  inputSingleArray5 = init3x3Array5.concat(inputSingleArray5);
  inputSingleArray6 = init3x3Array6.concat(inputSingleArray6);
  inputSingleArray7 = init3x3Array7.concat(inputSingleArray7);
  inputSingleArray8 = init3x3Array8.concat(inputSingleArray8);
  inputSingleArray9 = init3x3Array9.concat(inputSingleArray9);
}
