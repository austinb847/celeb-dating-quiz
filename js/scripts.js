$(document).ready(function() {
  $("form#celebMatch").submit(function(event) {
    var firstName = $("#userFName").val();
    var userGender = $("input:radio[name=gridRadios]:checked").val();
    var userZodiac = $("#zodiacSign").val();

    if (firstName) {
      if (userGender === "male" && userZodiac === "1") {
        $("#output").html("" +
        "<div id='match3' >" +
        "<h2>" + firstName + " here is your suggested Celebrity Match!</h2>" +
        "<p>The Beatutiful Oprah Winfrey!</p>" +
        "<img src='img/oprah.jpg'>" +
        "</div>");
      
      } else if (userGender === "male" && userZodiac === "2") {
        $("#output").html("" +
        "<div id='match4' >" +
        "<h2>" + firstName + " here is your suggested Celebrity Match!</h2>" +
        "<p>The Beatutiful Britney Spears!</p>" +
        "<img src='img/britney.jpg'>" +
        "</div>");
      
      } else if (userGender === "female" && userZodiac === "3") {
        $("#output").html("" +
        "<div id='match1' >" +
        "<h2>" + firstName + " here is your suggested Celebrity Match!</h2>" +
        "<p>The Beatutiful Tom Cruise!</p>" +
        "<img src='img/tom.jpg'>" +
        "</div>");
      
      } else if (userGender === "female" && userZodiac === "4") {
        $("#output").html("" +
        "<div id='match2' >" +
        "<h2>" + firstName + " here is your suggested Celebrity Match!</h2>" +
        "<p>The Beatutiful Don Chedle!</p>" +
        "<img src='img/don.jpg'>" +
        "</div>");
      
      } else {
        alert("Sorry no match for you! :(");
      }
    
    } else {
      alert("Enter your first name please");
    }
    event.preventDefault();
  });

});