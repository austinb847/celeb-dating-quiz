$(document).ready(function() {
  $("form#celebMatch").submit(function(event) {
    var firstName = $("#userFName").val();
    var userGender = $("input:radio[name=gridRadios]:checked").val();
    var userZodiac = $("#zodiacSign").val();

    if (firstName) {
      if (userGender === "male" && userZodiac === "1") {
        $("span.name").text(firstName);
        $("#match3").show();
      
      } else if (userGender === "male" && userZodiac === "2") {
        $("span.name").text(firstName);
        $("#match4").show();
      
      } else if (userGender === "female" && userZodiac === "3") {
        $("span.name").text(firstName);
        $("#match1").show();
      
      } else if (userGender === "female" && userZodiac === "4") {
        $("span.name").text(firstName);
        $("#match2").show();
      } else {
        alert("Sorry no match for you! :(");
      }
    
    } else {
      alert("Enter your first name please");
    }
    event.preventDefault();
  });

});