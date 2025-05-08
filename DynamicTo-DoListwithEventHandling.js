

let ul=document.getElementById("list")
function added(){
    event.preventDefault();
    let task=document.getElementById("adding").value
    let li=document.createElement("li")
    li.innerText=task
    if(task.length===0){
        alert("Invalid Task!")
    }
    else{
    ul.append(li)
    }
}
 
   function remove(){
    event.preventDefault();
    let del=document.querySelector("li")
    del.remove()
   }
        let i=0
   function compl(){
    event.preventDefault();
    let com=document.querySelectorAll("li")
    if(i<com.length){
     com[i].style.textDecoration="line-through"
     i++
    }
   }