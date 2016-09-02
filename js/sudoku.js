//Revision Control
//
// Date        Remarks
// 29 Aug 16 - Created an initial 3x3 grid array.
// 30 Aug 16 - Completed initial codings to capture the inputs from the 3x3 grid array with Enter Key pressed.
//             Coppleted initial duplicate checks on the same3x3Arr1Duplicate, sameRowArr1NumChk & sameColArr1NumChk
// 31 Aug 16 - Completed initial vaild checks on the input entered to be from the numbers 1 to 9.
//             Added the buttons for Clear, Play & Submit.
//             Resolved the display problems when the Submt button was clicked, problem was due to the usage of "Div"
//             which has a global contol on everything defined under it.  Change to refer the classname of ".Grid"
//             The Submit button was created for the player to subnit after entering the game board with all the required
//             numbers and clicked the Submit button for the checks to determine the player win or loose.
// 01 Sep 2016 Added the clear board function.
//             Format the Play button to load the seed numbers for the Sudoku game.
//             Completed the preliminary checkout on the 3x3 array grid.


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
var init3x3Array1 = [1,3,5,7];
var initRowArray1 = [1];
var initColArray1 = [3];

var input3x3Array1 = init3x3Array1.concat();
var inputRowArray1 = initRowArray1.concat();
var inputColArray1 = initColArray1.concat();
var inputSingleArray = [];
// var inputSingleArray = init3x3Array1.concat();
// var inputSingleArray = [];
var currentId;

$('.grid').click(function() {
   currentId = this.id;
   console.log("currrntId = " + currentId);
});

//lty// Input numbers and stored them into 1st 3x3 input3x3Array1 array
//lty// $('div').click(function(el) {  //Note the tag uing 'div' will affect all objects under div thus affecting the button display
                                 //needed to change to the classname as tag.

$('.grid').click(function(el) {
    var targetCell = el.target;
    $("#"+targetCell.id).html("<input></input>",'color','red');  //.classList.add("inputNum");
    $("#"+targetCell.id + " input").focus();

    var input_value1;

    $("#"+targetCell.id + " input").keypress(function(event) {
      if (event.keyCode === 13) {
        input_value1 = parseInt($(this).val())
        console.log(input_value1);
        input3x3Array1.push(input_value1);
        inputRowArray1.push(input_value1);
        inputColArray1.push(input_value1);
        inputSingleArray.push(input_value1);
  //lty//      inputSingleArray.pop();
  //lty//      console.log("before. in inputSingleArray =", inputSingleArray);
  //lty//      inputSingleArray.push(input_value1);
  //      inputSingleArray[0] = input_value1
         console.log("after. in inputSingleArray =", inputSingleArray);
      }
    })
});

$('#SubmitBtn').click(submitGame)

function submitGame() {
    console.log("The Submit Button has been clicked!")
    same3x3Arr1Duplicate(input3x3Array1)
    inputSingleArray = init3x3Array1.concat(inputSingleArray);

    if (!same3x3Arr1NumChk) {
      console.log("No Duplicates Found In The 3x3 Grid Array, Continue For Same Row Check")
      sameRowArr1Duplicate(inputRowArray1)
    }else{
      console.log("Game Ended, There Are Duplicate Numbers Within The 3x3 Grid Array")
      $("#resultsBox").text('You Lose!!! There Are Duplicates Found').css("color", "red");
      return
    }
    if (!sameRowArr1NumChk) {
      console.log("No Duplicates Found In The Row1 Array, Continue For Same Col Check")
      sameColArr1Duplicate(inputColArray1)
    }else{
      console.log("Game Ended, There Are Duplicate Numbers Within The Same Row")
      $("#resultsBox").text('You Lose!!! There Are Duplicates Found').css("color", "red");
      return
    }
    if (!sameColArr1NumChk) {
      console.log("No Duplicates Found In The Col1 Array, Continue For Single Number Valid Check")
      validSingleNumCheck(inputSingleArray)
    }else{
      console.log("Game Ended, There Are Duplicate Numbers Within The Same Col")
      $("#resultsBox").text('You Lose!!! There Are Duplicates Found').css("color", "red");
      return
    }
    if (!validSingleNumChk) {
      console.log("You Lose!!! There Are Duplicates Found");
      $("#resultsBox").text('You Lose!!! There Are Duplicates Found').css("color", "red");
      return
    }else{
      console.log("You Won!!! Congratulations, Wanna Play Another Game?")
      $("#resultsBox").text('You Won!!! Congratulations, Wanna Play Another Game?');
    }
  }

function clearBoard () {
  window.location.reload()
}

$('#ClearBtn').click(clearBoard)

$('#pattern1').click(loadPat1)
$('#pattern2').click(loadPat2)
$('#pattern3').click(loadPat3)


// Checking for duplicate numbers in 1st 3x3 Array
var same3x3Arr1NumChk = false;
var checkInitArrayLength = init3x3Array1.length;
 // finds any duplicate array elements using the fewest possible comparison
function same3x3Arr1Duplicate() {
  console.log("checkInitArrayLength length =", checkInitArrayLength);
  console.log("in same3x3Arr1Duplicate =", input3x3Array1);
  console.log("input3x3Array1 length =", input3x3Array1.length);                                             // to ensure the fewest possible comparisons
	for (i=0; i<input3x3Array1.length; i++) {                        // outer loop uses each item i at 0 through n
    console.log("it did come in hereee i loop");
		for (j=i+1; j<input3x3Array1.length; j++) {              // inner loop only compares items j at i+1 to n
      console.log("it did come in hereee j loop");
			if (input3x3Array1[i]==input3x3Array1[j]) {
         same3x3Arr1NumChk = true;
         console.log("input3x3Array1[i] = ", " i =", i, "i Array = ", input3x3Array1[i]);
         console.log("input3x3Array1[j] = ", " j =", j, "j Array = ",input3x3Array1[j]);
         console.log("Same3x3Arr1Num Check True = ", same3x3Arr1NumChk);
         return same3x3Arr1NumChk = true;
      } else {
         same3x3Arr1NumChk = false;
         console.log("input3x3Array1[i] = ", " i =", i, "i Array = ",input3x3Array1[i]);
         console.log("input3x3Array1[j] = ", " j =", j, "j Array = ",input3x3Array1[j]);
         console.log("Same3x3ArrNum Check False = ", same3x3Arr1NumChk);
      }
	  }
  } return same3x3Arr1NumChk = false;
}

// Checking for duplicate numbers in 1st Row Array
var sameRowArr1NumChk = false;
 // finds any duplicate array elements using the fewest possible comparison
 function sameRowArr1Duplicate() {
   console.log("in initRowArray1 =", initRowArray1);
   console.log("in sameRowArr1Duplicate =", inputRowArray1);
   console.log("inputRowArray1 length =", inputRowArray1.length);                                             // to ensure the fewest possible comparisons
 	for (i=initRowArray1.length; i<inputRowArray1.length; i++) {                        // outer loop uses each item i at 0 through n
     console.log("it did come in hereee i loop");
 		for (j=0; j<initRowArray1.length; j++) {              // inner loop only compares items j at i+1 to n
       console.log("it did come in hereee j loop");
 			if (inputRowArray1[i]==initRowArray1[j]) {
          sameRowArr1NumChk = true;
          console.log("inputRowArray1[i] = ", i, inputRowArray1[i]);
          console.log("initRowArray1[j] = ", j, initRowArray1[j]);
          console.log("sameRow1Num Check True = ", sameRowArr1NumChk);
          return sameRowArr1NumChk = true
       } else {
          sameRowArr1NumChk = false;
          console.log("inputRowArray1[i] = ", i, inputRowArray1[i]);
          console.log("initRowArray1[j] = ", j, initRowArray1[j]);
          console.log("sameRow1Num Check False = ", sameRowArr1NumChk);
       }
 	  }
  } return sameRowArr1NumChk = false
 }

 // Checking for duplicate numbers in 1st Col Array
  var sameColArr1NumChk = false;
  // finds any duplicate array elements using the fewest possible comparison
  function sameColArr1Duplicate() {
    console.log("in initColArray1 =", initColArray1);
    console.log("in sameColArr1Duplicate =", inputColArray1);
    console.log("inputColArray1 length =", inputColArray1.length);                                             // to ensure the fewest possible comparisons
  	for (i=initColArray1.length; i<inputColArray1.length; i++) {                        // outer loop uses each item i at 0 through n
      console.log("it did come in hereee i loop");
  		for (j=0; j<initColArray1.length; j++) {              // inner loop only compares items j at i+1 to n
        console.log("it did come in hereee j loop");
  			if (inputColArray1[i]==initColArray1[j]) {
           sameColArr1NumChk = true;
           console.log("inputColArray1[i] = ", i, inputColArray1[i]);
           console.log("initColArray1[j] = ", j, initColArray1[j]);
           console.log("sameCol1Num Check True = ", sameColArr1NumChk);
           return sameColArr1NumChk = true
        } else {
           sameColArr1NumChk = false;
           console.log("inputColArray1[i] = ", i, inputColArray1[i]);
           console.log("initColArray1[j] = ", j, initColArray1[j]);
           console.log("sameCol1Num Check False = ", sameColArr1NumChk);
        }
  	  }
    } return sameColArr1NumChk = false;
  }

  // Checking for valid numbers of 1 to 9
  var validSingleNumChk = false;
   // finds any duplicate array elements using the fewest possible comparison
  function validSingleNumCheck() {
    console.log("it did come in hereeee in validSingleNumCheck");
    console.log("in inputSingleArray =", inputSingleArray);
    console.log("inputSingleArray length =", inputSingleArray.length);
    console.log("in sudoValidNumArray =", sudoValidNumArray);
    console.log("sudoValidNumArray length =", sudoValidNumArray.length);

    inputSingleArray.sort(function(a, b){return a-b});

    console.log("after sort inputSingleArray =", inputSingleArray);

  	for (i=0; i<sudoValidNumArray.length; i++) {                   // outer loop uses each item i at 0 through n
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

function loadPat1() {
  console.log("it did come in hereee loadPat1");

  $('#0').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#1').html('<div>1</div>').addClass("grid");        //Row1 Col2
  $('#2').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#3').html('<div>3</div>').addClass("grid");        //Row2 Col1
  $('#4').html('<div></div>').addClass("grid");         //Row2 Col2
  $('#5').html('<div>5</div>').addClass("grid");        //Row2 Col3
  $('#6').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#7').html('<div>7</div>').addClass("grid");        //Row3 Col2
  $('#8').html('<div></div>').addClass("grid");         //Row3 Col3

  var init3x3Array1 = []
  var initRowArray1 = []
  var initColArray1 = []

  var init3x3Array1 = [1,3,5,7]
  var initRowArray1 = [1]
  var initColArray1 = [3]

  var input3x3Array1 = init3x3Array1.concat();
  var inputRowArray1 = initRowArray1.concat();
  var inputColArray1 = initColArray1.concat();
  var inputSingleArray = init3x3Array1.concat();

  console.log("init3x3Array1 aft init = ", init3x3Array1)
  console.log("initRowArray1 aft init = ", initRowArray1)
  console.log("initColArray1 aft init = ", initColArray1)
}

function loadPat2() {
  console.log("it did come in hereee loadPat2");

  $('#0').html('<div></div>').addClass("grid");         //Row1 Col1
  $('#1').html('<div>2</div>').addClass("grid");        //Row1 Col2
  $('#2').html('<div></div>').addClass("grid");         //Row1 Col3
  $('#3').html('<div>4</div>').addClass("grid");        //Row2 Col1
  $('#4').html('<div></div>').addClass("grid");         //Row2 Col2
  $('#5').html('<div>6</div>').addClass("grid");        //Row2 Col3
  $('#6').html('<div></div>').addClass("grid");         //Row3 Col1
  $('#7').html('<div>8</div>').addClass("grid");        //Row3 Col2
  $('#8').html('<div></div>').addClass("grid");         //Row3 Col3

  var init3x3Array1 = []
  var initRowArray1 = []
  var initColArray1 = []

  var init3x3Array1 = [2,4,6,8]
  var initRowArray1 = [2]
  var initColArray1 = [4]

  var input3x3Array1 = init3x3Array1.concat();
  var inputRowArray1 = initRowArray1.concat();
  var inputColArray1 = initColArray1.concat();
  var inputSingleArray = init3x3Array1.concat();
}

function loadPat3() {
  console.log("it did come in hereee loadPat2");

  $('#0').html('<div>1</div>').addClass("grid");         //Row1 Col1
  $('#1').html('<div></div>').addClass("grid");        //Row1 Col2
  $('#2').html('<div>3</div>').addClass("grid");         //Row1 Col3
  $('#3').html('<div></div>').addClass("grid");        //Row2 Col1
  $('#4').html('<div>5</div>').addClass("grid");         //Row2 Col2
  $('#5').html('<div></div>').addClass("grid");        //Row2 Col3
  $('#6').html('<div>7</div>').addClass("grid");         //Row3 Col1
  $('#7').html('<div></div>').addClass("grid");        //Row3 Col2
  $('#8').html('<div>9</div>').addClass("grid");         //Row3 Col3

  var init3x3Array1 = []
  var initRowArray1 = []
  var initColArray1 = []

  var init3x3Array1 = [1,3,5,7,9]
  var initRowArray1 = [1,3]
  var initColArray1 = [1,7]

  var input3x3Array1 = init3x3Array1.concat();
  var inputRowArray1 = initRowArray1.concat();
  var inputColArray1 = initColArray1.concat();
  var inputSingleArray = init3x3Array1.concat();
}
