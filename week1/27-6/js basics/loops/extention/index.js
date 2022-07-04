const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

//Words that begin with  A:
for(let outer in dictionary)
{
  //console.log(outer);
  if(outer == "A")
  {
    console.log("Words that begin with  A:");
    for(let inner of dictionary[outer])
    {    
      console.log(inner);
    }
  }

  if(outer == "B")
  {
    console.log("Words that begin with  B:");
    for(let inner of dictionary[outer])
    {    
      console.log(inner);
    }
  }

  if(outer == "C")
  {
    console.log("Words that begin with  C:");
    for(let inner of dictionary[outer])
    {    
      console.log(inner);
    }
  }
  
}