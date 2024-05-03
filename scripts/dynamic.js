//Create an array containing at least 7 strings picked from this list of CSS color valuesLinks to an external site..
let colorArr = ["black","red","aqua","deeppink","whitesmoke","white","midnightblue"];
//Create an unordered list element and store it in a variable.
let list1 = document.createElement("ul");
//Create a new list item element for each item in the array you created.
//Set the innerText property of each element to be the string in the array.
//Set the color CSS property (not a regular property, but part of the style!) of the element to be the string in the array.
//Add the element to the end of your unordered list.
for(let i=0;i<colorArr.length;i++){
   let listItem= document.createElement("li");
   listItem.innerText = colorArr[i];
   listItem.style.color = colorArr[i];
   list1.appendChild(listItem);
};
//Add the whole list to the end of the body of your webpage.
document.body.appendChild(list1);
