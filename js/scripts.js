$(document).ready(function() {
  $("form#Triangle").submit(function(event) {
    var firstLength = parseInt($("input#length1").val());
    var secondLength = parseInt($("input#length2").val());
    var thirdLength = parseInt($("input#length3").val());

var yourTriangle = function(){

  if (firstLength === secondLength && secondLength === thirdLength) {
    return ("Equilateral");
  } else if (firstLength === secondLength !== thirdLength) {
    return ("Isosceles");
  } else if (firstLength !== secondLength === thirdLength) {
    return ("Isosceles");
  } else if (firstLength !== secondLength !== thirdLength) {
    return ("Scalene");
 }
 };
 console.log();
$("#output").text(yourTriangle);
$("#triangleIDIF").show();
    event.preventDefault();
  });
});
