//debugger
console.log('Hello frontend');

// gridArray = [ 0, 0, 0,
//              0, 0, 0,
  //            0, 0, 0]; //

console.clear();
var sudokuGrid = [1,2,3,4,5,6,7,8,9];
var inputArray = [2,5,8,9]
var currentId;

$('div').click(function() {
  currentId = this.id;
  console.log("currrntId = " + currentId);
});

var myEl = document.getElementById('currentId');

console.log(myEl, "TeST")

$('div').click(function(el) {
    var div = el.target;
    $("#"+div.id).html("<input></input>");
    $("#"+div.id + " input").focus();

    var input_value;
    // $("#"+div.id + " input").on('input', function(){
    //   input_value = $(this).val();
    //   console.log(input_value);
    //   inputArray.push(input_value)
    // });

    $("#"+div.id + " input").keypress(function(event) {
      if (event.keyCode === 13) {
        input_value = parseInt($(this).val())
        console.log(input_value);
        inputArray.push(input_value);
        console.log(inputArray);
      }
    })
});
