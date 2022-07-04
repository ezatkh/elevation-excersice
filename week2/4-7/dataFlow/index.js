let posts=[{
    name:"izzat",
    text:"khalili"
},
{
    name:'ahmad',
    text:'ali'
},
{
    name:'mohammad',
    text:'yahia'
}
]
const render = function () {
    $("#postsRender").empty()
    for (let post of posts) {
        
        let postDiv = $("<div class='postDiv'><p class=name>" + post.name + "</p> : <p class=text>" + post.text + "</p></div>")
        $("#postsRender").append(postDiv)
    }
}
render()

$('#btn').click(function(){
    let newPost={}
    newPost.name=$('#name').val()
    newPost.text=$('#text').val()
    posts.push(newPost)
    render()
})