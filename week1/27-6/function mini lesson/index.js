people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

  const capitalize = function(str){
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
   return capitalizedStr;
  }

  const getAge = function(age){
    let strage="";
if(age<21)
strage="an underage";
else if(age>55)
strage="a +55";
else
strage=age;

    return strage;
  }
  
  const getSummary = function(person){
    let summary = "";
    summary += capitalize(person.name);
    summary +=  " is " +getAge(person.age)+" ";

    let arrStr=person.profession.split(" ");
    for(let index of arrStr)
    summary+=capitalize(index)+" ";


    //summary +=capitalize(person.professions);
    summary += " from "+capitalize(person. cityy) +", " + capitalize(person.countr)+".";
    summary += capitalize(person.name) +" loves to say "+' "'+ capitalize(person.catchphrase) +'"';
   return summary;
  }
console.log(getSummary(people_info[2]));
