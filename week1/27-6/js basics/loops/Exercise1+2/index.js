const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
let people = []

for(let index in names )
{
    let props={};
props["name"]=names[index];
props["age"]=ages[index];
 
  people.push(props);
}
console.log(people);
//ex2 way 1
for(let all of people )
{
  console.log(all.name +" is " + all.age);
}
//ex2 way 2
let st="";
let i=0;
while(i<people.length)
{
  st+=people[i].name +" is " + people[i].age+" , ";
  i++;
}
console.log(st);

