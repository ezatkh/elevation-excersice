let boughtTesla=prompt("Please enter the boughtTesla");
let isUSCitizen=prompt("Please enter the isUSCitizen");
let yearOfTeslaPurchase=prompt("Please enter the yearOfTeslaPurchase");
let currentYear=prompt("Please enter the currentYear");
//aiTelsa(boughtTesla,isUSCitizen,yearOfTeslaPurchase,currentYear);

function aiTelsa(boughtTesla,isUSCitizen,yearOfTeslaPurchase,currentYear)
{
    boughtTesla=prompt("Please enter the boughtTesla");
    isUSCitizen=prompt("Please enter the isUSCitizen");
    yearOfTeslaPurchase=prompt("Please enter the yearOfTeslaPurchase");
    currentYear=prompt("Please enter the currentYear");
    let duration;
if(boughtTesla && isUSCitizen)
{
    duration=currentYear-yearOfTeslaPurchase;
    if(duration>1)
    console.log("whould you like to upgrade ?"); 
    else
    {
    console.log("Are you satisfied with the car ?"); 
    }

}
else if(boughtTesla && !isUSCitizen)
{
    console.log("would like to move to the US ?");
}
else if(!boughtTesla)
{
    console.log("Are you interested in buying a car ?");
}
}
