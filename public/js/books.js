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

          for (i = 0; i < response.items.length; i++) {
            var book = response.items[i].volumeInfo;

            var title = $("<h5>")
              .addClass("center align black-text")
              .text(book.title);

            var author = $("<h5>")
              .addClass("center align black-text")
              .text(book.authors);

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
              });

            $("#search_results").append(title, author, img, button);
          }
        }
      );
    }
    return false;
  });
});
