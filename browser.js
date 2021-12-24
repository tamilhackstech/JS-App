

document.addEventListener("click",function(e){

    //update
    if(e.target.classList.contains("edit-me")){
       let res= prompt("enter the new value" , e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
       
       axios.post('/update-item',{text:res, id:e.target.getAttribute("data-id")}).then(function(){
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = res
       }).catch(function(){
            console.log("error, try again")
       })
    }

    //delete
    if(e.target.classList.contains("delete-me")){
        confirm("Do you really want to delete this?")
        
        axios.post('/delete-item',{ id:e.target.getAttribute("data-id")}).then(function(){
             e.target.parentElement.parentElement.remove()
        }).catch(function(){
             console.log("error, try again")
        })
     }


})