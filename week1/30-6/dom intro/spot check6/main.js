function addItem()
{
    var item =document.getElementById("list");
    let newItem=document.createElement('li');
    newItem.innerHTML="A new item";
    item.appendChild(newItem);

}