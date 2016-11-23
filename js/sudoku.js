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

var init3x3Array = [[],[],[],[],[],[],[],[],[]];
var initRowArray = [[],[],[],[],[],[],[],[],[]];
var initColArray = [[],[],[],[],[],[],[],[],[]];

var input3x3Array = [[],[],[],[],[],[],[],[],[]];
var inputRowArray = [[],[],[],[],[],[],[],[],[]];
var inputColArray = [[],[],[],[],[],[],[],[],[]];
var inputSingleArray = [[],[],[],[],[],[],[],[],[]];

var selected3x3Array = [];
var selectedColArray = [];
var selectedRowArray = [];

var selectedRowBefore = [false,false,false,false,false,false,false,false,false];
var selectedColBefore = [false,false,false,false,false,false,false,false,false];
var selected3x3Before = [false,false,false,false,false,false,false,false,false];

var checkRowArrFail = false;
var checkColArrFail = false;
var check3x3ArrFail = false;

var selectedRow = [false,false,false,false,false,false,false,false,false];
var selectedCol = [false,false,false,false,false,false,false,false,false];
var selected3x3 = [false,false,false,false,false,false,false,false,false];

var targetCell;
var targetSectId;
var targetCellId;
var previousCellId;
var input_value;

var sect_num;                  //Actual Section Number
var col_num;                   //Actual Column Number
var row_num;                   //Actual Row Number

var sectno = sect_num - 1;     //Section Array Index No
var colno  = col_num  - 1;     //Column Array Index No
var rowno  = row_num  - 1;     //Row Array Index No

$(document).ready(function(){
    $('.grid').click(function(el) {

        targetCell = el.target;
        targetCellId = el.target.id;
        targetSectId = $(el.target).attr('class');

        if (targetCellId.charAt(0) == "R") {
           row_num = parseInt(targetCellId.charAt(1));
           rowno = row_num - 1;  //for array looping use
        };

        if (targetCellId.charAt(2) == "C") {
           col_num = parseInt(targetCellId.charAt(3));
           colno = col_num - 1;  //for array looping use
        };

        if (targetSectId.charAt(11) == "S") {
           sect_num = parseInt(targetSectId.charAt(12));
           sectno = sect_num - 1;  //for array looping use
        };
        console.log("row_num", row_num);
        console.log("col_num", col_num);
        console.log("sect_num", sect_num);

        $("#" + targetCell.id).html("<input></input>", 'color', 'red');  //.classList.add("inputNum");
        $("#" + targetCell.id + " input").focus();

        $("#" + targetCell.id + " input").keypress(function(event) {

           if (event.keyCode === 13) {
              input_value = parseInt($(this).val());
              console.log("input value = ", input_value);

              event.preventDefault();
              event.stopPropagation();

              selectedRowChk(row_num, input_value);
              selectedColChk(col_num, input_value);
              selected3x3Chk(sect_num, input_value);

              // Checking Rows
              function selectedRowChk(row_num, input_value) {
                  var rowno = row_num - 1;
                  if (!selectedRowBefore[rowno]) {
                     selectedRowArray.push(rowno);
                     selectedRowBefore[rowno] = true;
                     selectedRow[rowno] = true;
                  };
                  inputRowArray[rowno].push(input_value);
              };

              // Checking Columns
              function selectedColChk(col_num, input_value) {
                  var colno = col_num - 1;
                  if (!selectedColBefore[colno]) {
                     selectedColArray.push(colno);
                     selectedColBefore[colno] = true;
                     selectedCol[colno] = true;
                  };
                  inputColArray[colno].push(input_value);
              };

              // Checking Sectora
              function selected3x3Chk(sect_num, input_value) {
                  var sectno = sect_num - 1;
                  if (!selected3x3Before[sectno]) {
                     selected3x3Array.push(sectno);    //
                     selected3x3Before[sectno] = true;
                     selected3x3[sectno] = true;
                  };
                  input3x3Array[sectno].push(input_value);
              };
           };
        });
    });
}); //document ready

$('#SubmitBtn').click(submitGame);

function submitGame() {
  console.log('Submit Button pressed')

  var s = sectno;
  for (s=0; s<9; s++) {
    if ((selected3x3[s]) && (!same3x3ArrNumChk[s])) {
       console.log('(selected3x3[',s,']) && (!same3x3ArrNumChk[',s,']) is true - It did comeee heree');
       var input3x3 = input3x3Array[s];
       console.log('input3x3 for sect_num ', (s+1), ' check = ', input3x3);
       same3x3ArrDuplicate(input3x3);  //Checking Sect 1 Array
       check3x3ArrFail = (check3x3ArrFail || same3x3ArrNumChk[s]);
       console.log('check3x3ArrFail after Actual Sect ', (s+1), ' check = ', check3x3ArrFail);
    };
  };

  var r = rowno;
  for (r=0; r<9; r++) {
    if ((selectedRow[r]) && (!sameRowArrNumChk[r])) {
       console.log('(selectedRow[',r,']) && (!sameRowArrNumChk[',r,']) is true - It did comeee heree');
       var inputRow = inputRowArray[r];
       console.log('inputRow for row_num ', (r+1), ' check = ', inputRow);
       sameRowArrDuplicate(inputRow);  //Checking Row Array
       checkRowArrFail = (checkRowArrFail || sameRowArrNumChk[r]);
       console.log('checkRowArrFail after Actual Row ', (r+1), ' check = ', checkRowArrFail);
    };
  };

  var c = colno;
  for (c=0; c<9; c++) {
    if ((selectedCol[c]) && (!sameColArrNumChk[c])) {
       console.log('(selectedCol[',c,']) && (!sameColArrNumChk[',c,']) is true - It did comeee heree');
       var inputCol = inputColArray[c];
       console.log('inputCow for col_num ', (c+1), ' check = ', inputCol);
       sameColArrDuplicate(inputCol);  //Checking Row Array
       checkColArrFail = (checkColArrFail || sameColArrNumChk[c]);
       console.log('checkColArrFail after Actual Col ', (c+1), ' check = ', checkRowArrFail);
    };
  };

  if (check3x3ArrFail) {
      console.log("Game Ended, There Are Duplicate Numbers Within The 3x3 Grid Array");
      $("#resultsBox").text('You Lose!!! There Are Duplicates Found').css("color", "red");
      return;
  } else if (checkRowArrFail) {
      console.log("Game Ended, There Are Duplicate Numbers Within The Row Array");
      $("#resultsBox").text('You Lose!!! There Are Duplicates Found').css("color", "red");
      return;
  } else if (checkColArrFail) {
      console.log("Game Ended, There Are Duplicate Numbers Within The Col Grid Array");
      $("#resultsBox").text('You Lose!!! There Are Duplicates Found').css("color", "red");
      return;
  } else {
      console.log("You Won!!! Congratulations, Wanna Play Another Game?");
      $("#resultsBox").text('You Won!!! Congratulations, Wanna Play Another Game?');
  };
};

function clearBoard () {
  window.location.reload();
};

$('#ClearBtn').click(clearBoard);

$('#patterndemo').click(loadPatDemo);
$('#pattern1').click(loadPat1);
$('#pattern2').click(loadPat2);
$('#pattern3').click(loadPat3);
$('#pattern4').click(loadPat4);
$('#pattern5').click(loadPat5);
$('#pattern6').click(loadPat6);
$('#pattern7').click(loadPat7);
$('#pattern8').click(loadPat8);
$('#pattern9').click(loadPat9);
$('#pattern10').click(loadPat10);

var same3x3ArrNumChk=[false,false,false,false,false,false,false,false,false];
var sameRowArrNumChk=[false,false,false,false,false,false,false,false,false];
var sameColArrNumChk=[false,false,false,false,false,false,false,false,false];

var input3x3Arr=input3x3Array[sectno];

function same3x3ArrDuplicate(input3x3Arr) {
	var sectno = sect_num - 1;
	var same3x3ArrChk=same3x3ArrNumChk[sectno];
  for (k=0; k<9; k++) {
    if (k==sectno) {
    	for (i=0; i<input3x3Arr.length; i++) {
    		for (j=i+1; j<input3x3Arr.length; j++) {
    		 if (input3x3Arr[i]==input3x3Arr[j]) {
             same3x3ArrNumChk[k] = true;
             return same3x3ArrNumChk[k] = true;
          } else {
             same3x3ArrNumChk[k] = false;
          };
    	  };
      } return same3x3ArrNumChk[k] = false;
    };
  };
};    // check3x3ArrFail same3x3Arr1NumChk

var inputRowArr=inputRowArray[rowno];

function sameRowArrDuplicate(inputRowArr) {
	var rowno = row_num - 1;
	var sameRowArrChk=sameRowArrNumChk[rowno];
  for (k=0; k<9; k++) {
    if (k==rowno) {
    	for (i=0; i<inputRowArr.length; i++) {
    		for (j=i+1; j<inputRowArr.length; j++) {
          if (inputRowArr[i]==inputRowArr[j]) {
             sameRowArrNumChk[k] = true;
             return sameRowArrNumChk[k] = true;
          } else {
             sameRowArrNumChk[k] = false;
          };
    	  };
      } return sameRowArrNumChk[k] = false;
    };
  };
};    // checkRowArrFail sameRowArr1NumChk

var inputColArr=inputColArray[colno];

function sameColArrDuplicate(inputColArr) {
	var colno = col_num - 1;
	var sameColArrChk=sameColArrNumChk[colno];
  for (k=0; k<9; k++) {
    if (k==colno) {
    	for (i=0; i<inputColArr.length; i++) {
    		for (j=i+1; j<inputColArr.length; j++) {
          if (inputColArr[i]==inputColArr[j]) {
             sameColArrNumChk[k] = true;
             return sameColArrNumChk[k] = true;
          } else {
             sameColArrNumChk[k] = false;
          };
    	  };
      } return sameColArrNumChk[k] = false;
    };
  };
};    // checkColArrFail sameColArr1NumChk

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

  init3x3Array = [[],[],[],[],[],[],[],[],[]];
  initRowArray = [[],[],[],[],[],[],[],[],[]];
  initColArray = [[],[],[],[],[],[],[],[],[]];

  init3x3Array = [[5,4,2,8,3,6],
                  [2,1,6,5,7,9,8,4],
                  [9,8,3,4,1,2,7,5],
                  [1,3,7,9,2,6,8,5],
                  [6,9,7,8,3,2],
                  [8,5,2,3,6,7,9,4],
                  [8,2,6,5,9,4,1,3],
                  [1,9,3,6,2,8,7,5],
                  [4,7,1,8,6,2]];

  initRowArray = [[5,4,2,1,6,9,8,3],
                  [2,8,5,7,4,1],
                  [3,6,9,8,4,2,7,5],
                  [1,3,7,6,9,8,5,2],
                  [9,2,7,8,3,6],
                  [6,8,5,3,2,7,9,4],
                  [8,2,6,1,9,3,4,7],
                  [5,9,6,2,1,8],
                  [4,1,3,8,7,5,6,2]];

  initColArray = [[2,3,1,9,6,8,5,4],
                  [5,6,3,8,2,1],
                  [4,8,7,2,5,6,9,3],
                  [2,5,9,7,3,1,6,8],
                  [1,8,6,2,9,7],
                  [6,7,4,9,8,3,2,5],
                  [9,4,2,8,3,7,1,6],
                  [8,7,5,9,4,2],
                  [3,1,5,2,6,4,7,8]];

  for (i=0; i<9; i++) {
    input3x3Array[i] = init3x3Array[i].concat(input3x3Array[i]);
    inputRowArray[i] = initRowArray[i].concat(inputRowArray[i]);
    inputColArray[i] = initColArray[i].concat(inputColArray[i]);
  };
};

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

  init3x3Array = [[],[],[],[],[],[],[],[],[]];
  initRowArray = [[],[],[],[],[],[],[],[],[]];
  initColArray = [[],[],[],[],[],[],[],[],[]];

  init3x3Array = [[7,5,4,2,9,8,3],
                  [6,3,7,9,8,4],
                  [8,3,4,6,1,2,5],
                  [3,7,4,2,6,8],
                  [4,6,9,7,5,8,3,2,1],
                  [5,2,3,1,7,9],
                  [8,6,5,7,9,4,1],
                  [1,9,3,6,4,8],
                  [7,1,3,8,6,2,9]];

  initRowArray = [[7,5,4,6,8,3],
                  [2,9,8,3,7,4,6,1],
                  [3,9,8,4,2,5],
                  [3,7,4,6,9,5,2],
                  [4,2,7,5,8,3,1],
                  [6,8,3,2,1,7,9],
                  [8,6,1,9,3,7],
                  [5,7,9,6,4,1,3,8],
                  [4,1,8,6,2,9]];

  initColArray = [[7,2,3,6,8,5,4],
                  [5,9,3,4,8,7,1],
                  [4,8,7,2,6,9],
                  [9,4,7,3,1,6,8],
                  [3,8,6,5,2,9,4],
                  [6,7,4,9,8,1,3],
                  [4,2,3,7,1,6],
                  [8,6,5,1,9,3,2],
                  [3,1,5,2,7,8,9]];

  for (i=0; i<9; i++) {
    input3x3Array[i] = init3x3Array[i].concat(input3x3Array[i]);
    inputRowArray[i] = initRowArray[i].concat(inputRowArray[i]);
    inputColArray[i] = initColArray[i].concat(inputColArray[i]);
  };
};

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

  init3x3Array = [[],[],[],[],[],[],[],[],[]];
  initRowArray = [[],[],[],[],[],[],[],[],[]];
  initColArray = [[],[],[],[],[],[],[],[],[]];

  init3x3Array = [[1,3,6,8,5,7],
                  [4,7,5,9,1,3,2,6],
                  [5,2,6,7,8,1],
                  [4,6,7,9,5,3,2,1],
                  [1,2,6,4],
                  [2,9,5,1,8,3,6,7],
                  [6,1,7,2,3,9],
                  [9,1,8,6,3,2,7,5],
                  [7,3,2,4,8,6]];

  initRowArray = [[1,3,4,7,5,2,6],
                  [6,5,9,1,7,8],
                  [8,5,7,3,2,6,1],
                  [4,6,1,2,9,5],
                  [7,9,5,2,6,4,1,8,3],
                  [3,2,1,9,6,7],
                  [6,9,1,8,7,3,2],
                  [1,7,6,3,2,4],
                  [2,3,9,7,5,8,6]];

  initColArray = [[6,8,4,7,3,1,2],
                  [1,5,9,2,6,7,3],
                  [3,7,6,5,1,9],
                  [4,5,3,1,2,9,6,7],
                  [9,2,6,1,3],
                  [7,1,6,4,9,8,2,5],
                  [5,2,1,6,7,8],
                  [2,7,1,9,8,3,6],
                  [6,8,5,3,7,2,4]];

  for (i=0; i<9; i++) {
    input3x3Array[i] = init3x3Array[i].concat(input3x3Array[i]);
    inputRowArray[i] = initRowArray[i].concat(inputRowArray[i]);
    inputColArray[i] = initColArray[i].concat(inputColArray[i]);
  };
};

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

  init3x3Array = [[],[],[],[],[],[],[],[],[]];
  initRowArray = [[],[],[],[],[],[],[],[],[]];
  initColArray = [[],[],[],[],[],[],[],[],[]];

  init3x3Array = [[1,6,3,4,7,8],
                  [7,8,5,4,1,2],
                  [4,3,7,8,6,1,9,5],
                  [7,9,6,5,4,1],
                  [4,1,5,8,7,9,6,2,3],
                  [3,6,1,4,7,9],
                  [5,3,7,2,1,6,8,4],
                  [2,3,8,4,1,7],
                  [8,4,1,7,2,3]];

  initRowArray = [[1,6,7,8,4,3],
                  [3,5,4,1,7,8,6],
                  [4,7,8,2,1,9,5],
                  [7,9,4,1,5,3,6],
                  [6,5,8,7,9,1,4],
                  [4,1,6,2,3,7,9],
                  [5,3,7,2,8,4,1],
                  [2,1,6,3,8,4,7],
                  [8,4,1,7,2,3]];

  initColArray = [[1,3,4,7,6,5,2],
                  [6,7,9,5,4,3,1,8],
                  [8,1,7,6,4],
                  [7,5,2,4,8,6,3,1],
                  [4,1,7,2,8],
                  [8,1,5,9,3,2,4,7],
                  [4,7,1,3,8],
                  [3,8,9,6,1,7,4,2],
                  [6,5,4,9,1,7,3]];

  for (i=0; i<9; i++) {
    input3x3Array[i] = init3x3Array[i].concat(input3x3Array[i]);
    inputRowArray[i] = initRowArray[i].concat(inputRowArray[i]);
    inputColArray[i] = initColArray[i].concat(inputColArray[i]);
  };
};

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

  init3x3Array = [[],[],[],[],[],[],[],[],[]];
  initRowArray = [[],[],[],[],[],[],[],[],[]];
  initColArray = [[],[],[],[],[],[],[],[],[]];

  init3x3Array = [[4,6,2,3,5,8],
                  [8,5,4,3,1,6],
                  [2,3,6,8,1,5,4,7],
                  [4,6,9,5,1,3],
                  [8,3,7,6,2,1,9,5,4],
                  [5,9,4,3,6,2],
                  [7,1,8,2,4,5,6,3],
                  [4,8,5,6,2,1],
                  [5,6,2,3,1,4]];

  initRowArray = [[4,8,5,2,3,6],
                  [6,2,4,3,8,1,5],
                  [3,5,8,1,6,4,7],
                  [4,6,8,3,7,5,9],
                  [9,5,6,2,1,4,3],
                  [1,3,9,5,4,6,2],
                  [7,1,4,8,5,6,2],
                  [8,2,4,5,6,3,1],
                  [5,6,3,2,1,4]];

  initColArray = [[4,6,3,9,1,7,8,5],
                  [5,4,3,1,2,6],
                  [2,8,6,5,4,3],
                  [4,1,8,6,9,5,2],
                  [8,6,3,2,5,4,1],
                  [5,3,7,1,4,8,6],
                  [2,8,4,6,5,3],
                  [3,1,4,5,2,6],
                  [6,5,7,9,3,2,1,4]];

  for (i=0; i<9; i++) {
    input3x3Array[i] = init3x3Array[i].concat(input3x3Array[i]);
    inputRowArray[i] = initRowArray[i].concat(inputRowArray[i]);
    inputColArray[i] = initColArray[i].concat(inputColArray[i]);
  };
};

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

  init3x3Array = [[],[],[],[],[],[],[],[],[]];
  initRowArray = [[],[],[],[],[],[],[],[],[]];
  initColArray = [[],[],[],[],[],[],[],[],[]];

  init3x3Array = [[2,7,9,4,1,6],
                  [6,9,2],
                  [1,8,5],
                  [1,6,5,9,8,3],
                  [8,1,2,4,6],
                  [6,5,7,8,3,4],
                  [3,4,5],
                  [1,7,2],
                  [2,8,5,6,3,9]];

  initRowArray = [[2,7,6,9,1],
                  [9,4],
                  [1,6,2,8,5],
                  [1,8,6,5,7],
                  [6,5,1,2,4,8,3],
                  [9,8,3,6,4],
                  [3,4,1,2,8],
                  [5,6],
                  [5,7,2,3,9]];

  initColArray = [[2,1,6,9,3,5],
                  [9,1,8,4],
                  [7,4,6,5,3],
                  [6,2,8,1],
                  [9,2,7],
                  [4,6,1,2],
                  [6,8,2,5,3],
                  [8,5,4,6],
                  [1,5,7,3,8,9]];

  for (i=0; i<9; i++) {
    input3x3Array[i] = init3x3Array[i].concat(input3x3Array[i]);
    inputRowArray[i] = initRowArray[i].concat(inputRowArray[i]);
    inputColArray[i] = initColArray[i].concat(inputColArray[i]);
  };
};

function loadPat6() {
  console.log("it did come in hereee loadPat6");

  $('#R1C1').html('<div>7</div>').addClass("grid");         //Row1 Col1
  $('#R1C2').html('<div>2</div>').addClass("grid");        //Row1 Col2
  $('#R1C3').html('<div>5</div>').addClass("grid");         //Row1 Col3
  $('#R1C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R1C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R1C6').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R1C7').html('<div>4</div>').addClass("grid");         //Row1 Col7
  $('#R1C8').html('<div>6</div>').addClass("grid");        //Row1 Col8
  $('#R1C9').html('<div>3</div>').addClass("grid");         //Row1 Col9

  $('#R2C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R2C2').html('<div></div>').addClass("grid");       //Row1 Col2
  $('#R2C3').html('<div>4</div>').addClass("grid");         //Row1 Col3
  $('#R2C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R2C5').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R2C6').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R2C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R2C8').html('<div>5</div>').addClass("grid");        //Row3 Col2
  $('#R2C9').html('<div>9</div>').addClass("grid");         //Row3 Col3

  $('#R3C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R3C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R3C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R3C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R3C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R3C6').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R3C7').html('<div>1</div>').addClass("grid");         //Row3 Col1
  $('#R3C8').html('<div>8</div>').addClass("grid");        //Row3 Col2
  $('#R3C9').html('<div></div>').addClass("grid");         //Row3 Col3

  $('#R4C1').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R4C2').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R4C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R4C4').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R4C5').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R4C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R4C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col7
  $('#R4C8').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col8
  $('#R4C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col9

  $('#R5C1').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R5C2').html('<div></div>').addClass("grid").css("background-color", "lightgrey");       //Row1 Col2
  $('#R5C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R5C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R5C5').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R5C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R5C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R5C8').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R5C9').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col3

  $('#R6C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R6C2').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R6C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R6C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R6C5').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R6C6').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R6C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R6C8').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R6C9').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");

  $('#R7C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R7C2').html('<div>6</div>').addClass("grid");        //Row1 Col2
  $('#R7C3').html('<div>7</div>').addClass("grid");         //Row1 Col3
  $('#R7C4').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R7C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R7C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R7C7').html('<div></div>').addClass("grid");         //Row1 Col7
  $('#R7C8').html('<div></div>').addClass("grid");        //Row1 Col8
  $('#R7C9').html('<div></div>').addClass("grid");         //Row1 Col9

  $('#R8C1').html('<div>9</div>').addClass("grid");         //Row1 Col1
  $('#R8C2').html('<div>5</div>').addClass("grid");       //Row1 Col2
  $('#R8C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R8C4').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R8C5').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R8C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R8C7').html('<div>3</div>').addClass("grid");         //Row3 Col1
  $('#R8C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R8C9').html('<div></div>').addClass("grid");         //Row3 Col3

  $('#R9C1').html('<div>3</div>').addClass("grid");         //Row1 Col1
  $('#R9C2').html('<div>4</div>').addClass("grid");        //Row1 Col2
  $('#R9C3').html('<div>8</div>').addClass("grid");         //Row1 Col3
  $('#R9C4').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R9C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R9C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R9C7').html('<div>6</div>').addClass("grid");         //Row3 Col1
  $('#R9C8').html('<div>2</div>').addClass("grid");        //Row3 Col2
  $('#R9C9').html('<div>1</div>').addClass("grid");

  init3x3Array = [[],[],[],[],[],[],[],[],[]];
  initRowArray = [[],[],[],[],[],[],[],[],[]];
  initColArray = [[],[],[],[],[],[],[],[],[]];

  init3x3Array = [[7,2,5,4],
                  [9,2,6,7],
                  [4,6,3,5,9,1,8],
                  [1,5,8],
                  [2,5,3,9,1],
                  [4,8,6],
                  [6,7,9,5,3,4,8],
                  [4,8,6,9],
                  [3,6,2,1]];

  initRowArray = [[7,2,5,9,4,6,3],
                  [4,2,6,5,9],
                  [7,1,8],
                  [1,2,5,4],
                  [5,3,8],
                  [8,9,1,6],
                  [6,7,4],
                  [9,5,8,6,3],
                  [3,4,8,9,6,2,1]];

  initColArray = [[7,1,5,9,3],
                  [2,8,6,5,4],
                  [5,4,7,8],
                  [2,4,8,9],
                  [2,5,3,9,6],
                  [9,6,7,1],
                  [4,1,3,6],
                  [6,5,8,4,2],
                  [3,9,8,6,1]];

  for (i=0; i<9; i++) {
    input3x3Array[i] = init3x3Array[i].concat(input3x3Array[i]);
    inputRowArray[i] = initRowArray[i].concat(inputRowArray[i]);
    inputColArray[i] = initColArray[i].concat(inputColArray[i]);
  };
};

function loadPat7() {
  console.log("it did come in hereee loadPat7");

  $('#R1C1').html('<div>8</div>').addClass("grid");         //Row1 Col1
  $('#R1C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R1C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R1C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R1C5').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R1C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R1C7').html('<div>6</div>').addClass("grid");         //Row1 Col7
  $('#R1C8').html('<div></div>').addClass("grid");        //Row1 Col8
  $('#R1C9').html('<div></div>').addClass("grid");         //Row1 Col9

  $('#R2C1').html('<div>9</div>').addClass("grid");         //Row1 Col1
  $('#R2C2').html('<div>3</div>').addClass("grid");       //Row1 Col2
  $('#R2C3').html('<div>5</div>').addClass("grid");         //Row1 Col3
  $('#R2C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R2C5').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R2C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R2C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R2C8').html('<div>8</div>').addClass("grid");        //Row3 Col2
  $('#R2C9').html('<div></div>').addClass("grid");         //Row3 Col3

  $('#R3C1').html('<div>7</div>').addClass("grid");         //Row1 Col1
  $('#R3C2').html('<div>6</div>').addClass("grid");        //Row1 Col2
  $('#R3C3').html('<div>4</div>').addClass("grid");         //Row1 Col3
  $('#R3C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R3C5').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R3C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R3C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R3C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R3C9').html('<div>3</div>').addClass("grid");         //Row3 Col3

  $('#R4C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R4C2').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R4C3').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R4C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R4C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R4C6').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R4C7').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col7
  $('#R4C8').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col8
  $('#R4C9').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col9

  $('#R5C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R5C2').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");       //Row1 Col2
  $('#R5C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R5C4').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R5C5').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R5C6').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R5C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R5C8').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R5C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col3

  $('#R6C1').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R6C2').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R6C3').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R6C4').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R6C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R6C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R6C7').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R6C8').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R6C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");

  $('#R7C1').html('<div>6</div>').addClass("grid");         //Row1 Col1
  $('#R7C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R7C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R7C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R7C5').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R7C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R7C7').html('<div>7</div>').addClass("grid");         //Row1 Col7
  $('#R7C8').html('<div>9</div>').addClass("grid");        //Row1 Col8
  $('#R7C9').html('<div>8</div>').addClass("grid");         //Row1 Col9

  $('#R8C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R8C2').html('<div>7</div>').addClass("grid");       //Row1 Col2
  $('#R8C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R8C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R8C5').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R8C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R8C7').html('<div>1</div>').addClass("grid");         //Row3 Col1
  $('#R8C8').html('<div>4</div>').addClass("grid");        //Row3 Col2
  $('#R8C9').html('<div>5</div>').addClass("grid");         //Row3 Col3

  $('#R9C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R9C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R9C3').html('<div>8</div>').addClass("grid");         //Row1 Col3
  $('#R9C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R9C5').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R9C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R9C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R9C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R9C9').html('<div>2</div>').addClass("grid");

  init3x3Array = [[],[],[],[],[],[],[],[],[]];
  initRowArray = [[],[],[],[],[],[],[],[],[]];
  initColArray = [[],[],[],[],[],[],[],[],[]];

  init3x3Array = [[8,9,3,5,7,6,4],
                  [5,2,8],
                  [6,8,3],
                  [8,7,1,4,2],
                  [1,7,9,5,3],
                  [9,6,2,5,1],
                  [6,7,8],
                  [1,3,7],
                  [7,9,8,1,4,5,2]];

  initRowArray = [[8,5,6],
                  [9,3,5,2,8],
                  [7,6,4,8,3],
                  [8,7,1,9,6],
                  [1,7,9,5,2],
                  [4,2,3,5,1],
                  [6,1,7,9,8],
                  [7,3,1,4,5],
                  [8,7,2]];

  initColArray = [[8,9,7,4,6],
                  [3,6,8,1,7],
                  [5,4,7,2,8],
                  [7,3],
                  [5,2,8,9,1,3,7],
                  [1,5],
                  [6,9,5,7,1],
                  [8,2,1,9,4],
                  [3,6,8,5,2]];

  for (i=0; i<9; i++) {
    input3x3Array[i] = init3x3Array[i].concat(input3x3Array[i]);
    inputRowArray[i] = initRowArray[i].concat(inputRowArray[i]);
    inputColArray[i] = initColArray[i].concat(inputColArray[i]);
  };
};

function loadPat8() {
  console.log("it did come in hereee loadPat8");

  $('#R1C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R1C2').html('<div>9</div>').addClass("grid");        //Row1 Col2
  $('#R1C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R1C4').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R1C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R1C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R1C7').html('<div>3</div>').addClass("grid");         //Row1 Col7
  $('#R1C8').html('<div>5</div>').addClass("grid");        //Row1 Col8
  $('#R1C9').html('<div></div>').addClass("grid");         //Row1 Col9

  $('#R2C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R2C2').html('<div>2</div>').addClass("grid");       //Row1 Col2
  $('#R2C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R2C4').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R2C5').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R2C6').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R2C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R2C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R2C9').html('<div>7</div>').addClass("grid");         //Row3 Col3

  $('#R3C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R3C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R3C3').html('<div>5</div>').addClass("grid");         //Row1 Col3
  $('#R3C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R3C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R3C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R3C7').html('<div>1</div>').addClass("grid");         //Row3 Col1
  $('#R3C8').html('<div>4</div>').addClass("grid");        //Row3 Col2
  $('#R3C9').html('<div>8</div>').addClass("grid");         //Row3 Col3

  $('#R4C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R4C2').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R4C3').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R4C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R4C5').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R4C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R4C7').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col7
  $('#R4C8').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col8
  $('#R4C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col9

  $('#R5C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R5C2').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");       //Row1 Col2
  $('#R5C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R5C4').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R5C5').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R5C6').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R5C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R5C8').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R5C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col3

  $('#R6C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R6C2').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R6C3').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R6C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R6C5').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R6C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R6C7').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R6C8').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R6C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");

  $('#R7C1').html('<div>5</div>').addClass("grid");         //Row1 Col1
  $('#R7C2').html('<div>4</div>').addClass("grid");        //Row1 Col2
  $('#R7C3').html('<div>6</div>').addClass("grid");         //Row1 Col3
  $('#R7C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R7C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R7C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R7C7').html('<div>2</div>').addClass("grid");         //Row1 Col7
  $('#R7C8').html('<div></div>').addClass("grid");        //Row1 Col8
  $('#R7C9').html('<div></div>').addClass("grid");         //Row1 Col9

  $('#R8C1').html('<div>2</div>').addClass("grid");         //Row1 Col1
  $('#R8C2').html('<div></div>').addClass("grid");       //Row1 Col2
  $('#R8C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R8C4').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R8C5').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R8C6').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R8C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R8C8').html('<div>7</div>').addClass("grid");        //Row3 Col2
  $('#R8C9').html('<div></div>').addClass("grid");         //Row3 Col3

  $('#R9C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R9C2').html('<div>7</div>').addClass("grid");        //Row1 Col2
  $('#R9C3').html('<div>1</div>').addClass("grid");         //Row1 Col3
  $('#R9C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R9C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R9C6').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R9C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R9C8').html('<div>6</div>').addClass("grid");        //Row3 Col2
  $('#R9C9').html('<div></div>').addClass("grid");

  init3x3Array = [[],[],[],[],[],[],[],[],[]];
  initRowArray = [[],[],[],[],[],[],[],[],[]];
  initColArray = [[],[],[],[],[],[],[],[],[]];

  init3x3Array = [[9,2,5],
                  [6,8,5,1],
                  [3,5,7,1,4,8],
                  [3,7,5,1,4],
                  [1,7,8,3,6],
                  [5,8,1,7,2],
                  [5,4,6,2,7,1],
                  [5,3,6,4],
                  [2,7,6]];

  initRowArray = [[9,6,3,5],
                  [2,8,5,1,7],
                  [5,1,4,8],
                  [3,7,1,5.8],
                  [5,7,8,3,1],
                  [1,4,6,7,2],
                  [5,4,6,2],
                  [2,5,3,6,7],
                  [7,1,4,6]];

  initColArray = [[5,2],
                  [9,2,3,5,1,4,7],
                  [5,7,4,6,1],
                  [6,8,7,5],
                  [5,1,8,6,3],
                  [1,3,6,4],
                  [3,1,5,7,2],
                  [5,4,8,1,2,7,6],
                  [7,8]];

  for (i=0; i<9; i++) {
    input3x3Array[i] = init3x3Array[i].concat(input3x3Array[i]);
    inputRowArray[i] = initRowArray[i].concat(inputRowArray[i]);
    inputColArray[i] = initColArray[i].concat(inputColArray[i]);
  };
};

function loadPat9() {
  console.log("it did come in hereee loadPat9");

  $('#R1C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R1C2').html('<div>9</div>').addClass("grid");        //Row1 Col2
  $('#R1C3').html('<div>7</div>').addClass("grid");         //Row1 Col3
  $('#R1C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R1C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R1C6').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R1C7').html('<div>5</div>').addClass("grid");         //Row1 Col7
  $('#R1C8').html('<div>2</div>').addClass("grid");        //Row1 Col8
  $('#R1C9').html('<div></div>').addClass("grid");         //Row1 Col9

  $('#R2C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R2C2').html('<div>4</div>').addClass("grid");       //Row1 Col2
  $('#R2C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R2C4').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R2C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R2C6').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R2C7').html('<div>8</div>').addClass("grid");         //Row3 Col1
  $('#R2C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R2C9').html('<div>6</div>').addClass("grid");         //Row3 Col3

  $('#R3C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R3C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R3C3').html('<div>1</div>').addClass("grid");         //Row1 Col3
  $('#R3C4').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R3C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R3C6').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R3C7').html('<div>9</div>').addClass("grid");         //Row3 Col1
  $('#R3C8').html('<div>7</div>').addClass("grid");        //Row3 Col2
  $('#R3C9').html('<div>3</div>').addClass("grid");         //Row3 Col3

  $('#R4C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R4C2').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R4C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R4C4').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R4C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R4C6').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R4C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col7
  $('#R4C8').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col8
  $('#R4C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col9

  $('#R5C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R5C2').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");       //Row1 Col2
  $('#R5C3').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R5C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R5C5').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R5C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R5C7').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R5C8').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R5C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col3

  $('#R6C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R6C2').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R6C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R6C4').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R6C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R6C6').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R6C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R6C8').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R6C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");

  $('#R7C1').html('<div>9</div>').addClass("grid");         //Row1 Col1
  $('#R7C2').html('<div>3</div>').addClass("grid");        //Row1 Col2
  $('#R7C3').html('<div>4</div>').addClass("grid");         //Row1 Col3
  $('#R7C4').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R7C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R7C6').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R7C7').html('<div>6</div>').addClass("grid");         //Row1 Col7
  $('#R7C8').html('<div></div>').addClass("grid");        //Row1 Col8
  $('#R7C9').html('<div></div>').addClass("grid");         //Row1 Col9

  $('#R8C1').html('<div>7</div>').addClass("grid");         //Row1 Col1
  $('#R8C2').html('<div></div>').addClass("grid");       //Row1 Col2
  $('#R8C3').html('<div>8</div>').addClass("grid");         //Row1 Col3
  $('#R8C4').html('<div>1</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R8C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R8C6').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R8C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R8C8').html('<div>9</div>').addClass("grid");        //Row3 Col2
  $('#R8C9').html('<div></div>').addClass("grid");         //Row3 Col3

  $('#R9C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R9C2').html('<div>1</div>').addClass("grid");        //Row1 Col2
  $('#R9C3').html('<div>6</div>').addClass("grid");         //Row1 Col3
  $('#R9C4').html('<div>5</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R9C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R9C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R9C7').html('<div>3</div>').addClass("grid");         //Row3 Col1
  $('#R9C8').html('<div>8</div>').addClass("grid");        //Row3 Col2
  $('#R9C9').html('<div></div>').addClass("grid");

  init3x3Array = [[],[],[],[],[],[],[],[],[]];
  initRowArray = [[],[],[],[],[],[],[],[],[]];
  initColArray = [[],[],[],[],[],[],[],[],[]];

  init3x3Array = [[9,7,4,1],
                  [6,9,7,2,5],
                  [5,2,8,6,9,7,3],
                  [7,3],
                  [3,9,5,6,1],
                  [1,6],
                  [9,3,4,7,8,1,6],
                  [7,8,1,3,5],
                  [6,9,3,8]];

  initRowArray = [[9,7,6,5,2],
                  [4,9,7,8,6],
                  [1,2,5,9,7,3],
                  [3,9],
                  [7,3,5,1,6],
                  [6,1],
                  [9,3,4,7,8,6],
                  [7,8,1,3,9],
                  [1,6,5,3,8]];

  initColArray = [[9,7],
                  [9,4,7,3,1],
                  [7,1,3,4,8,6],
                  [9,2,3,6,7,1,5],
                  [5],
                  [6,7,5,9,1,8,3],
                  [5,8,9,1,6,3],
                  [2,7,6,9,8],
                  [6,3]];

  for (i=0; i<9; i++) {
    input3x3Array[i] = init3x3Array[i].concat(input3x3Array[i]);
    inputRowArray[i] = initRowArray[i].concat(inputRowArray[i]);
    inputColArray[i] = initColArray[i].concat(inputColArray[i]);
  };
};

function loadPat10() {
  console.log("it did come in hereee loadPat10");

  $('#R1C1').html('<div>2</div>').addClass("grid");         //Row1 Col1
  $('#R1C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R1C3').html('<div>3</div>').addClass("grid");         //Row1 Col3
  $('#R1C4').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R1C5').html('<div>6</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R1C6').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R1C7').html('<div>1</div>').addClass("grid");         //Row1 Col7
  $('#R1C8').html('<div>4</div>').addClass("grid");        //Row1 Col8
  $('#R1C9').html('<div></div>').addClass("grid");         //Row1 Col9

  $('#R2C1').html('<div>8</div>').addClass("grid");         //Row1 Col1
  $('#R2C2').html('<div>1</div>').addClass("grid");       //Row1 Col2
  $('#R2C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R2C4').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R2C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R2C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R2C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R2C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R2C9').html('<div>9</div>').addClass("grid");         //Row3 Col3

  $('#R3C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R3C2').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#R3C3').html('<div>6</div>').addClass("grid");         //Row1 Col3
  $('#R3C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R3C5').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R3C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R3C7').html('<div>7</div>').addClass("grid");         //Row3 Col1
  $('#R3C8').html('<div>8</div>').addClass("grid");        //Row3 Col2
  $('#R3C9').html('<div>3</div>').addClass("grid");         //Row3 Col3

  $('#R4C1').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R4C2').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R4C3').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R4C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R4C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R4C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R4C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col7
  $('#R4C8').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col8
  $('#R4C9').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col9

  $('#R5C1').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R5C2').html('<div></div>').addClass("grid").css("background-color", "lightgrey");       //Row1 Col2
  $('#R5C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R5C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R5C5').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R5C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R5C7').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R5C8').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R5C9').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col3

  $('#R6C1').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col1
  $('#R6C2').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col2
  $('#R6C3').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col3
  $('#R6C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R6C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R6C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R6C7').html('<div>8</div>').addClass("grid").css("background-color", "lightgrey");         //Row3 Col1
  $('#R6C8').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row3 Col2
  $('#R6C9').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");

  $('#R7C1').html('<div>6</div>').addClass("grid");         //Row1 Col1
  $('#R7C2').html('<div>3</div>').addClass("grid");        //Row1 Col2
  $('#R7C3').html('<div>4</div>').addClass("grid");         //Row1 Col3
  $('#R7C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col4
  $('#R7C5').html('<div>2</div>').addClass("grid").css("background-color", "lightgrey");         //Row1 Col5
  $('#R7C6').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row1 Col6
  $('#R7C7').html('<div>9</div>').addClass("grid");         //Row1 Col7
  $('#R7C8').html('<div></div>').addClass("grid");        //Row1 Col8
  $('#R7C9').html('<div></div>').addClass("grid");         //Row1 Col9

  $('#R8C1').html('<div>9</div>').addClass("grid");         //Row1 Col1
  $('#R8C2').html('<div></div>').addClass("grid");       //Row1 Col2
  $('#R8C3').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#R8C4').html('<div></div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R8C5').html('<div></div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R8C6').html('<div>4</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R8C7').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#R8C8').html('<div>3</div>').addClass("grid");        //Row3 Col2
  $('#R8C9').html('<div>1</div>').addClass("grid");         //Row3 Col3

  $('#R9C1').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#R9C2').html('<div>2</div>').addClass("grid");        //Row1 Col2
  $('#R9C3').html('<div>8</div>').addClass("grid");         //Row1 Col3
  $('#R9C4').html('<div>9</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col1
  $('#R9C5').html('<div>7</div>').addClass("grid").css("background-color", "lightgrey");         //Row2 Col2
  $('#R9C6').html('<div>3</div>').addClass("grid").css("background-color", "lightgrey");        //Row2 Col3
  $('#R9C7').html('<div>4</div>').addClass("grid");         //Row3 Col1
  $('#R9C8').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#R9C9').html('<div>6</div>').addClass("grid");

  init3x3Array = [[],[],[],[],[],[],[],[],[]];
  initRowArray = [[],[],[],[],[],[],[],[],[]];
  initColArray = [[],[],[],[],[],[],[],[],[]];

  init3x3Array = [[2,3,8,1,6],
                  [7,6,8,4,9],
                  [1,4,9,7,8,3],
                  [7,8,2,3],
                  [4],
                  [4,8,9,7],
                  [6,3,4,9,2,8],
                  [2,4,9,7,3],
                  [9,3,1,4,6]];

  initRowArray = [[2,3,7,6,8,1,4],
                  [8,1,4,9],
                  [6,9,7,8,3],
                  [7,8,2,4],
                  [4],
                  [3,8,9,7],
                  [6,3,4,2,9],
                  [9,4,3,1],
                  [2,8,9,7,3,4,6]];

  initColArray = [[2,8,7,3,6,9],
                  [1,8,3,2],
                  [3,6,2,4,8],
                  [7,4,9],
                  [6,9,4,2,7],
                  [8,4,3],
                  [1,7,8,9,4],
                  [4,8,9,3],
                  [9,3,4,7,1,6]];

  for (i=0; i<9; i++) {
    input3x3Array[i] = init3x3Array[i].concat(input3x3Array[i]);
    inputRowArray[i] = initRowArray[i].concat(inputRowArray[i]);
    inputColArray[i] = initColArray[i].concat(inputColArray[i]);
  };
};
