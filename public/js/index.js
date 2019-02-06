$(document).ready(function() {
  $(".collapsible").collapsible();

  $(".dropdown-trigger").dropdown({
    closeOnClick: false,
    constrainWidth: false
  });

  // AJAX
  $("#signUpButton").on("click", function(e) {
    e.preventDefault();

    var newUser = {
      name: $("#user_name")
        .val()
        .trim(),
      email: $("#signEmail")
        .val()
        .trim(),
      password: $("#signPassword")
        .val()
        .trim()
    };

    console.log(newUser);

    if (
      newUser.name !== "" &&
      newUser.email !== "" &&
      newUser.password !== ""
    ) {
      $.ajax("/register", {
        method: "POST",
        data: newUser
      }).then(function() {
        console.log("Created New User");
        location.reload();
      });
    }
  });
});
