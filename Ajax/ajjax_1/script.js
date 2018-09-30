$(document).ready(function () {
  $('button').on('click', myAJAX2);
});

function myAJAX() {
  $.get(
    "back-end.php", {
      "a": $('#num1').val()
    },
    function (data) {
      console.log(data);
    }
  );
}
function myAJAX2() {
  $.ajax({
    url : "back-end.php",
    type : "GET",
    data : { "a": $('#num1').val()},
    success : function (data) { 
      console.log (data);
     } 
  });
}