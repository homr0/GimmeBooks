// AJAX 
$(document).ready(function() {

  $("body").on("click", ".favoritebutton", function(e) {
    e.preventDefault();

    var id = "#entry-" + $(this).attr("data-id");
    var newBooks = {
      title: $(id + " .book-title").text(),
      author: $(id + " .book-author").text(),
      genre: $(id + " .book-genre").text(),
      year: $(id + " .book-year").text(),
      ISBN: $(id + " .book-isbn").text(),
      id: $("#welcomeUser").attr("data-user")
    };

    $.ajax({
      method: "POST",
      url: "/api/favorites",
      data: newBooks
    }).then(function() {
      console.log("Created New Book");
    });
  });

  $("body").on("click", ".favoriteDelete", function(e) {
    e.preventDefault();

    var oldBook = {
      id: $("#welcomeUser").attr("data-user"),
      bookId: $(this).attr("data-id")
    };

    $.ajax({
      method: "DELETE",
      url: "/api/favorites",
      data: oldBook
    }).then(function() {
      console.log("Deleted book from favorites");
      location.reload();
    });
  });
});
