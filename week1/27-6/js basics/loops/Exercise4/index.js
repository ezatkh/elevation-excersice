const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
  
  for(let outerIndex in posts)
  {
    if(posts[outerIndex].id==2)
    {
        
      for(let innerIndex in posts[outerIndex].comments)
      {
        
        if((posts[outerIndex].comments[innerIndex].id)==(3))
        {
        posts[outerIndex].comments.splice(innerIndex,1);
        console.log(posts[outerIndex].comments);
        }
  
      }
    }
    
  }
