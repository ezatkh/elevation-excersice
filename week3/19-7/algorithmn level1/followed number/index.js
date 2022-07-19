function followedNumber(arr) {
  const arraySorted = arr.sort(function(a,b){
    return a-b
  });
  console.log(arraySorted);
  for (let index in arraySorted) {
    if (
      index == 0 &&arraySorted[index] + 1 === arraySorted[JSON.parse(index) + 1]) {
      console.log(arraySorted[index] +" is followed by " +arraySorted[JSON.parse(index) + 1]);
    }

    else if(index == arraySorted.length-1 && arraySorted[index] - 1 === arraySorted[JSON.parse(index) - 1]){
        console.log(arraySorted[index] +" is followed by " +arraySorted[JSON.parse(index) - 1]); 
    }

    else{
    if(arraySorted[index] + 1 === arraySorted[JSON.parse(index) + 1])
    console.log(arraySorted[index] +" is followed by " +arraySorted[JSON.parse(index) + 1]);
    if(arraySorted[index] - 1 === arraySorted[JSON.parse(index) - 1])
    console.log(arraySorted[index] +" is followed by " +arraySorted[JSON.parse(index) - 1]); 

    }
  }
}
followedNumber([20, 7, 2, 21, 3]);
