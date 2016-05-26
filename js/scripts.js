$(document).ready(function(){
  $("#blanks").submit(function() {
    var name = $("#name").val();
    var genre = $("input:radio[name=genre]:checked").val();
    var dob = $("#born").val();
    var food = $("#food").val();
  });
});
