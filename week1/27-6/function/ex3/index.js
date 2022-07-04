const exist=function(arr,num){
    let flag=false;
for(let index of arr)
{
if(index === num)
flag=true;


}
return flag
}
arrNum=[1,2,3,4,5,6,7];
let x=exist(arrNum,4);
let y=exist(arrNum,11);
console.log(x + "  "+y);