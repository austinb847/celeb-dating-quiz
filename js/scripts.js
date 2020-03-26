$(document).ready(function() {
  $("form#celebMatch").submit(function(event) {
    var firstName = $("#userFName").val();
    var userGender = $("input:radio[name=gridRadios]:checked").val();
    var userZodiac = $("#zodiacSign").val();

    if (firstName) {
      if (userGender === "male" && userZodiac === "1") {
        $("span.name").text(firstName);
        $("#match3").show();
      }
    
    } else {
      alert("Enter your first name please");
    }


    event.preventDefault();
  });

});