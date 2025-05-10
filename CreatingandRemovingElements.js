// function Addp( ) to create an element p with text and then adding it inside the div using appendChild
function Addp(){
    let div = document.getElementById("container")
    let p= document.createElement("p")
    p.innerText="This is a new paragraph."
    div.appendChild(p)
 }
// function RemoveP() to delete the last p element added in the div using removeChild()
 function RemoveP(){
     let div = document.getElementById("container")
     let p=document.querySelector("p")
     div.removeChild(p)
 }
