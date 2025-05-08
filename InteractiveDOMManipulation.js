
        let div=document.getElementById("container")
        let str=""

       function changing(){
        let color1=document.getElementById("color").value
        div.style.backgroundColor=color1
        if(div.style.backgroundColor==="white" || color1.length<=2){
            alert("Invalid color name!")
        }
       }
    
        
        
        function texting(){
            let changed=document.getElementById("text").value
            div.innerText=changed
            if(changed.length===0){
                alert("Please enter some text!")
            }

        }
        
