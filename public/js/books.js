// Book search API
$(document).ready(function () {
  $("#bookForm").submit(function () {
    var search = $("#search_bar").val();
    console.log(search);
    if (search === "") {
      alert("Please do not leave blank");
    } else {
      $.get(
        (query = "https://www.googleapis.com/books/v1/volumes?q=" + search),
        function (response) {
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
              var favoritebutton =$("<a>")
                .addClass("btn purple imageButtom")
                .attr("id","favoritebutton")
                .text("Favorites");

              var imgCol = $("<div>")
                .addClass("col s3")
                .append(img, button, favoritebutton);

              var title = $("<h5>")
                .addClass("center align black-text book-title")
                .text(book.title);

              var author = $("<h5>")
                .addClass("center align black-text book-author")
                .text(book.authors.join(", "));

              var year = $("<p>").addClass("book-year").html(
                "<strong>Year:</strong> " + book.publishedDate
              );

              var genre = $("<p>").addClass("book-genre").html(
                "<strong>Genre(s):</strong> " + book.categories.join(", ")
              );

              var isbn = $("<p>").addClass("book-isbn").html(
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
// ------------------------------------------------------------------------------------------------------------
// Best Sellers API

fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=i4tEIlfDSdFNPbi0sTkQAEpr39J3y9ct', {
  method: 'get',
})
  .then(response => { return response.json(); })
  .then(json => { updateBestSellers(json); })
  .catch(error => {
    console.log('NYT API Error: Defaulting to nytimes archival data.');
    updateBestSellers(nytimesArchive);
  });

function updateBestSellers(nytimesBestSellers) {
  nytimesBestSellers.results.forEach(function (book) {
    var isbn = book.isbns[1].isbn10;
    var bookInfo = book.book_details[0];
    var lastWeekRank = book.rank_last_week || 'n/a';
    var weeksOnList = book.weeks_on_list || 'New this week!';
    var listing =
      '<div id="' + book.rank + '" class="entry">' +
      '<p>' +
      '<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png" class="book-cover" id="cover-' + book.rank + '">' +
      '</p>' +
      '<h5><a href="' + book.amazon_product_url + '" target="_blank">' + bookInfo.title + '</a></h5>' +
      '<h5>By ' + bookInfo.author + '</h5>' +
      '<h5 class="publisher">' + bookInfo.publisher + '</h5>' +
      '<p>' + bookInfo.description + '</p>' +
      '<div class="stats">' +
      '<hr>' +
      '<p>Last Week: ' + lastWeekRank + '</p>' +
      '<p>Weeks on list: ' + weeksOnList + '</p>' +
      '</div>' +
      '</div>';

    $('#best-seller-titles').append(listing);
    $('#' + book.rank).attr('nyt-rank', book.rank);

    updateCover(book.rank, isbn);
  });
}

function updateCover(id, isbn) {
  fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + "&key=AIzaSyBLhwxX1QfAGMc4UTOm61PH8B37krLW59Y", {
    method: 'get'
  })
    .then(response => { return response.json(); })
    .then(data => {
      var img = data.items[0].volumeInfo.imageLinks.thumbnail;
      img = img.replace(/^http:\/\//i, 'https://');
      $('#cover-' + id).attr('src', img);
    })
    .catch(error => {
      console.log(error);
    });
}
