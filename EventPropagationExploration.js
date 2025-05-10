
        
        document.getElementById("container").addEventListener("click",()=>{
            alert("Parent Clicked!")
        })
        document.getElementById("child").addEventListener("click",()=>{
            alert("Child Clicked!")
        })
        document.getElementById("gchild").addEventListener("click",()=>{
            alert("GrandChild Clicked!")
            event.stopPropagation()
        })

    