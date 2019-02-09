// AJAX 
$(document).ready(function() { 

  $("body").on("click", ".favoritebutton", function(e) {
    console.log('hello');
    e.preventDefault();

    var id = "#entry-" + $(this).attr("data-id");
    var newBooks = {
      title: $(id + " .book-title").text(),
      author: $(id + " .book-author").text(),
      genre: $(id + " .book-genre").text(),
      year: $(id + " .book-year").text(),
      ISBN: $(id + " .book-isbn").text(),
      id: 1
    };

    console.log(newBooks);

    $.ajax({
      method: "POST",
      url: "/api/favorites",
      data: newBooks
    }).then(function() {
      console.log("Created New Book");
    });
  });
});
