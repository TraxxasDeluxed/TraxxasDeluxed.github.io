const div = document.querySelector(".text");
const text = "This is how you create a text typing effect with Javascript"

function textTypingEffect(element, text, i = 0 ){
   if(i == 0){
    element.textContent = "";
   }
   element.textContent += text[i];

   //If we reached the end of the string
   if (i === text.length - 1){
        return;
   }

   setTimeout(() => textTypingEffect(element, text, i + 1 ), 50);
}

textTypingEffect(div,text)