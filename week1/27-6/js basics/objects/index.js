var name1 =prompt("Please enter the name of p1");
var age1=prompt("Please enter the age of p1");
var city1=prompt("Please enter the city of p1");

var name2 =prompt("Please enter the name of p2");
var age2 =prompt("Please enter the age of p2");
var city2 =prompt("Please enter the city of p2");

var p1={
    name:name1,
    age:age1,
    city:city1
}
var p2={
    name:name2,
    age:age2,
    city:city2
}
console.log(p1);
console.log(p2);

if(p1.age === p2.age &&  p1.city === p2.city)
console.log("Jill wanted to date Robert");
else if(p1["city"] !== p2["city"])
console.log("Jill wanted to date Robert, but couldn’t");
