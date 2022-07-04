const isEven=function(num){
if(num %2==0)
return true;
else return false;
}
const arrayFunc=function(arr){
for(let index of arr)
{
    if(isEven(index))
    console.log(index);
}
}

let x=isEven(24);
let y=isEven(25);

console.log(x + "  "+y);
arrayNum=[15,17,14,5,4,8];
arrayFunc(arrayNum);