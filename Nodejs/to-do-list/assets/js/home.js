

var delete_button = $("#delete-task");
var checkbox_status = [];


//this function handles the delete-task button event, it gets the data from all the checked checkboxes and uses ajax to send the post request to /delete-task.
delete_button.click(function () {
  var checkbox = $('.delete_checkbox:checked');
  if (checkbox.length > 0) {
    $(checkbox).each(function () {
      checkbox_status.push($(this).val());
    });
    $.post('/delete-task', {
      checkbox_array: checkbox_status    // sending the array in req body.
    }
    );
  }
  else{
    return;
  }
});

//function fires when the window loads, specifically the delete-task button should be disabled as initially there wont be any field to delete, its active when there are multiple tasks available to deleted from.
window.onload = function(){
  if($(".tasks-list").length==0){
    $("#delete-task").prop("disabled",true);
  }
  else{
    $("#delete-task").prop("disabled",false);
  }
}


//this function is used to initialise the select fields in our webpage.
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var options = document.querySelectorAll('option');
  var instances = M.FormSelect.init(elems, options);
});


//this function is used to initialise the datepicker fields in our webpage.
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.datepicker');
  var options = document.querySelectorAll('option');
  var instances = M.Datepicker.init(elems, options);
});