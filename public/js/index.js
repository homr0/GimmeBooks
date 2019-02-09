$(document).ready(function() {
  // Sets up the Materialize JS plugins
  $(".collapsible").collapsible();

  $(".dropdown-trigger").dropdown({
    closeOnClick: false,
    constrainWidth: false
  });

  $(".modal").modal();

  $(".sidenav").sidenav();

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
  $("#loginButton, #loginButtonM").on("click", function(e) {
    e.preventDefault();

    var mode = "";
    if ($(this).attr("id") === "loginButtonM") {
      mode = "M";
    }

    var logUser = {
      email: $("#loginEmail" + mode)
        .val()
        .trim(),
      password: $("#loginPassword" + mode)
        .val()
        .trim()
    };

    if (
      !$("#loginEmail" + mode).hasClass("invalid") &&
      !$("#loginPassword" + mode).hasClass("invalid")
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

$(".parallax").parallax();

