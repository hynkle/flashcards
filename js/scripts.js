$(document).ready(function() {


  var conceptTitle = "JavaScript";
  var conceptBody = "This is text.";

  $("#conceptPanel").click(function() {
    $("#definitionPanel").show();
  });

  $("#definitionPanel").click(function() {
    $("#conceptPanel").show();
  });

  $("#nextButton").click(function() {
    $("#conceptName").empty(conceptTitle);
    $("#conceptDef").empty(conceptBody);
    $("#conceptName").prepend(conceptTitle);
    $("#conceptDef").prepend(conceptBody);
  });

});
