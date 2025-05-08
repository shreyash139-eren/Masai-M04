
const heading = document.getElementById("heading");
heading.innerText="Welcome to the DOM World!"

const p =document.getElementsByTagName("p");
    for(let i=0;i<p.length;i++){
        p[i].style.color="blue"
    }
    
const container = document.querySelector("#container")
container.style.backgroundColor="yellow"
