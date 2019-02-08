// AJAX 
$(document).ready(function() {


  $("body").on("click", "#favoritebutton" ,function (e) {
    console.log('hello');
    e.preventDefault(e);


    var newBooks = {
      author: $(".book-author").text(),
      title: $(".book-title").text(),
      ISBN_Num: $(".book-isbn").text(),
      genre: $(".book-genre").text(),
      year: $(".book-year").text(),
      dummyID: 0
    };

    console.log(newBooks);

    $.ajax({
      method: "POST",
      url: "/api/favorites",
      data: newBooks
    }).then(function() {
      console.log("Created New Book");
      location.reload();
    });
  });
});
