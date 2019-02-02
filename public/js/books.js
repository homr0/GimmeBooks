$(document).ready(function() {
  $("#bookForm").submit(function() {
    var search = $("#search_bar").val();
    console.log(search);
    if (search === "") {
      alert("Please do not leave blank");
    } else {
      $.get(
        (query = "https://www.googleapis.com/books/v1/volumes?q=" + search),
        function(response) {
          console.log(response);

          $("#search_results .search_book").remove();

          if (response.items.length < 1) {
            $("<li>")
              .addClass("search_book")
              .text("Sorry, no books found.")
              .appendTo("#search_results");
          } else {
            for (i = 0; i < response.items.length; i++) {
              var book = response.items[i].volumeInfo;

              var icon = $("<i>")
                .addClass("material-icons")
                .text("library_books");

              var header = $("<div>")
                .addClass("collapsible-header")
                .html("<em>" + book.title + "</em>&nbsp;by " + book.authors)
                .prepend(icon);

              var img = $("<img>")
                .addClass("aligning card z-depth-5")
                .attr({
                  id: "dynamic" + i,
                  alt: book.title,
                  src: book.imageLinks.thumbnail
                });

              var button = $("<a>")
                .addClass("btn blue imageButton")
                .attr({
                  href: book.infoLink
                })
                .text("Read more");

              var imgCol = $("<div>")
                .addClass("col s3")
                .append(img, button);

              var title = $("<h5>")
                .addClass("center align black-text")
                .text(book.title);

              var author = $("<h5>")
                .addClass("center align black-text")
                .text(book.authors.join(", "));

              var year = $("<p>").html(
                "<strong>Year:</strong> " + book.publishedDate
              );

              var genre = $("<p>").html(
                "<strong>Genre(s):</strong> " + book.categories.join(", ")
              );

              var isbn = $("<p>").html(
                "<strong>ISBN:</strong> " +
                  book.industryIdentifiers[0].identifier
              );

              var summary = $("<p>")
                .addClass("black-text")
                .text(book.description);

              var infoCol = $("<div>")
                .addClass("col s9")
                .append(title, author, year, genre, isbn, summary);

              var body = $("<div>")
                .addClass("collapsible-body row")
                .append(imgCol, infoCol);

              $("<li>")
                .addClass("search_book")
                .append(header, body)
                .appendTo("#search_results");
            }
          }
        }
      );
    }
    return false;
  });
});
