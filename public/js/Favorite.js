 // AJAX 
 $("#favoriteButton").on("click", function(e) {
    e.preventDefault();

    var newBooks = {
      author: $("#author").val().trim(),
      title: $("#book_title").val().trim(),
      ISBN_Num: $("#isbn").val().trim()
    };

    console.log(newBooks);

    $.ajax("/api/books", {
      method: "POST",
      data: newBooks
    }).then(function() {
      console.log("Created New Book");
      location.reload();
    })
  });
