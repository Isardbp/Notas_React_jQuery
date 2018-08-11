$(document).ready(function() {
  $("#button_input").click(function(){
    $("#input_div_note").append("<div class='alert alert-primary'>" + $("#input").val() + "</div>");
    $("#input").val("");
  });
});
