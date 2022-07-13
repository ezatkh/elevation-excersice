const fetch=function(type,value){$.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${type}:${value}`,
    success: function (data) {
        console.log(data);
    },
    error: function (xhr, text, error) {
        console.log(text);
    }
}); 
}
fetch("title", "The Wise Man's Fears")

fetch("isbn", 9789814561778)

fetch("title", "How to Win Friends and Influence People")