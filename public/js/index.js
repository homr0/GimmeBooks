$(document).ready(function() {
  // Sets up the Materialize JS plugins
  $(".collapsible").collapsible();

  $(".dropdown-trigger").dropdown({
    closeOnClick: false,
    constrainWidth: false
  });

  $(".modal").modal();

  // AJAX functions
  // Signs up a user.
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
      !$("#user_name").hasClass("invalid") &&
      !$("#signEmail").hasClass("invalid") &&
      !$("#signPassword").hasClass("invalid")
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

  // Logs in a user.
  $("#loginButton").on("click", function(e) {
    e.preventDefault();

    var logUser = {
      email: $("#loginEmail")
        .val()
        .trim(),
      password: $("#loginPassword")
        .val()
        .trim()
    };

    console.log(logUser);

    if (
      !$("#loginEmail").hasClass("invalid") &&
      !$("#loginPassword").hasClass("invalid")
    ) {
      $.ajax("/login", {
        method: "POST",
        data: logUser
      }).then(function() {
        console.log("Logged in user");
        location.reload();
      });
    }
  });
});
