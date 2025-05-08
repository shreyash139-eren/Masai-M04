const ul = document.querySelector("ul")
function Add(){
let li=document.createElement("li")
li.innerText="New Item"

   if(ul.children.length%2 !== 0){
    li.style.fontWeight="bold"
    li.style.color="blue"
   }
   else{
    li.style.fontStyle="italic"
    li.style.color="red"
   }
   ul.append(li)

}