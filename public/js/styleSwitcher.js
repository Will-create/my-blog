const links=document.querySelectorAll(".alternate-style");
const toltallinks=links.length;
function setActiveStyle(color){
    for(let i=0;i<toltallinks;i++){
        if(color === links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");
            console.log( links[i]);
        }
        else{
            links[i].setAttribute("disabled","true");
            console.log( links[i]);
        }
    }

}
// body skin
const bodyskin=document.querySelectorAll(".body-skin"),
      totalbodyskin=bodyskin.length;
      for(let i=0; i<totalbodyskin;i++){
        bodyskin[i].addEventListener("change",function(){
            if(this.value === "dark"){
                document.body.className="dark"
            }
            else{
                 document.body.className=""
            }
        }) 
      }
document.querySelector(".toggle-style-switcher").addEventListener("click",() =>{
 document.querySelector(".style-switcher").classList.toggle("open");   
});
