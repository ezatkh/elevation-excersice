$("#btn").click(function(){
    const search=$(".Text").val()
    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=kQ13hPpN5hJybgn23q5gpOApOcTIf5qh&limit=5`);
    xhr.done(function(data) {
        data.data.forEach(element => {
           $(".container").empty()
           $(".container").append(`<iframe src=" ${ element.embed_url} "></iframe>`)
        }); 
   });
})


