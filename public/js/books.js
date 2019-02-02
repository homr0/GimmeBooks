$(document).ready(function () {
    $("#bookForm").submit(function () {
        var search = $("#search_bar").val();
        console.log(search);
        if (search === "") {
            alert("Please do not leave blank");
        }
        else {
            var title = "";
            var author = "";
            var img = "";
            var url = "";
            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {
                console.log(response);
                for (i = 0; i < response.items.length; i++) {
                    title = $('<h5 class="center align black-text">' + response.items[i].volumeInfo.title + '</h5>');
                    author = $('<h5="center align black-text">' + response.items[i].volumeInfo.authors + '</h5>');
                    img = $('<img="aligning card z-depth-5 id="dynamic"> <br> <a href=' + response.items[i].volumeInfo.infoLink + '> <button id = "imageButton" class="btn blue">Read More</button></a>');
                    url = response.items[i].volumeInfo.imageLinks.thumbnail;
                    img.attr("src", url);
                    title.appendTo("#search_results");
                    author.appendTo("#search_results");
                    img.appendTo("#search_results");
                }
            });
        }
        return false;
    });
});
