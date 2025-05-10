
document.getElementById("item2").addEventListener("click",()=>{
    let data=document.getElementById("list")
    let li=document.querySelectorAll("li")
    let res=""
    for(let i=0;i<li.length;i++){
      res+=li[i].innerText+" "
      if(i!=1){
        console.log(li[i].innerText)
      }
    }
    alert(res)
  })
    
