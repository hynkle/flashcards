$(document).ready(function() {
  // Index Logic:
  var textLoad = function() {
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
  };
  textLoad();

  $("#conceptPanel").click(function() {
    $("#definitionPanel").show();
  });

  $("#definitionPanel").click(function() {
    $("#conceptPanel").show();
  });

  $("#nextButton").click(function() {
    $("#definitionPanel").show();
    $("#conceptPanel").show();
    textLoad();
  });

  // Glossary Logic:
  dictionary.forEach(function(currentValue) {
    $("#glossaryList").prepend("<li>" + "<strong>" + currentValue[0] + "</strong>" + " - " + currentValue[1] + "</li>");
  });
});



// Flashcard Dictionary as an Array of Arrays

var dictionary = [["JavaScript", "A high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification."],["Operators", "A special character (or characters) that indicates an action to be performed. For example +, -, *, /, and %"],["Variables", "These can be thought of as containers used to store information. They allow for a way to label data with a descriptive name."],["Variable Naming Conventions", "These should begin with a letter, case-sensitive, written in lower camel case, and should always be clear names that describe the value they are storing."],["Function", "A block of code that performs an action and returns a result; optionally takes arguments"],["Method", "An action run on a piece of data; you can think of it as a message you send to a piece of data, and the result is the response."],["Arguments", "Some methods take one or more of these and they provide the method with additional information to help it perform its action."],["Parameters", "a variable that's assigned to the argument."],["Return", "A keyword that tells JavaScript to return the result from that line of code."],["Chaining Methods", "Calling a method directly on the return value of another method."],["Strings", "a JavaScript data type that represents the exact text of whatever is enclosed in the quotes."],["Booleans", "true or false."],["Undefined", "An object (such as a variable) without a defined value."],["NaN", "What 0/0 would return."],["Escape", "A symbol that tells JavaScript that the \" that comes right after it is not the end of the string, but just a character inside the string."],["Alert", "opens a dialog box and returns the string as an argument."],["Comments", "Anything following // on a line in JavaScript that is ignored by the computer."],["jQuery", "A JavaScript library that makes it easy to make web pages interactive."],["Attributes", "Additional information provided to an HTML tag. For example: href"]]
