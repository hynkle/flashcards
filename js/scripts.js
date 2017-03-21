$(document).ready(function() {

  $("#conceptPanel").click(function() {
    $("#definitionPanel").show();

  });

  $("#definitionPanel").click(function() {
    $("#conceptPanel").show();
  });

  $("#nextButton").click(function() {
    $("#conceptName").empty();
    $("#conceptDef").empty();
    var randomNumber = Math.floor((Math.random() * 18));
    $("#conceptName").prepend(dictionary[randomNumber][0]);
    $("#conceptDef").prepend(dictionary[randomNumber][1]);

    var randomPanelNumber = Math.round(Math.random());

    if (randomPanelNumber === 0) {
      $("#conceptPanel").hide();
    } else {
      $("#definitionPanel").hide();
    }

  });

});

var conceptTitle = "JavaScript";
var conceptBody = "This is text.";

var dictionary = [["JavaScipt", "This is text."],["Operators", "This is text."], ["Variables", "This is text."],["Variable Naming Conventions", "This is text."],["Functions", "This is text."],["Methods", "This is text."],["Arguments", "This is text."],["Parameters", "This is text."],["Return", "This is text."],["Chaining Methods", "This is text."],["Strings", "This is text."],["Booleans", "This is text."],["Undefined", "This is text."],["NaN", "This is text."],["Escape", "This is text."],["Alert", "This is text."],["Comments", "This is text."],["jQuery", "This is text."],["Attributes", "This is text."]]
