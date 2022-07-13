const fetch=function(type,value){$.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${type}:${value}`,
    success: function (data) {
        if(type ==="isbn")
        data.items.forEach(element => console.log(`Title: ${element.volumeInfo.title} ,Author : ${element.volumeInfo.authors[0]} , ISBN : ${value}`));
        else {
            data.items.forEach(element =>console.log(`Title: ${element.volumeInfo.title} ,Author : ${element.volumeInfo.authors}  , ISBN : ${element.volumeInfo.industryIdentifiers[0].identifier }`))
        }
       // console.log(`Title: ${volumeInfo.title} ,Author : ${volumeInfo.authors[0]} , ISBN : ${value}`)
    },
    error: function (xhr, text, error) {
        console.log(text);
    }
}); 
}
// fetch("title", "The Wise Man's Fears")
 fetch("title", "How to Win Friends and Influence People")
//fetch("isbn", 9789814561778)

